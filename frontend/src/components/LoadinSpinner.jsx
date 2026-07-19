import { LoaderCircle } from "lucide-react";

function LoadingSpinner() {
  return (
    <div className="mt-10 bg-white border border-slate-200 rounded-3xl shadow-xl p-10 flex flex-col items-center justify-center">

      <LoaderCircle className="w-14 h-14 text-blue-600 animate-spin" />

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        Analyzing Your Report
      </h2>

      <p className="mt-2 text-slate-500 text-center max-w-md">
        Our AI is reading your medical report, identifying important
        findings, and generating an easy-to-understand explanation.
      </p>

      <div className="w-full max-w-md bg-slate-200 rounded-full h-2 mt-8 overflow-hidden">
        <div className="h-full bg-blue-600 animate-pulse w-3/4 rounded-full"></div>
      </div>

    </div>
  );
}

export default LoadingSpinner;