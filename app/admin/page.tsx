'use client';

import React, { useEffect, useState } from 'react';
import { Bot, User, Clock } from 'lucide-react';

interface ChatLog {
  id: string;
  created_at: string;
  session_id: string;
  user_name: string;
  user_message: string;
  bot_response: string;
}

export default function AdminPage() {
  const [logs, setLogs] = useState<ChatLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  async function fetchLogs() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/logs');
      const data = await res.json();
      if (data.logs) {
        setLogs(data.logs);
      } else {
        setLogs([]);
      }
    } catch (error) {
      console.error("Error fetching logs:", error);
      setLogs([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black">Chat Inquiry Logs</h1>
          <button 
            onClick={fetchLogs}
            className="px-4 py-2 bg-brand-navy text-white rounded-lg text-sm font-bold"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <p>Loading inquiries...</p>
        ) : (
          <div className="space-y-6">
            {logs.length === 0 && <p className="text-slate-500">No inquiries yet.</p>}
            {logs.map((log) => (
              <div key={log.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2 font-bold text-slate-500">
                    <Clock size={16} />
                    {new Date(log.created_at).toLocaleString()}
                  </div>
                  <div className="text-xs uppercase tracking-widest font-black text-brand-accent">
                    Session: {log.session_id}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-brand-navy">
                      <User size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">User Message</div>
                      <p className="text-slate-700 dark:text-slate-300">{log.user_message}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0 text-white">
                      <Bot size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">AI Response</div>
                      <p className="text-slate-700 dark:text-slate-300">{log.bot_response}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
