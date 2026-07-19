import { useEffect, useState } from "react";
import {
  History as HistoryIcon,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import API from "../services/api";
import Navbar from "../components/Navbar";

function History() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await API.get("/history");
      setReports(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-600 shadow-lg mb-6">
            <HistoryIcon className="text-white w-10 h-10" />
          </div>

          <h1 className="text-5xl font-extrabold text-slate-900">
            Report History
          </h1>

          <p className="mt-4 text-lg text-slate-500">
            Previously analyzed medical reports
          </p>
        </div>

        {loading ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-12 text-center">
            <p className="text-lg font-semibold text-slate-700">
              Loading reports...
            </p>
          </div>
        ) : reports.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-12 text-center">
            <p className="text-xl text-slate-600">
              No reports found.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {reports.map((report, index) => {
              const open = expanded === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-3 rounded-xl">
                            <FileText className="text-blue-600" size={22} />
                          </div>

                          <div>
                            <h2 className="text-xl font-bold text-slate-800">
                              {report.filename}
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                              AI Medical Report Analysis
                            </p>
                          </div>
                        </div>

                        <p className="mt-6 text-slate-600 leading-7">
                          {report.ai_explanation.slice(0, 180)}
                          {report.ai_explanation.length > 180 && "..."}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          setExpanded(open ? null : index)
                        }
                        className="ml-6 bg-slate-100 hover:bg-slate-200 p-3 rounded-xl transition"
                      >
                        {open ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>
                    </div>

                    {open && (
                      <div className="mt-8 border-t pt-6">
                        <div className="bg-slate-50 rounded-2xl p-6 whitespace-pre-wrap leading-8 text-slate-700">
                          {report.ai_explanation}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default History;