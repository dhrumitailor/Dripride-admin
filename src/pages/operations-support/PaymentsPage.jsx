import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentsPage() {
  const navigate = useNavigate();

  const [rideId, setRideId] = useState("");
  const [payment, setPayment] = useState(null);

  const handleSearch = () => {
    setPayment({
      rideId: "RIDE123",
      amount: "₹250",
      method: "UPI",
      status: "Success",
      date: "12 Sept 2026",
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
          Payments
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

      {/* 💰 Payment Info */}
      {payment && (
        <div className="bg-white p-4 rounded-xl shadow space-y-4">

          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Ride ID</p>
              <p className="font-semibold">{payment.rideId}</p>
            </div>

            <span className="text-green-600 font-medium">
              {payment.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Amount</p>
              <p className="font-semibold">{payment.amount}</p>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Method</p>
              <p className="font-semibold">{payment.method}</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500">Date</p>
            <p className="text-sm">{payment.date}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
              Issue Refund
            </button>

            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Mark Failed
            </button>
          </div>

        </div>
      )}

    </div>
  );
}