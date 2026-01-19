import { Groq } from "groq-sdk";

console.log("CEK ENV:", import.meta.env)
console.log("CEK API KEY:", import.meta.env.VITE_GROQ_KEY)

const VITE_GROQ_KEY = import.meta.env.VITE_GROQ_KEY;

const groq = new Groq({
  apiKey: VITE_GROQ_KEY,
  dangerouslyAllowBrowser: true,
});

const requestToGroqili = async (content) => {
  const reply = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content,
      },
    ],
    model: "llama3-8b-8192",
  });
  return reply;
};
