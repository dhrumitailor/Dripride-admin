import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RefundRequestsPage() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([
    {
      id: 1,
      user: "John Doe",
      amount: "₹250",
      reason: "Driver cancelled",
      status: "Pending",
    },
    {
      id: 2,
      user: "Priya Sharma",
      amount: "₹180",
      reason: "Wrong charge",
      status: "Pending",
    },
  ]);

  const updateStatus = (id, status) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status } : r
      )
    );
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white shadow"
        >
          ←
        </button>
        <h1 className="text-xl font-semibold">Refund Requests</h1>
      </div>

      {/* List */}
      <div className="space-y-4">
        {requests.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 rounded-xl shadow space-y-2"
          >
            <p className="font-semibold">{r.user}</p>
            <p className="text-sm text-gray-500">{r.reason}</p>
            <p className="text-sm">{r.amount}</p>

            <div className="flex justify-between items-center">
              <span className="text-yellow-600 text-xs">
                {r.status}
              </span>

              {r.status === "Pending" && (
                <div className="flex gap-2">
                  <button
                    onClick={() => updateStatus(r.id, "Approved")}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => updateStatus(r.id, "Rejected")}
                    className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-xs"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}