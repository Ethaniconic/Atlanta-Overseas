import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Missing Supabase Configuration" }, { status: 500 });
  }

  try {
    // Initialize with Service Role Key to bypass RLS policies
    const supabaseServer = createClient(supabaseUrl, supabaseKey);
    
    const { data, error } = await supabaseServer
      .from('chat_logs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return NextResponse.json({ logs: data });
  } catch (err: unknown) {
    console.error("Admin Logs Error:", err);
    return NextResponse.json({ error: "Failed to fetch logs" }, { status: 500 });
  }
}
