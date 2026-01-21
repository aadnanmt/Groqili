import { Groq } from "groq-sdk";

// console.log("CEK ENV:", import.meta.env)
// console.log("CEK API KEY:", import.meta.env.VITE_GROQ_KEY)

const VITE_GROQ_KEY = import.meta.env.VITE_GROQ_KEY;

const groq = new Groq({
  apiKey: VITE_GROQ_KEY,
  dangerouslyAllowBrowser: true,
});

export const requestToGroqili = async (content) => {
  const reply = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "user",
        content,
      },
    ],
  });
  console.log("ISI CHOICE[0]:", reply.choices[0]);
  return reply.choices[0].message.content;
};
