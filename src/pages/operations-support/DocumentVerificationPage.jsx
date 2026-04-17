// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function DocumentVerificationPage() {
//   const navigate = useNavigate();

//   const [docs, setDocs] = useState([
//     {
//       id: 1,
//       name: "Ravi Kumar",
//       license: "Pending",
//       rc: "Pending",
//       insurance: "Approved",
//     },
//     {
//       id: 2,
//       name: "Amit Sharma",
//       license: "Pending",
//       rc: "Approved",
//       insurance: "Pending",
//     },
//   ]);

//   const updateStatus = (id, type, status) => {
//     const updated = docs.map((doc) =>
//       doc.id === id ? { ...doc, [type]: status } : doc
//     );
//     setDocs(updated);
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
//           Document Verification
//         </h1>
//       </div>

//       {/* 📋 Table */}
//       <div className="bg-white p-4 rounded-xl shadow">
//         <h2 className="font-semibold mb-4">Pending Documents</h2>

//         <table className="w-full text-sm">
//           <thead>
//             <tr className="border-b text-gray-500 text-left">
//               <th className="py-2">Captain</th>
//               <th>License</th>
//               <th>RC</th>
//               <th>Insurance</th>
//             </tr>
//           </thead>

//           <tbody>
//             {docs.map((doc) => (
//               <tr key={doc.id} className="border-b">

//                 <td className="py-2 font-medium">{doc.name}</td>

//                 {/* License */}
//                 <td>
//                   <div className="flex gap-2 items-center">
//                     <span className="text-yellow-600 text-xs">{doc.license}</span>
//                     <button
//                       onClick={() => updateStatus(doc.id, "license", "Approved")}
//                       className="text-green-600 text-xs"
//                     >
//                       Approve
//                     </button>
//                     <button
//                       onClick={() => updateStatus(doc.id, "license", "Rejected")}
//                       className="text-red-600 text-xs"
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 </td>

//                 {/* RC */}
//                 <td>
//                   <div className="flex gap-2 items-center">
//                     <span className="text-yellow-600 text-xs">{doc.rc}</span>
//                     <button
//                       onClick={() => updateStatus(doc.id, "rc", "Approved")}
//                       className="text-green-600 text-xs"
//                     >
//                       Approve
//                     </button>
//                     <button
//                       onClick={() => updateStatus(doc.id, "rc", "Rejected")}
//                       className="text-red-600 text-xs"
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 </td>

//                 {/* Insurance */}
//                 <td>
//                   <div className="flex gap-2 items-center">
//                     <span className="text-yellow-600 text-xs">{doc.insurance}</span>
//                     <button
//                       onClick={() => updateStatus(doc.id, "insurance", "Approved")}
//                       className="text-green-600 text-xs"
//                     >
//                       Approve
//                     </button>
//                     <button
//                       onClick={() => updateStatus(doc.id, "insurance", "Rejected")}
//                       className="text-red-600 text-xs"
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>

//       </div>

//     </div>
//   );
// }           //BAD UI - just a demo of state management. Replace with real data and better design.
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DocumentVerificationPage() {
  const navigate = useNavigate();

  const [docs, setDocs] = useState([
    {
      id: 1,
      name: "Ravi Kumar",
      license: "Pending",
      rc: "Pending",
      insurance: "Approved",
    },
    {
      id: 2,
      name: "Amit Sharma",
      license: "Pending",
      rc: "Approved",
      insurance: "Pending",
    },
  ]);

  const updateStatus = (id, type, status) => {
    setDocs((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, [type]: status } : doc
      )
    );
  };

  const statusColor = (status) => {
    if (status === "Approved") return "text-green-600";
    if (status === "Rejected") return "text-red-600";
    return "text-yellow-600";
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
        <h1 className="text-xl font-semibold">Document Verification</h1>
      </div>

      {/* 📦 Cards */}
      <div className="space-y-4">
        {docs.map((doc) => (
          <div
            key={doc.id}
            className="bg-white p-4 rounded-xl shadow space-y-4"
          >
            {/* Name */}
            <h2 className="font-semibold text-lg">{doc.name}</h2>

            {/* Documents */}
            {["license", "rc", "insurance"].map((type) => (
              <div
                key={type}
                className="flex items-center justify-between border-t pt-3"
              >
                <div>
                  <p className="text-sm capitalize">{type}</p>
                  <p className={`text-xs ${statusColor(doc[type])}`}>
                    {doc[type]}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      updateStatus(doc.id, type, "Approved")
                    }
                    className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-lg"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(doc.id, type, "Rejected")
                    }
                    className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-lg"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
}
