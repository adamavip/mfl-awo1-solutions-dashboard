'use client';

import { useEffect, useMemo, useState } from 'react';
import { parse } from 'csv-parse/sync';
import { getSupabaseClient } from '../../lib/supabaseClient';

type ChatMessage = {
  from: 'user' | 'bot';
  text: string;
};

type QARecord = {
  question: string;
  answer: string;
};

const bucket = process.env.NEXT_PUBLIC_SUPABASE_BUCKET ?? '';
const csvPath = process.env.NEXT_PUBLIC_SUPABASE_CSV_PATH ?? '';

function selectAnswer(dataset: QARecord[], prompt: string): string {
  const normalized = prompt.toLowerCase();
  const directMatch = dataset.find((row) => row.question?.toLowerCase().includes(normalized));
  if (directMatch?.answer) {
    return directMatch.answer;
  }

  const fallback = dataset.find((row) => row.answer);
  return fallback?.answer ?? "I'm still learning from the CSV—try refining your question.";
}

export default function Chatbot({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: 'bot', text: 'Hi! Ask me about the data in our Supabase CSV.' }
  ]);
  const [dataset, setDataset] = useState<QARecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState('');

  const supabaseReady = useMemo(() => Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY), []);

  useEffect(() => {
    const loadCsv = async () => {
      if (!supabaseReady || !bucket || !csvPath || dataset.length || loading) return;
      setLoading(true);
      try {
        const supabase = getSupabaseClient();
        const { data, error: downloadError } = await supabase.storage.from(bucket).download(csvPath);
        if (downloadError || !data) {
          throw new Error(downloadError?.message ?? 'Unable to download CSV from Supabase storage');
        }

        const csvText = await data.text();
        const records = parse(csvText, { columns: true, skip_empty_lines: true }) as QARecord[];
        setDataset(records);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error fetching CSV';
        setError(message);
        setMessages((prev) => [
          ...prev,
          { from: 'bot', text: 'I could not load the Supabase CSV yet. Please check the configuration.' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    if (open) {
      void loadCsv();
    }
  }, [open, supabaseReady, bucket, csvPath, dataset.length, loading]);

  const handleSend = () => {
    const prompt = pending.trim();
    if (!prompt) return;

    setMessages((prev) => [...prev, { from: 'user', text: prompt }]);
    setPending('');

    const reply = dataset.length ? selectAnswer(dataset, prompt) : 'Gathering CSV context—try again in a moment!';
    setMessages((prev) => [...prev, { from: 'bot', text: reply }]);
  };

  if (!open) return null;

  return (
    <div className="chatbot-panel" role="dialog" aria-label="Chatbot">
      <div className="chat-header">
        <span>Chatbot helper</span>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
          ✕
        </button>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.from}`}>
            {message.text}
          </div>
        ))}
        {loading && <div className="chat-message bot">Loading CSV from Supabase…</div>}
        {error && <div className="chat-message bot">{error}</div>}
        {!supabaseReady && <div className="chat-message bot">Configure Supabase env variables to enable the chatbot.</div>}
      </div>
      <div className="chat-input">
        <textarea
          value={pending}
          onChange={(e) => setPending(e.target.value)}
          placeholder="Ask something about the data…"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
