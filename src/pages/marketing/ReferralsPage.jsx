import { useNavigate } from "react-router-dom";

export default function ReferralsPage() {
  const navigate = useNavigate();

  const data = [
    { user: "John", referred: 3 },
    { user: "Amit", referred: 5 },
  ];

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-lg shadow">←</button>
        <h1 className="text-xl font-semibold">Referrals</h1>
      </div>

      <div className="space-y-3">
        {data.map((d, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow flex justify-between">
            <p>{d.user}</p>
            <p>{d.referred} referrals</p>
          </div>
        ))}
      </div>

    </div>
  );
}