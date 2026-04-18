import { useNavigate } from "react-router-dom";

export default function RewardsPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-lg shadow">←</button>
        <h1 className="text-xl font-semibold">Rewards & Points</h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm">Users earn points per ride. Configure reward logic here.</p>
      </div>

    </div>
  );
}