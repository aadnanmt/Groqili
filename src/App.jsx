import { useState } from "react";
import { requestToGroqili } from "./utils/groq";
import { Light as SyntaxHighlight } from "react-syntax-highlighter";
import "./App.css";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  const [data, setData] = useState("");

  const [loading, setLoading] = useState(false);

  const [content, setContent] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const groqili = await requestToGroqili(content);
      setData(groqili)
    } catch (error) {
      console.error("ERROR:", error)
      setData("Kamu lagi gabisa hubungi Chatbot-nya!!")
    } finally {
      setLoading(false)
    }
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-3xl w-full mx-auto px-4">
      <h1 className="text-indigo-600 text-4xl font-bold mt-5">
        {" "}
        Groqili | React.js
      </h1>
      <p className="text-white mt-4">Ada yang mau tanyakan?</p>
      <form className="flex flex-col py-4 mt-6 w-full gap-6">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Ketik pertanyaanmu disini..."
          className="py-3 px-4 rounded-lg w-full text-md text-white bg-gray-800 border border-gray-600 focus:outline-none focus:border-indigo-500"
        />
        <button
          disabled={loading}
          onClick={handleSubmit}
          id="submit"
          type="submit"
          className={`bg-indigo-600 text-white py-2 px-4 rounded-lg w-full md:w-auto hover:bg-indigo-700 transition-all shadow-md
    ${loading ? "opacity-50 cursor-not-allowed" : ""} 
  `}

        >{loading ? "Sedang Mikiiirrr..." : "Kirim"}</button>
      </form>
      <div className="max-w-xl">
        {data ? (
          <SyntaxHighlight
            language="swift"
            style={oneDark}
            wrapLongLines={true}
          >
            {data}
          </SyntaxHighlight>
        ) : null}
      </div>
    </main>
  );
}

export default App;
