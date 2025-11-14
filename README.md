# 🚀 GenUI – AI Component Generator

> GenUI is a full-stack AI-powered web application that transforms natural language prompts into beautiful, modern, and responsive UI components using Google Gemini AI, React, and Node.js.

---

## 📑 Table of Contents
- [✨ Summary](#-summary)
- [📘 Overview](#-overview)
- [📊 Dataset](#-dataset)
- [🧩 Architecture Overview](#-architecture-overview)
- [🛠️ Tools and Technologies](#️-tools-and-technologies)
- [⚙️ Methods](#️-methods)
- [💡 Backend Overview](#-backend-overview)
- [🎨 Frontend Overview](#-frontend-overview)
- [🔍 Key Insights](#-key-insights)
- [📊 Dashboard/Model/Output](#-dashboardmodeloutput)
- [⚡ How to Run this Project?](#-how-to-run-this-project)
- [🏁 Results & Conclusion](#-results--conclusion)
- [🚧 Future Work](#-future-work)

---

## ✨ Summary
GenUI enables developers to instantly generate responsive front-end components by describing them in plain English.  
It combines Google Gemini AI’s natural language understanding with React’s component-based architecture and Express.js for secure API handling.

---

## 📘 Overview
GenUI provides a developer tool that streamlines front-end creation by using AI to generate HTML, CSS, and JavaScript components.  
It includes a prompt input interface, framework selector, live preview, and export options — making design and development faster and smarter.

---

## 📊 Dataset
This project does not rely on a traditional dataset. It uses Google Gemini 2.5 Flash, a large language model pre-trained on diverse web and code data, allowing it to understand natural language and output structured, production-ready UI code.

---

## 🧩 Architecture Overview
flowchart TD
A[User Input (Prompt + Framework)] --> B[Frontend (React App)]
B --> C[POST /api/generate]
C --> D[Backend (Node.js + Express)]
D --> E[Google Gemini 2.5 Flash Model]
E --> F[Generated UI Code]
F --> G[Frontend Display (Monaco Editor + Live Preview)]

---

## 🛠️ Tools and Technologies

### 🖥️ Frontend
| Technology | Purpose |
|-------------|----------|
| React | Component-based UI framework |
| Tailwind CSS | Utility-first responsive design framework |
| Vite | Fast build tool and dev environment |
| Monaco Editor (@monaco-editor/react) | Integrated code editor |
| React Select | Framework selection dropdown |
| React Icons | Icon set for toolbar actions |
| React Toastify | Notifications and alerts |
| React Spinners | Loading indicators |

### ⚙️ Backend
| Technology | Purpose |
|-------------|----------|
| Node.js + Express | Backend server and REST API |
| @google/generative-ai | Connects to Google Gemini API |
| dotenv | Secure environment variable management |
| CORS | Enables cross-origin communication |
| Nodemon (Dev) | Auto-restarts server during development |

### ☁️ AI Integration
| Tool | Description |
|------|-------------|
| Google Gemini 2.5 Flash | Generates HTML/CSS/JS from user prompts |
| Prompt Engineering | Dynamically builds descriptive AI instructions |

### 🧠 Development Environment
| Tool | Description |
|------|-------------|
| Node.js & npm | Runtime and package manager |
| VS Code / Any IDE | Development and debugging |
| Git & GitHub | Version control and hosting |

---

## ⚙️ Methods

<details>
<summary>🧠 Click to Expand: Workflow Steps</summary>

- User Input: User provides a prompt and selects a framework (HTML, Tailwind, React, etc.).
- Backend Request: Frontend sends prompt to /api/generate endpoint.
- Prompt Engineering: Backend appends professional AI instructions for clean, modern, responsive design.
- AI Code Generation: Gemini model produces complete code in one HTML block.
- Code Extraction: Response is parsed to retrieve only the code portion.
- Display: The code is shown in Monaco Editor and rendered live in an iframe preview.
- Utilities: Users can copy or download the generated code instantly.

</details>

---

## 💡 Backend Overview

<details>
<summary>🧩 Click to Expand: Backend Details</summary>

### 🧠 Responsibilities
- Stores and secures Gemini API key using .env  
- Handles frontend requests and sends them to Gemini model  
- Cleans and returns only generated code in JSON  
- Manages error handling and input validation  

### 🧾 API Endpoint
`POST /api/generate`

**Request Example**
{
"prompt": "Create a responsive pricing card with gradient background",
"framework": "HTML + Tailwind CSS"
}


**Response Example**
{
"text": "<!DOCTYPE html> ... (full HTML code) ..."
}


### 📄 Example .env File
GENUI_API_KEY=your_gemini_api_key_here
PORT=5000


</details>

---

## 🎨 Frontend Overview

<details>
<summary>🎨 Click to Expand: Frontend UI Details</summary>

### 💻 Features
- React + Tailwind CSS powered UI  
- Monaco Editor for viewing code  
- Live Preview in isolated iframe  
- Copy / Download / Refresh tools  
- Loading Animations for API requests  
- Error Toasts for invalid input  

### 🧱 Layout
- Left Panel: Prompt input, framework dropdown, and generate button  
- Right Panel: Tabs for Code and Preview  
- Toolbar: Options for copying, downloading, or regenerating the component  

</details>

---

## 🔍 Key Insights
- ✅ Secure backend prevents exposing API key  
- ✅ Reduces manual front-end development time  
- ✅ Generates professional, animated UI instantly  
- ✅ Fosters creativity by merging AI + code generation  
- ✅ Supports rapid prototyping for design teams  

---

## 📊 Dashboard/Model/Output

### 🖥️ Dashboard

<img width="1856" height="836" alt="genui1" src="https://github.com/user-attachments/assets/73de835a-1566-417b-a100-95aa7655a534" />


<img width="1849" height="844" alt="genui_2" src="https://github.com/user-attachments/assets/e9dfa647-3cf9-498b-ab61-3ce7584cbdfc" />


<img width="1849" height="836" alt="genui_3" src="https://github.com/user-attachments/assets/2593e85e-5171-4720-b33d-5bfd5f075670" />



<img width="1899" height="753" alt="genui_4" src="https://github.com/user-attachments/assets/9e437ae3-2d32-43c7-98a5-d9e8c47a5f01" />



The application features a two-pane layout:
* **Left Pane:** Contains input controls for the AI prompt (a textarea) and a framework selection dropdown. It also includes the "Generate" button with a loading spinner.
* **Right Pane:** Serves as the output area, initially showing a placeholder. Once code is generated, it switches to a tabbed interface for "Code" (Monaco Editor) and "Preview" (iframe). A toolbar with copy, export, new tab, and refresh options is also present.

### 🤖 Model
Driven by Google Gemini 2.5 Flash, capable of generating clean, production-level HTML/CSS/JS.

### 💻 Output
Displays AI-generated UI code in Monaco Editor, alongside a live preview for instant visualization.

---

## ⚡ How to Run this Project?

### 🖥️ Frontend Setup
cd syntax
npm install
npm start


### ⚙️ Backend Setup
cd server
npm install


Create a `.env` file inside `/server`:
GENUI_API_KEY=your_gemini_api_key_here
PORT=5000


Run the backend server:
node server.js

---

## 🏁 Results & Conclusion
GenUI showcases how AI-assisted development can revolutionize front-end workflows.  
By translating human language into functional code, it empowers developers to create faster, iterate better, and prototype smarter — all within seconds.

---

## 🚧 Future Work
- 🔹 Add framework-specific output (React, Vue, Angular components)  
- 🔹 Integrate AI “Refine” for iterative code improvement  
- 🔹 Add user authentication and saved history  
- 🔹 Implement automated code validation & accessibility checks
