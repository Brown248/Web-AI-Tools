"use client";

import { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

interface PromptCopyBoxProps {
  label: string;
  promptText: string;
}

export default function PromptCopyBox({ label, promptText }: PromptCopyBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // กลับเป็นไอคอนเดิมหลัง 2 วินาที
  };

  return (
    <div className="relative group rounded-xl bg-slate-900 border border-slate-700 overflow-hidden mb-4">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700">
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
          {label}
        </span>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-700 hover:bg-blue-600 text-white transition-all duration-300"
        >
          {copied ? (
            <><CheckCircle2 size={14} className="text-green-400" /> คัดลอกแล้ว</>
          ) : (
            <><Copy size={14} /> คัดลอก</>
          )}
        </button>
      </div>
      <div className="p-4 text-sm font-mono text-green-400 leading-relaxed whitespace-pre-wrap">
        {promptText}
      </div>
    </div>
  );
}