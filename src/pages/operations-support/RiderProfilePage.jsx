import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RiderProfilePage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [rider, setRider] = useState(null);

  const handleSearch = () => {
    // dummy data (later connect API)
    setRider({
      name: "John Doe",
      phone: "9876543210",
      status: "Active",
      rides: [
        { id: 1, from: "A", to: "B", amount: "₹200" },
        { id: 2, from: "C", to: "D", amount: "₹150" },
      ],
    });
  };

  return (
    <div className="space-y-6">

      {/* 🔥 Header with Back Button */}
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition"
        >
          ←
        </button>

        <h1 className="text-xl font-semibold text-slate-900">
          Rider Profile
        </h1>
      </div>

      {/* 🔍 Search */}
      <div className="bg-white p-4 rounded-xl shadow flex gap-3">
        <input
          type="text"
          placeholder="Search by name or phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* 👤 Rider Info */}
      {rider && (
        <div className="bg-white p-4 rounded-xl shadow space-y-4">

          {/* Basic Info */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">{rider.name}</p>
              <p className="text-sm text-gray-500">{rider.phone}</p>
              <p className="text-xs text-green-600 mt-1">
                {rider.status}
              </p>
            </div>

            <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition">
              Block
            </button>
          </div>

          {/* 🚗 Ride History */}
          <div>
            <h2 className="font-semibold mb-2">Ride History</h2>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-gray-500 text-left">
                  <th className="py-2">From</th>
                  <th>To</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {rider.rides.map((ride) => (
                  <tr key={ride.id} className="border-b">
                    <td className="py-2">{ride.from}</td>
                    <td>{ride.to}</td>
                    <td>{ride.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

    </div>
  );
}