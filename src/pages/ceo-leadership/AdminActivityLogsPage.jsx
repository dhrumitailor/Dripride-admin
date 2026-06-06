import { useNavigate } from "react-router-dom";

export default function AdminActivityLogsPage() {
  const navigate = useNavigate();

  const logs = [
    {
      admin: "Rahul",
      action: "Updated Pricing",
      entity: "Base Fare",
      change: "₹10 → ₹12",
      time: "2 mins ago",
    },
    {
      admin: "Anita",
      action: "Approved Refund",
      entity: "Ride #4521",
      change: "₹250 refunded",
      time: "10 mins ago",
    },
    {
      admin: "System",
      action: "Blocked User",
      entity: "User ID 83921",
      change: "Account disabled",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition"
        >
          ←
        </button>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Activity Logs
        </h1>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        {/* Header Row */}
        <div className="grid grid-cols-5 gap-4 p-4 border-b text-xs font-semibold text-slate-500 uppercase">
          <p>Admin</p>
          <p>Action</p>
          <p>Entity</p>
          <p>Change</p>
          <p>Time</p>
        </div>

        {/* Logs */}
        {logs.map((log, i) => (
          <div
            key={i}
            className="grid grid-cols-5 gap-4 p-4 border-b last:border-0 text-sm items-center"
          >
            <p className="font-medium text-slate-900">{log.admin}</p>
            <p className="text-slate-600">{log.action}</p>
            <p className="text-slate-500">{log.entity}</p>
            <p className="text-indigo-600 font-medium">{log.change}</p>
            <p className="text-slate-400 text-xs">{log.time}</p>
          </div>
        ))}

      </div>

    </div>
  );
}