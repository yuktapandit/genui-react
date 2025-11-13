// Load environment variables from .env file immediately
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- Configuration ---
const API_KEY = process.env.GENUI_API_KEY;
const PORT = 5000;

// Check for API Key on startup
if (!API_KEY) {
  console.error('FATAL ERROR: GENUI_API_KEY not defined. Check your .env file.');
  process.exit(1);
}

// Initialize the AI client using the secure key
const ai = new GoogleGenerativeAI(API_KEY);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// --- API Endpoint ---
app.post('/api/generate', async (req, res) => {
  const { prompt, framework } = req.body;

  if (!prompt || !framework) {
    return res.status(400).json({ error: 'Prompt and framework are required.' });
  }

  try {
    const fullPrompt = `
      You are an experienced programmer with expertise in web development and UI/UX design. You create modern, animated, and fully responsive UI components. You are highly skilled in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, Next.js, Vue.js, Angular, and more.

      Now, generate a UI component for: ${prompt} 
      Framework to use: ${framework} 

      Requirements: 
      - The code must be clean, well-structured, and easy to understand. 
      - Optimize for SEO where applicable. 
      - Focus on creating a modern, animated, and responsive UI design. 
      - Include high-quality hover effects, shadows, animations, colors, and typography. 
      - Return ONLY the code, formatted properly in **Markdown fenced code blocks**. 
      - Do NOT include explanations, text, comments, or anything else besides the code. 
      - And give the whole code in a single HTML file.
    `;

    const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;

    res.json({ text: response.text() });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ error: 'Failed to generate code via backend service.' });
  }
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 GenUI Backend running securely on http://localhost:${PORT}`);
});
