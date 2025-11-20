import React, { useState } from 'react'
import { MessageCircle, X, Send, Headphones } from 'lucide-react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi! Need help choosing a plan or checking eligibility?' }])
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    setMessages((m) => [...m, { from: 'user', text: input.trim() }, { from: 'bot', text: 'Thanks! A specialist will reach out shortly. You can also call us at (800) 555-1234.' }])
    setInput('')
  }

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {open && (
        <div className="mb-3 w-80 max-w-[92vw] rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-600/30 to-blue-600/30">
            <div className="flex items-center gap-2 text-sky-300"><Headphones className="w-4 h-4"/> 24/7 Support</div>
            <button onClick={() => setOpen(false)} className="p-1 rounded-md bg-slate-800/70 border border-white/10"><X className="w-4 h-4 text-slate-200"/></button>
          </div>
          <div className="h-56 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={m.from === 'user' ? 'text-right' : 'text-left'}>
                <span className={`inline-block max-w-[85%] px-3 py-2 rounded-xl text-sm ${m.from === 'user' ? 'bg-sky-600/30 text-white border border-sky-300/20' : 'bg-slate-900 text-slate-200 border border-white/10'}`}>{m.text}</span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=> e.key==='Enter' && send()} placeholder="Type your message" className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white outline-none"/>
            <button onClick={send} className="px-3 py-2 rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 text-white border border-sky-300/20"><Send className="w-4 h-4"/></button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="relative inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] border border-sky-300/20">
        <MessageCircle className="w-5 h-5"/> Chat with us
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
      </button>
    </div>
  )
}
