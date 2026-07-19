import {
  Bot,
  FileText,
  Sparkles,
  Clipboard,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

function ResultCard({ result }) {
  if (!result) return null;

  const copyText = async () => {
    await navigator.clipboard.writeText(result.ai_explanation);
    alert("Copied!");
  };

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="border-b px-8 py-6 flex items-center gap-4">
        <div className="bg-blue-600 rounded-xl p-3">
          <Bot className="text-white w-6 h-6" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            AI Analysis
          </h2>

          <div className="flex items-center gap-2 mt-2 text-slate-500">
            <FileText size={17} />
            <span>{result.filename}</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="text-blue-600" size={20} />
          <h3 className="text-lg font-semibold">
            Medical Report Explanation
          </h3>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-slate-900 mb-6">
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 border-b pb-2">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-3">
                  {children}
                </h3>
              ),

              p: ({ children }) => (
                <p className="text-slate-700 leading-8 mb-4">
                  {children}
                </p>
              ),

              ul: ({ children }) => (
                <ul className="list-disc pl-6 space-y-2 mb-5 text-slate-700">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="list-decimal pl-6 space-y-2 mb-5 text-slate-700">
                  {children}
                </ol>
              ),

              strong: ({ children }) => (
                <strong className="font-semibold text-slate-900">
                  {children}
                </strong>
              ),

              li: ({ children }) => (
                <li className="leading-7">
                  {children}
                </li>
              ),
            }}
          >
            {result.ai_explanation}
          </ReactMarkdown>
        </div>

        <button
          onClick={copyText}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition"
        >
          <Clipboard size={18} />
          Copy Explanation
        </button>
      </div>
    </div>
  );
}

export default ResultCard;