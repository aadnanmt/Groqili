import { useState, useRef, useEffect } from "react";
import { requestToGroqili } from "./utils/groq";
import { Light as SyntaxHighlight } from "react-syntax-highlighter";
import { ChatMessage } from "./components/ChatMessage";
import "./App.css";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {

  const [data, setData] = useState("");

  const [message, setMessage] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hallo! Saya Groqili. Mau coding fitur apa hari ini?", // greeting message
    },
  ]);

  // state input user
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // ref to scroll chat to bottom
  const messageEndRef = useRef(null);

  // very new message added, scroll to bottom
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  // request rate limit
  const [lastRequestTime, setLastRequestTime] = useState(0);
  const intervalRequest = 1000; // 1 second

  // handle form submt
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim() || loading) {
      return;
    }

    const userMsg = {
      id: message.length + 1,
      role: "user",
      content: content.trim(),
    };

    // save message
    setMessage((prevMessages) => [...prevMessages, userMsg]);
    setContent("");

    if (loading) return;

    setLoading(true);

    try {
      // calling API Groq
      const replyContent = await requestToGroqili(content);

      // save bot reply
      const botMsg = {
        id: Date.now() + 1,
        role: "assistant",
        content: replyContent
      };
      setMessage((prev) => [...prev, botMsg]);

    } catch (error) {
      console.error("Error Groq:", error);
      // show error message in chat
      const errorMsg = {
        id: Date.now() + 1,
        role: "assistant",
        content: "Maaf, koneksi putus. Coba lagi ya!"
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      // stop loading indicator
      setLoading(false);
    }
  };

  return (
    // main container
    <main className="flex flex-col h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">

      {/* header */}
      <header className="flex-none p-4 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl z-10">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          {/* logo | soon*/}
          <h1 className="text-lg font-bold tracking-tight">Groqili AI</h1>
          <p className="text-xs text-slate-500">Powered by Llama 3 & Groq</p>
        </div>
      </header>

      {/* chat area  */}
      <section className="flex-1 overflow-y-auto scroll-smooth p-4 md:p-6 custom-scrollbar">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* loop on memory */}
          {message.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}

          {/* indiccator loading */}
          {loading && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-slate-800/50 px-4 py-2 rounded-2xl rounded-bl-sm text-slate-400 text-sm border border-white/5">
                sedang mikir....
              </div>
            </div>
          )}

          {/* element for target scroll */}
          <div ref={messageEndRef} className="h-4" />
        </div>
      </section>

      {/* input area */}
      <footer className="flex-none p-4 bg-slate-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="relative flex items-center">

            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tanya sesuatu..."
              disabled={loading}
              className="w-full bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 rounded-xl py-4 pl-5 pr-14 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
            />

            {/* button send message */}
            <button
              type="submit"
              disabled={loading || !content.trim()}
              className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg disabled:opacity-0 disabled:scale-90 transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              {/* Icon svg */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
              </svg>
            </button>
          </form>

          <p className="text-center text-[10px] text-slate-700 mt-3">
            AI dapat membuat kesalahan.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;