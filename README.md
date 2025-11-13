# 🚀 GenUI - AI Component Generator

## Summary
A React-based web application powered by the Gemini AI that generates modern, responsive UI components from natural language descriptions and selected frameworks.

## 📑 Table of Contents

* [🚀 GenUI - AI Component Generator](#-genui---ai-component-generator)
    * [Summary](#summary)
    * [Overview](#overview)
    * [Dataset](#dataset)
    * [Tools and Technologies](#tools-and-technologies)
    * [Methods](#methods)
    * [Key Insights](#key-insights)
    * [Dashboard/Model/Output](#dashboardmodeloutput)
        * [Dashboard](#dashboard)
        * [Model](#model)
        * [Output](#output)
    * [How to Run this project?](#how-to-run-this-project)
    * [Results & Conclusion](#results--conclusion)
    * [Future Work](#future-work)

## Overview
This project provides a developer tool that streamlines front-end development by leveraging Google's Gemini AI to convert user-defined component descriptions into ready-to-use HTML, CSS, and JavaScript code. It features a user-friendly interface for prompt input, framework selection, live preview, and code export.

## Dataset
This project does not use a traditional dataset for training. Instead, it relies on the pre-trained **Google Gemini 2.5 Flash** large language model, which has been extensively trained on a vast corpus of code and text data, enabling it to understand context and generate programming code effectively.

## Tools and Technologies
* **Front-end Framework:** React
* **Styling:** Tailwind CSS (for modern, responsive UI)
* **AI Integration:** Google Gen AI SDK (`@google/genai`)
* **Large Language Model:** Gemini 2.5 Flash
* **Code Editor Component:** Monaco Editor (`@monaco-editor/react`)
* **UI Components:** `react-select`, `react-icons`, `react-spinners`, `react-toastify`
* **Development Environment:** Node.js, npm

## Methods
1.  **User Input:** The application captures a natural language description of the desired UI component and the target framework (e.g., HTML + Tailwind CSS).
2.  **AI Prompt Construction:** A sophisticated system prompt is dynamically created, instructing the Gemini AI model to act as an "experienced programmer" and to generate clean, modern, responsive code with specific stylistic requirements, always returning **only the code** in a single HTML file.
3.  **API Call:** The constructed prompt is sent to the Google Gemini 2.5 Flash API via the `@google/genai` SDK.
4.  **Code Extraction:** Upon receiving the AI's response, a regular expression is used to robustly extract the raw code block, removing any Markdown formatting or extraneous text.
5.  **Display & Preview:** The extracted code is displayed in an interactive Monaco Editor. A live preview is rendered in an `iframe` using `srcDoc`, providing an isolated environment to visualize the generated component.
6.  **Utility Functions:** Features for copying the code to the clipboard and downloading it as an `.html` file are provided.

## Key Insights
* **AI-Driven Efficiency:** The project demonstrates the power of large language models to significantly reduce the manual effort in front-end component development.
* **Rapid Prototyping:** Developers can quickly iterate on UI designs and experiment with different framework approaches by simply modifying their natural language prompt.
* **Seamless Integration:** The combination of React's component-based architecture with a powerful AI backend creates a highly functional and intuitive development tool.
* **Secure Execution:** Using `iframe` with `srcDoc` ensures the live preview of generated code is isolated from the main application, enhancing security.

## Dashboard/Model/Output
### Dashboard
<img src="genui1.png" alt="GenUI-1" width="80%">
The application features a two-pane layout:
* **Left Pane:** Contains input controls for the AI prompt (a textarea) and a framework selection dropdown. It also includes the "Generate" button with a loading spinner.
* **Right Pane:** Serves as the output area, initially showing a placeholder. Once code is generated, it switches to a tabbed interface for "Code" (Monaco Editor) and "Preview" (iframe). A toolbar with copy, export, new tab, and refresh options is also present.

### Model
The core of the generation is powered by the **Google Gemini 2.5 Flash** large language model. This model is responsible for interpreting the user's component description and framework choice, then synthesizing the appropriate HTML, CSS, and JavaScript code.

### Output
The primary output is a **complete HTML file** (as a string) that encapsulates the requested UI component, including its styling (inline or `<style>` blocks) and any necessary JavaScript. This output is rendered visually in the preview pane and available for direct copying or download.

## How to Run this project?
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-folder>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Get a Gemini API Key:**
    * Go to the [Google AI Studio](https://aistudio.google.com/).
    * Generate a new API key.
4.  **Configure API Key:**
    * Locate the line `apiKey: "YOUR_API_KEY"` in `Home.jsx` (or a similar file where the `GoogleGenAI` client is initialized).
    * Replace `"YOUR_API_KEY"` with your actual Gemini API key. **(For a production environment, it is highly recommended to proxy API requests through a secure backend to prevent exposing your API key on the client-side.)**
5.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The application will typically open in your browser.

## Results & Conclusion
The AI Component Generator successfully demonstrates the capability to rapidly generate functional and visually appealing UI components based on textual descriptions. It significantly reduces the manual coding effort, offering a tangible solution for accelerating front-end development workflows. The integrated live preview and code export features make it a practical tool for designers and developers alike, validating the potential of generative AI in software engineering.

## Future Work
* **Advanced Framework Support:** Extend generation capabilities to produce native React, Vue, or Angular component files (`.jsx`, `.vue`, `.ts`) with separate styling and logic files.
* **Iterative Design & Refinement:** Implement a "Refine" feature where users can provide further instructions or edits directly on the generated code to update it via AI.
* **Code Quality & Security Scans:** Integrate automated tools or AI prompts to check generated code for best practices, accessibility (A11y), performance, and potential security vulnerabilities.
* **User Accounts & History:** Add authentication and user profiles to save generated components, manage API keys, and track usage history.
* **Deployment:** Host the application on a cloud platform (e.g., Netlify, Vercel) for wider access.
