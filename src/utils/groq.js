import { Groq } from "groq-sdk";

// console.log("CEK ENV:", import.meta.env)
// console.log("CEK API KEY:", import.meta.env.VITE_GROQ_KEY)

const VITE_GROQ_KEY = import.meta.env.VITE_GROQ_KEY;

if (!VITE_GROQ_KEY) {
  throw new Error(
    "VITE_GROQ_KEY not defined. Chek env file."
  );
}

const groq = new Groq({
  apiKey: VITE_GROQ_KEY,
  dangerouslyAllowBrowser: true,  // change to true if yu want to allow browser usage
});

const GROQ_TIMEOUT = 30000; // 30 second

export const requestToGroqili = async (content) => {
  // Validation input
  if (!content || typeof content !== "string") {
    throw new Error("Invalid content: must be non-empty string");
  }

  const trimmedContent = content.trim();
  
  if (trimmedContent.length === 0) {
    throw new Error("Content cannot be empty");
  }
  
  if (trimmedContent.length > 5000) {  // set reasonable limit
    throw new Error("Content exceeds maximum length (5000 chars)");
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), GROQ_TIMEOUT);

  try {
    const reply = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: trimmedContent,
        },
      ],
    });
    return reply.choices[0].message.content;
  } finally {
    clearTimeout(timeoutId);
  }
};

// remove console.log in production mode
if (process.env.NODE_ENV === "development") {
  console.debug("API response receive from Groq sdk");
}
