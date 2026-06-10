import { NextResponse } from 'next/server';
import Groq from "groq-sdk";
import { createClient } from '@supabase/supabase-js';

const SYSTEM_PROMPT = `
You are the "Atlanta Overseas Smart Counselor", the official AI guide for Atlanta Overseas Education, Nagpur.
ESTABLISHED: 2011 (Part of Atlanta Computer Institute).
LOCATIONS: 
1. Dharampeth Center
2. Medical Square Center
CONTACT NUMBERS: Dharampeth (+91 9028157794), Medical Square (+91 9970198839).

EXPERTISE:
- MBBS Abroad: Top universities in Georgia, Russia, Kazakhstan, Uzbekistan, Kyrgyzstan. Features: MCI/NMC approved, English medium, low tuition, direct admission.
- IELTS/PTE/TOEFL Coaching: Small batch sizes, mock tests every week, certified trainers.
- Foreign Languages: German (A1-C1), French, Spanish. GOETHE exam preparation.
- Visa & Documentation: 100% support for SOPs, LORs, and visa interviews.

TONE: Professional, highly precise, concise, and encouraging. Use bullet points where appropriate for clarity.
GOAL: Answer student/parent queries accurately and PRECISELY based on the above info. Always encourage them to visit our Nagpur centers for a free personalized counseling session.
CRITICAL INSTRUCTION: You MUST always end your response with the following contact information exactly as written:
"For more details, contact us: Dharampeth: +91 9028157794 | Medical Square: +91 9970198839"
`;

export async function POST(req: Request) {
  try {
    const { message, sessionId, userName } = await req.json();

    // Ensure no hidden spaces or newlines from .env.local
    const apiKey = (process.env.ATLANTA_GROQ_KEY || process.env.GROQ_API_KEY || "").trim();
    
    // 1. Check Groq Key
    if (!apiKey || apiKey === "your_groq_api_key_here") {
      return NextResponse.json({ 
        response: "Bot is currently in 'Offline Mode'. Please ensure ATLANTA_GROQ_KEY is correctly set in .env.local." 
      });
    }

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Initialize Groq inside the handler to prevent stale closures in Next.js
    const groq = new Groq({ apiKey });

    // 2. Generate Response using Groq (Llama 3.3)
    let aiResponse = "";
    try {
      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        model: "llama-3.3-70b-versatile",
      });
      aiResponse = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";
    } catch (aiError: unknown) {
      console.error("Groq API Error:", aiError);
      
      // Check for Invalid API Key specifically
      if (
        (typeof aiError === 'object' && aiError !== null && 'status' in aiError && (aiError as any).status === 401) || 
        (aiError instanceof Error && aiError.message.includes("Invalid API Key"))
      ) {
        return NextResponse.json({ 
          response: "Bot Error: The ATLANTA_GROQ_KEY in .env.local appears to be invalid. Please check your Groq Dashboard." 
        });
      }

      return NextResponse.json({ response: "The AI is currently taking a break. Please visit our Nagpur centers or WhatsApp us!" });
    }

    // 3. Optional: Store in Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const supabaseServer = createClient(supabaseUrl, supabaseKey);
        await supabaseServer.from('chat_logs').insert([
          { 
            session_id: sessionId, 
            user_name: userName || 'Anonymous', 
            user_message: message, 
            bot_response: aiResponse 
          }
        ]);
      } catch {
        console.warn("Supabase log skipped.");
      }
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Critical Chat API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
