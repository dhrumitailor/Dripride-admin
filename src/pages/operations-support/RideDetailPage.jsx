import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RideDetailPage() {
  const navigate = useNavigate();

  const [rideId, setRideId] = useState("");
  const [ride, setRide] = useState(null);

  const handleSearch = () => {
    setRide({
      id: "RIDE123",
      rider: "John Doe",
      captain: "Ravi Kumar",
      from: "Andheri",
      to: "Bandra",
      fare: "₹250",
      status: "Completed",
    });
  };

  return (
    <div className="space-y-6">

      {/* 🔥 Header */}
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition"
        >
          ←
        </button>

        <h1 className="text-xl font-semibold text-slate-900">
          Ride Detail
        </h1>
      </div>

      {/* 🔍 Search */}
      <div className="bg-white p-4 rounded-xl shadow flex gap-3">
        <input
          type="text"
          placeholder="Enter Ride ID"
          value={rideId}
          onChange={(e) => setRideId(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* 🚗 Ride Info */}
      {ride && (
        <div className="bg-white p-4 rounded-xl shadow space-y-4">

          {/* Top Info */}
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Ride ID</p>
              <p className="font-semibold">{ride.id}</p>
            </div>

            <span className="text-green-600 font-medium">
              {ride.status}
            </span>
          </div>

          {/* Rider + Captain */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Rider</p>
              <p className="font-semibold">{ride.rider}</p>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Captain</p>
              <p className="font-semibold">{ride.captain}</p>
            </div>
          </div>

          {/* Route */}
          <div>
            <h2 className="font-semibold mb-2">Route</h2>
            <p className="text-sm text-gray-600">
              {ride.from} → {ride.to}
            </p>
          </div>

          {/* Fare */}
          <div>
            <h2 className="font-semibold mb-2">Fare</h2>
            <p className="text-lg font-bold">{ride.fare}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
              Issue Refund
            </button>

            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Flag Ride
            </button>
          </div>

        </div>
      )}

    </div>
  );
}