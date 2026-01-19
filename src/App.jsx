import "./App.css";
import { requestToGroqili } from "./utils/groq";

function App() {
  const handleSubmit = async () => {
    const ai = await requestToGroqili(content.value);
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center">
      <h1 className="text-indigo-600 text-4xl font-bold">
        {" "}
        Groqili | React.js
      </h1>
      <p className="text-white mt-4">Ada yang mau tanyakan?</p>
      <form className="flex flex-col py-4 mt-6 w-80">
        <input
          type="text"
          id="content"
          placeholder="Ketik pertanyaanmu disini..."
          className="py-3 px-4 rounded-md text-md text-white bg-gray-800 border border-gray-600 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleSubmit}
          id="submit"
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-r-md hover:bg-indigo-700 mt-5 rounded-md"
        >
          Kirim
        </button>
      </form>
    </main>
  );
}

export default App;
