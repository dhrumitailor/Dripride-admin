// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function PaymentsPage() {
//   const navigate = useNavigate();

//   const [rideId, setRideId] = useState("");
//   const [payment, setPayment] = useState(null);

//   const handleSearch = () => {
//     setPayment({
//       rideId: "RIDE123",
//       amount: "₹250",
//       method: "UPI",
//       status: "Success",
//       date: "12 Sept 2026",
//     });
//   };

//   return (
//     <div className="space-y-6">

//       {/* 🔥 Header */}
//       <div className="flex items-center gap-3 mb-2">
//         <button
//           onClick={() => navigate(-1)}
//           className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition"
//         >
//           ←
//         </button>

//         <h1 className="text-xl font-semibold text-slate-900">
//           Payments
//         </h1>
//       </div>

//       {/* 🔍 Search */}
//       <div className="bg-white p-4 rounded-xl shadow flex gap-3">
//         <input
//           type="text"
//           placeholder="Enter Ride ID"
//           value={rideId}
//           onChange={(e) => setRideId(e.target.value)}
//           className="border p-2 rounded-lg flex-1"
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-slate-900 text-white px-4 py-2 rounded-lg"
//         >
//           Search
//         </button>
//       </div>

//       {/* 💰 Payment Info */}
//       {payment && (
//         <div className="bg-white p-4 rounded-xl shadow space-y-4">

//           <div className="flex justify-between">
//             <div>
//               <p className="text-sm text-gray-500">Ride ID</p>
//               <p className="font-semibold">{payment.rideId}</p>
//             </div>

//             <span className="text-green-600 font-medium">
//               {payment.status}
//             </span>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-slate-50 p-3 rounded-lg">
//               <p className="text-xs text-gray-500">Amount</p>
//               <p className="font-semibold">{payment.amount}</p>
//             </div>

//             <div className="bg-slate-50 p-3 rounded-lg">
//               <p className="text-xs text-gray-500">Method</p>
//               <p className="font-semibold">{payment.method}</p>
//             </div>
//           </div>

//           <div>
//             <p className="text-xs text-gray-500">Date</p>
//             <p className="text-sm">{payment.date}</p>
//           </div>

//           {/* Actions */}
//           <div className="flex gap-3">
//             <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
//               Issue Refund
//             </button>

//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
//               Mark Failed
//             </button>
//           </div>

//         </div>
//       )}

//     </div>
//   );
// }
// This is a placeholder page for Payments. You can expand this with real data and functionality as needed.
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

  // 🔥 WALLET LEDGER DATA
  const ledger = [
    { type: "credit", amount: 100, label: "Refund (Ride #1234)", time: "10:00 AM" },
    { type: "debit", amount: 250, label: "Ride Payment", time: "10:30 AM" },
    { type: "credit", amount: 50, label: "Promo Credit", time: "11:00 AM" },
    { type: "debit", amount: 20, label: "Cancellation Fee", time: "11:30 AM" },
  ];

  let runningBalance = 0;

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
          Payments & Refunds
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
        <>
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

          {/* 🔥 WALLET LEDGER */}
          <div className="bg-white p-5 rounded-2xl shadow space-y-4">

            <h2 className="text-lg font-semibold text-slate-900">
              Wallet Ledger
            </h2>

            {/* Table Header */}
            <div className="grid grid-cols-4 text-xs text-slate-500 font-semibold border-b pb-2">
              <p>Type</p>
              <p>Description</p>
              <p>Amount</p>
              <p>Balance</p>
            </div>

            {/* Ledger Rows */}
            {ledger.map((item, index) => {
              runningBalance += item.type === "credit" ? item.amount : -item.amount;

              return (
                <div
                  key={index}
                  className="grid grid-cols-4 text-sm py-2 border-b last:border-0 items-center"
                >
                  <p className={item.type === "credit" ? "text-green-600" : "text-red-600"}>
                    {item.type === "credit" ? "Credit" : "Debit"}
                  </p>

                  <p className="text-slate-600">{item.label}</p>

                  <p className={item.type === "credit" ? "text-green-600" : "text-red-600"}>
                    {item.type === "credit" ? `+₹${item.amount}` : `-₹${item.amount}`}
                  </p>

                  <p className="font-medium text-slate-900">
                    ₹{runningBalance}
                  </p>
                </div>
              );
            })}

          </div>
        </>
      )}

    </div>
  );
}