import { useNavigate } from "react-router-dom";

export default function AppVersionsPage() {
  const navigate = useNavigate();

  const versions = [
    { version: "1.0.0", users: 1200 },
    { version: "1.1.0", users: 800 },
    { version: "2.0.0", users: 300 },
  ];

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-lg shadow">←</button>
        <h1 className="text-xl font-semibold">App Versions</h1>
      </div>

      <div className="space-y-3">
        {versions.map((v, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow flex justify-between">
            <p>{v.version}</p>
            <p>{v.users} users</p>
          </div>
        ))}
      </div>

    </div>
  );
}