import React from 'react';

type TerminalBlockProps = {
  title?: string;
  commands: { input: string; output: string }[];
};

export const TerminalBlock = ({ title = 'bash', commands }: TerminalBlockProps) => {
  return (
    <div className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 font-mono text-xs leading-relaxed text-zinc-400 overflow-hidden shadow-2xl">
      {/* Cabecera de la terminal */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/60 px-4 py-2">
        <div className="flex space-x-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
        </div>
        <div className="text-zinc-500 font-semibold select-none">{title}</div>
        <div className="w-9" /> {/* Compensación para centrado */}
      </div>
      
      {/* Cuerpo de la terminal */}
      <div className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
        {commands.map((cmd, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center text-zinc-300">
              <span className="text-zinc-500 mr-2 select-none">$</span>
              <span>{cmd.input}</span>
            </div>
            <div className="whitespace-pre-wrap text-zinc-500 pl-4 border-l border-zinc-900/50">
              {cmd.output}
            </div>
          </div>
        ))}
        <div className="flex items-center text-zinc-300 animate-pulse">
          <span className="text-zinc-500 mr-2 select-none">$</span>
          <span className="h-3 w-1.5 bg-zinc-400" />
        </div>
      </div>
    </div>
  );
};
export default TerminalBlock;
