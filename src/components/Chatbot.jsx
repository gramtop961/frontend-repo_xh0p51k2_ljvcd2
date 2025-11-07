import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text:
        "Hi! I'm your trek buddy bot. Ask me about popular treks, best seasons, packing lists, or stays. How can I help?",
    },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  function handleSend(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const userMsg = { role: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    // Simple local reply logic for now
    const normalized = text.toLowerCase();
    let reply = "Got it! I can help with treks, difficulty, durations, and stays.”;
    if (normalized.includes('season') || normalized.includes('when')) {
      reply = 'Best seasons: Spring (Mar–May) and Autumn (Sep–Nov) for clear skies and stable conditions.';
    } else if (normalized.includes('packing') || normalized.includes('pack')) {
      reply = 'Essentials: layered clothing, waterproof shell, broken-in boots, headlamp, 2L hydration, snacks, basic first-aid.';
    } else if (normalized.includes('stay') || normalized.includes('hotel') || normalized.includes('camp')) {
      reply = 'We pair treks with cozy camps, homestays, and boutique lodges. Tell me dates and group size to check availability.';
    } else if (normalized.includes('difficulty')) {
      reply = 'Difficulty guide: Easy (family-friendly), Moderate (active hikers), Difficult (experienced, steep gains).';
    } else if (normalized.includes('booking') || normalized.includes('book')) {
      reply = 'I can start a booking draft. Share preferred trek, dates, and number of guests.';
    }

    setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: reply }]);
    }, 400);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Toggle button */}
      <button
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-3 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-offset-neutral-900"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Chat</span>
      </button>

      {/* Chat window */}
      {open && (
        <div className="mt-3 w-[92vw] max-w-sm overflow-hidden rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/80">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Trek Buddy</p>
                <p className="text-[11px] text-neutral-400">Friendly robot guide</p>
              </div>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={listRef} className="max-h-80 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex items-start gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`mt-1 rounded-full p-1.5 ${m.role === 'user' ? 'bg-orange-500/20 text-orange-300' : 'bg-white/10'}`}>
                  {m.role === 'user' ? (
                    <User className="h-3.5 w-3.5" />
                  ) : (
                    <Bot className="h-3.5 w-3.5" />
                  )}
                </div>
                <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-orange-500/15 text-orange-100 border border-orange-400/20'
                    : 'bg-white/5 text-neutral-100 border border-white/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-white/10 px-3 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about treks, stays, packing..."
              className="flex-1 rounded-md bg-neutral-800 px-3 py-2 text-sm text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 rounded-md bg-orange-500 px-3 py-2 text-sm font-medium text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
