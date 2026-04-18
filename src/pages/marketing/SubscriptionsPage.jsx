import { useNavigate } from "react-router-dom";

export default function SubscriptionsPage() {
  const navigate = useNavigate();

  const users = [
    { name: "John", plan: "Monthly", amount: "₹199" },
    { name: "Priya", plan: "Weekly", amount: "₹99" },
  ];

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-lg shadow">←</button>
        <h1 className="text-xl font-semibold">Subscriptions</h1>
      </div>

      <div className="space-y-3">
        {users.map((u, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow flex justify-between">
            <p>{u.name}</p>
            <p>{u.plan}</p>
            <p>{u.amount}</p>
          </div>
        ))}
      </div>

    </div>
  );
}