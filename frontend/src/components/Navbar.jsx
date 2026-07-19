import { NavLink } from "react-router-dom";
import { Stethoscope, House, History } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl px-8 py-5 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-4">

        <div className="bg-blue-600 p-3 rounded-xl shadow-md">
          <Stethoscope className="w-6 h-6 text-white" />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            MedExplain AI
          </h1>

          <p className="text-sm text-gray-500">
            AI-powered Medical Report Analyzer
          </p>
        </div>

      </div>

      {/* Navigation */}

      <div className="flex items-center gap-3">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <House size={18} />
          Home
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <History size={18} />
          History
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;