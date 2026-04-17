import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ScheduledRidesPage() {
  const navigate = useNavigate();

  const [rides, setRides] = useState([
    {
      id: 1,
      rider: "John Doe",
      time: "10:30 AM",
      status: "No Captain",
    },
    {
      id: 2,
      rider: "Priya Sharma",
      time: "12:00 PM",
      status: "Assigned",
    },
  ]);

  const assignCaptain = (id) => {
    setRides((prev) =>
      prev.map((ride) =>
        ride.id === id ? { ...ride, status: "Assigned" } : ride
      )
    );
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white shadow hover:bg-gray-100"
        >
          ←
        </button>
        <h1 className="text-xl font-semibold">Scheduled Rides</h1>
      </div>

      {/* List */}
      <div className="space-y-4">
        {rides.map((ride) => (
          <div
            key={ride.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{ride.rider}</p>
              <p className="text-sm text-gray-500">{ride.time}</p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  ride.status === "Assigned"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {ride.status}
              </span>

              {ride.status === "No Captain" && (
                <button
                  onClick={() => assignCaptain(ride.id)}
                  className="bg-slate-900 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Assign
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}