import { useNavigate } from "react-router-dom";

export default function DataExportPage() {
  const navigate = useNavigate();

  const exportData = () => {
    alert("Data exported (mock)");
  };

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-lg shadow">←</button>
        <h1 className="text-xl font-semibold">Data Export</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <p className="mb-4">Download all system data (rides, users, payments)</p>

        <button
          onClick={exportData}
          className="bg-slate-900 text-white px-6 py-2 rounded-lg"
        >
          Export CSV
        </button>
      </div>

    </div>
  );
}