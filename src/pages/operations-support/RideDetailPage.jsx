// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function RideDetailPage() {
//   const navigate = useNavigate();

//   const [rideId, setRideId] = useState("");
//   const [ride, setRide] = useState(null);

//   const handleSearch = () => {
//     setRide({
//       id: "RIDE123",
//       rider: "John Doe",
//       captain: "Ravi Kumar",
//       from: "Andheri",
//       to: "Bandra",
//       fare: "₹250",
//       status: "Completed",
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
//           Ride Detail
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

//       {/* 🚗 Ride Info */}
//       {ride && (
//         <div className="bg-white p-4 rounded-xl shadow space-y-4">

//           {/* Top Info */}
//           <div className="flex justify-between">
//             <div>
//               <p className="text-sm text-gray-500">Ride ID</p>
//               <p className="font-semibold">{ride.id}</p>
//             </div>

//             <span className="text-green-600 font-medium">
//               {ride.status}
//             </span>
//           </div>

//           {/* Rider + Captain */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-slate-50 p-3 rounded-lg">
//               <p className="text-xs text-gray-500">Rider</p>
//               <p className="font-semibold">{ride.rider}</p>
//             </div>

//             <div className="bg-slate-50 p-3 rounded-lg">
//               <p className="text-xs text-gray-500">Captain</p>
//               <p className="font-semibold">{ride.captain}</p>
//             </div>
//           </div>

//           {/* Route */}
//           <div>
//             <h2 className="font-semibold mb-2">Route</h2>
//             <p className="text-sm text-gray-600">
//               {ride.from} → {ride.to}
//             </p>
//           </div>

//           {/* Fare */}
//           <div>
//             <h2 className="font-semibold mb-2">Fare</h2>
//             <p className="text-lg font-bold">{ride.fare}</p>
//           </div>

//           {/* Actions */}
//           <div className="flex gap-3">
//             <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
//               Issue Refund
//             </button>

//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
//               Flag Ride
//             </button>
//           </div>

//         </div>
//       )}

//     </div>
//   );
// }
// This file is for the detailed view of a ride, which can be accessed from the Operations Support dashboard. It includes the ride information, timeline, and payment details.
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

  // 🔥 Timeline Data
  const timeline = [
    { time: "10:00 AM", title: "Ride Requested", type: "info" },
    { time: "10:01 AM", title: "Driver Assigned (Ravi)", type: "info" },
    { time: "10:02 AM", title: "Driver Accepted", type: "success" },
    { time: "10:07 AM", title: "Driver Reached Pickup", type: "info" },
    { time: "10:08 AM", title: "Ride Started", type: "success" },
    { time: "10:25 AM", title: "Route deviation detected", type: "warning" },
    { time: "10:40 AM", title: "Ride Completed", type: "success" },
    { time: "10:41 AM", title: "Payment Successful (₹250)", type: "success" },
  ];

  const getColor = (type) => {
    if (type === "success") return "bg-green-500";
    if (type === "warning") return "bg-yellow-500";
    if (type === "danger") return "bg-red-500";
    return "bg-blue-500";
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
        <>
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

          {/* 🔥 NEW: TIMELINE */}
          <div className="bg-white p-5 rounded-2xl shadow space-y-4">

            <h2 className="text-lg font-semibold text-slate-900">
              Ride Timeline
            </h2>

            <div className="relative border-l-2 border-slate-200 ml-3">

              {timeline.map((item, index) => (
                <div key={index} className="mb-6 ml-4">

                  {/* Dot */}
                  <div
                    className={`absolute -left-[9px] mt-1 h-4 w-4 rounded-full ${getColor(item.type)}`}
                  />

                  {/* Content */}
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-medium ${
                      item.type === "warning"
                        ? "text-yellow-600"
                        : item.type === "danger"
                        ? "text-red-600"
                        : "text-slate-900"
                    }`}>
                      {item.title}
                    </p>

                    <span className="text-xs text-slate-400">
                      {item.time}
                    </span>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </>
      )}

    </div>
  );
}