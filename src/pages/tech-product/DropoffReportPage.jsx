import { useNavigate } from "react-router-dom";

export default function DropoffReportPage() {
  const navigate = useNavigate();

  const data = [
    { screen: "Login", users: 1200, drop: "10%" },
    { screen: "Booking", users: 800, drop: "25%" },
    { screen: "Payment", users: 500, drop: "40%" },
  ];

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-lg shadow">←</button>
        <h1 className="text-xl font-semibold">Drop-off Report</h1>
      </div>

      <div className="bg-white rounded-xl shadow divide-y">
        {data.map((d, i) => (
          <div key={i} className="p-4 flex justify-between">
            <p>{d.screen}</p>
            <p>{d.users} users</p>
            <p className="text-red-500">{d.drop}</p>
          </div>
        ))}
      </div>

    </div>
  );
}