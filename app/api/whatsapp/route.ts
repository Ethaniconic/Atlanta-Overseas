import { NextResponse } from 'next/server';
import Groq from "groq-sdk";

const KNOWLEDGE_BASE = `
You are the "Atlanta Overseas Smart Counselor", the official AI guide for Atlanta Overseas Education, Nagpur.
ESTABLISHED: 2011.
LOCATIONS: Dharampeth & Medical Square Centers in Nagpur.
CONTACT NUMBERS: Dharampeth (+91 9028157794), Medical Square (+91 9970198839).

EXPERTISE:
- MBBS Abroad: Top universities in Georgia, Russia, Kazakhstan, Uzbekistan, Kyrgyzstan.
- IELTS/PTE/TOEFL Coaching: Small batch sizes, mock tests every week, certified trainers.
- Foreign Languages: German (A1-C1), French, Spanish.
- Visa & Documentation: 100% support for SOPs, LORs, and visa interviews.

TONE: Professional, highly precise, and concise. Use bullet points where appropriate for clarity.
GOAL: Answer student/parent queries accurately and PRECISELY. Push for center visits for free personalized counseling.
CRITICAL INSTRUCTION: You MUST always end your response with the following contact information exactly as written:
"For more details, contact us: Dharampeth: +91 9028157794 | Medical Square: +91 9970198839"
`;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get('hub.verify_token') === process.env.VERIFY_TOKEN) {
    return new Response(searchParams.get('hub.challenge'), { status: 200 });
  }
  return new Response('Forbidden', { status: 403 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    
    if (message?.text?.body) {
      const userMessage = message.text.body;
      const from = message.from;

      // Ensure no hidden spaces or newlines from .env.local
      const apiKey = (process.env.ATLANTA_GROQ_KEY || process.env.GROQ_API_KEY || "").trim();
      if (!apiKey) throw new Error("Missing Groq API Key");

      // Initialize Groq inside the handler
      const groq = new Groq({ apiKey });

      // Generate AI Response using Groq
      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: KNOWLEDGE_BASE },
          { role: "user", content: userMessage },
        ],
        model: "llama-3.3-70b-versatile",
      });
      const replyText = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";

      // Send via Meta API
      await fetch(`https://graph.facebook.com/v18.0/${process.env.PHONE_NUMBER_ID}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: from,
          type: "text",
          text: { body: replyText },
        }),
      });
    }
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error("WhatsApp API Error:", error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
