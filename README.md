# 🩺 MedExplain AI

**MedExplain AI** is an AI-powered web application that simplifies complex medical reports into easy-to-understand explanations. Users can upload PDF medical reports and receive clear, patient-friendly summaries generated using Large Language Models.

---

## 🚀 Features

- 📄 Upload medical reports in PDF format
- 🤖 AI-generated simplified explanations
- 🩺 Converts complex medical terminology into plain English
- 📚 Stores report history using MongoDB
- ⚡ Fast and responsive React interface
- 🎨 Modern drag-and-drop upload experience

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router
- Lucide React

### Backend
- Flask
- PyMuPDF
- MongoDB Atlas
- OpenRouter API
- OpenAI Python SDK

### AI
- GPT-4.1 Nano (via OpenRouter)

---

## 📂 Project Structure

```
MedExplain-AI/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── uploads/
│   ├── app.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ How It Works

1. Upload a medical report (PDF)
2. The backend extracts text using PyMuPDF
3. The extracted text is sent to an AI model through OpenRouter
4. The AI generates an easy-to-understand explanation
5. The report and explanation are stored in MongoDB
6. Users can revisit previous reports from the History page

---

## 📸 Application

### Home Page
- Upload PDF reports
- Drag & Drop support
- AI-generated explanations

### History Page
- View previously uploaded reports
- Expand reports to read full explanations

---

## 🧠 AI Prompting

The application uses prompt engineering techniques to:

- Simplify medical terminology
- Explain abnormal findings
- Highlight important observations
- Maintain patient-friendly language
- Avoid unnecessary medical jargon

---

## 🔒 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
OPENROUTER_API_KEY=your_api_key
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
```

---

## 💻 Installation

### Clone the repository

```bash
git clone https://github.com/shishirr04/MedExplain-AI.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

---

## 📌 Future Improvements

- User authentication
- OCR support for scanned reports
- Multi-language explanations
- Voice-based report summaries
- Report comparison
- Medical recommendation engine
- Download AI explanation as PDF

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience with:

- Full-stack web development
- REST API development using Flask
- React component architecture
- MongoDB database integration
- PDF text extraction
- Generative AI integration
- Prompt engineering
- Environment variable management
- Git & GitHub version control

---

## ⚠️ Disclaimer

MedExplain AI is intended for educational purposes only. AI-generated explanations should not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical decisions.

---

## 👨‍💻 Author

**Shishir R**

Computer Science Engineering (Data Science)

Passionate about Artificial Intelligence, Machine Learning, and Full-Stack AI Applications.

---

⭐ If you found this project interesting, consider giving it a star!
