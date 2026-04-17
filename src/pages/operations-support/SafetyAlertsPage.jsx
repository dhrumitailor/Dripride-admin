import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SafetyAlertsPage() {
  const navigate = useNavigate();

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      user: "John Doe",
      issue: "SOS triggered during ride",
      priority: "High",
      status: "Open",
    },
    {
      id: 2,
      user: "Ravi Kumar",
      issue: "Ride flagged unsafe",
      priority: "Medium",
      status: "Open",
    },
  ]);

  const resolveAlert = (id) => {
    setAlerts((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status: "Resolved" } : a
      )
    );
  };

  const priorityColor = (p) => {
    if (p === "High") return "bg-red-100 text-red-700";
    if (p === "Medium") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="space-y-6">

      {/* 🔥 Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition"
        >
          ←
        </button>
        <h1 className="text-xl font-semibold">Safety Alerts</h1>
      </div>

      {/* 🚨 Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-white p-4 rounded-xl shadow flex flex-col gap-3"
          >
            {/* Top row */}
            <div className="flex justify-between items-center">
              <p className="font-semibold">{alert.user}</p>

              <span
                className={`text-xs px-2 py-1 rounded-full ${priorityColor(alert.priority)}`}
              >
                {alert.priority}
              </span>
            </div>

            {/* Issue */}
            <p className="text-sm text-gray-600">{alert.issue}</p>

            {/* Bottom */}
            <div className="flex justify-between items-center">
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  alert.status === "Open"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {alert.status}
              </span>

              {alert.status === "Open" && (
                <button
                  onClick={() => resolveAlert(alert.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
                >
                  Resolve
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}