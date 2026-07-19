import { useState } from "react";
import { UploadCloud } from "lucide-react";

import API from "../services/api";

import Navbar from "../components/Navbar";
import DragDropUpload from "../components/DragDropUpload";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultCard from "../components/ResultCard";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      setResult(null);

      const response = await API.post("/upload", formData);

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Hero */}

        <div className="text-center mb-10">

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-600 mb-6 shadow-lg">
            <UploadCloud className="text-white w-10 h-10" />
          </div>

          <h1 className="text-5xl font-extrabold text-slate-900">
            MedExplain AI
          </h1>

          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Upload your medical report and receive an AI-powered explanation
            in simple, easy-to-understand language.
          </p>

        </div>

        {/* Upload Card */}

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

          <h2 className="text-2xl font-bold text-slate-800">
            Upload Medical Report
          </h2>

          <p className="text-slate-500 mt-2">
            Supports PDF reports only.
          </p>

          <DragDropUpload
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 transition text-white py-4 rounded-2xl text-lg font-semibold"
          >
            {loading ? "Analyzing Report..." : "Analyze Report"}
          </button>

        </div>

        {loading && <LoadingSpinner />}

        {!loading && result && (
          <ResultCard result={result} />
        )}

      </div>
    </div>
  );
}

export default Home;