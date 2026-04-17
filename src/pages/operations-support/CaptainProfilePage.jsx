import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CaptainProfilePage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [captain, setCaptain] = useState(null);

  const handleSearch = () => {
    // dummy data
    setCaptain({
      name: "Ravi Kumar",
      phone: "9999999999",
      status: "Active",
      rating: 4.7,
      earnings: "₹25,000",
      documents: {
        license: "Approved",
        rc: "Pending",
        insurance: "Approved",
      },
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
          Captain Profile
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

      {/* 👤 Captain Info */}
      {captain && (
        <div className="bg-white p-4 rounded-xl shadow space-y-4">

          {/* Basic Info */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">{captain.name}</p>
              <p className="text-sm text-gray-500">{captain.phone}</p>
              <p className="text-xs text-green-600 mt-1">
                {captain.status}
              </p>
            </div>

            <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition">
              Block
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Rating</p>
              <p className="text-lg font-semibold">{captain.rating}</p>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Earnings</p>
              <p className="text-lg font-semibold">{captain.earnings}</p>
            </div>
          </div>

          {/* Documents */}
          <div>
            <h2 className="font-semibold mb-2">Documents</h2>

            <div className="space-y-2 text-sm">
              <p>
                License:{" "}
                <span className="text-green-600">
                  {captain.documents.license}
                </span>
              </p>

              <p>
                RC:{" "}
                <span className="text-yellow-600">
                  {captain.documents.rc}
                </span>
              </p>

              <p>
                Insurance:{" "}
                <span className="text-green-600">
                  {captain.documents.insurance}
                </span>
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}