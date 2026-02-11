import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";

  // function render content
  const renderContent = (content) => {

    // backtick
    const parts = content.split('```');

    return parts.map((part, index) => {
        
        // check code block
      if (index % 2 === 1) {
        
        // extract language
        const firstLineBreak = part.indexOf('\n');
        const language = part.substring(0, firstLineBreak).trim() || 'javascript';
        const code = part.substring(firstLineBreak + 1);

        return (
          <div key={index} className="rounded-md overflow-hidden my-3 border border-white/10 shadow-sm">

            {/* small header */}
            <div className="bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400 border-b border-white/5 flex justify-between items-center">
              <span className="font-mono font-semibold">{language}</span>
              <span className="text-[10px] opacity-70">codeX</span>
            </div>
            
            {/* highlighter code */}
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              customStyle={{ margin: 0, padding: '1rem', fontSize: '0.85rem', lineHeight: '1.5' }}
              wrapLongLines={true}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      } else {

        return (
          <p key={index} className="whitespace-pre-wrap leading-relaxed mb-1 last:mb-0">
            {part}
          </p>
        );
      }
    });
  };

  return (
    <div className={`flex w-full mb-6 ${isUser ? "justify-end" : "justify-start"}`}>

      {/* bubble chat container */}
      <div
        className={`relative max-w-[85%] md:max-w-[75%] px-5 py-3.5 text-sm md:text-base shadow-md transition-all
          ${
            isUser
              ? "bg-blue-600 text-white rounded-l-2xl rounded-tr-2xl rounded-br-sm"
              : "bg-zinc-800/80 backdrop-blur-sm text-zinc-100 border border-white/5 rounded-r-2xl rounded-tl-2xl rounded-bl-sm" // Style Bot (Ekor Kiri Bawah)
          }
        `}
      >
        {renderContent(message.content)}
      </div>

    </div>
  );
};