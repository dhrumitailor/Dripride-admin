// import { useState } from "react";
// import { useNavigate } from "react-router-dom";


// export default function SupportTicketsPage() {
//   const navigate = useNavigate();

//   const [tickets, setTickets] = useState([
//     {
//       id: 1,
//       user: "John Doe",
//       issue: "Driver was late",
//       status: "Open",
//     },
//     {
//       id: 2,
//       user: "Priya Sharma",
//       issue: "Payment deducted twice",
//       status: "Open",
//     },
//   ]);

//   const [selected, setSelected] = useState(null);
//   const [reply, setReply] = useState("");

//   const closeTicket = (id) => {
//     setTickets((prev) =>
//       prev.map((t) =>
//         t.id === id ? { ...t, status: "Closed" } : t
//       )
//     );
//     setSelected(null);
//     setReply("");
//   };

//   return (
//     <div className="space-y-6">

//       {/* 🔥 Header */}
//       <div className="flex items-center gap-3">
//         <button
//           onClick={() => navigate(-1)}
//           className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition"
//         >
//           ←
//         </button>
//         <h1 className="text-xl font-semibold">Support Tickets</h1>
//       </div>

//       {/* 📋 Ticket List */}
//       <div className="space-y-4">
//         {tickets.map((ticket) => (
//           <div
//             key={ticket.id}
//             className="bg-white p-4 rounded-xl shadow flex justify-between items-center cursor-pointer hover:shadow-md transition"
//             onClick={() => setSelected(ticket)}
//           >
//             <div>
//               <p className="font-semibold">{ticket.user}</p>
//               <p className="text-sm text-gray-500">{ticket.issue}</p>
//             </div>

//             <span
//               className={`text-xs px-2 py-1 rounded-full ${
//                 ticket.status === "Open"
//                   ? "bg-yellow-100 text-yellow-700"
//                   : "bg-green-100 text-green-700"
//               }`}
//             >
//               {ticket.status}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* 📄 Ticket Detail */}
//       {selected && (
//         <div className="bg-white p-4 rounded-xl shadow space-y-4">
//           <h2 className="font-semibold text-lg">
//             {selected.user}
//           </h2>

//           <p className="text-sm text-gray-600">
//             {selected.issue}
//           </p>

//           <textarea
//             placeholder="Write reply..."
//             value={reply}
//             onChange={(e) => setReply(e.target.value)}
//             className="w-full border rounded-lg p-2 text-sm"
//           />

//           <div className="flex gap-3">
//             <button
//               className="bg-slate-900 text-white px-4 py-2 rounded-lg"
//               onClick={() => closeTicket(selected.id)}
//             >
//               Send & Close
//             </button>

//             <button
//               className="bg-gray-200 px-4 py-2 rounded-lg"
//               onClick={() => setSelected(null)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SupportTicketsPage() {
  const navigate = useNavigate();

  // 🔥 AUTO TAGGING + PRIORITY LOGIC
  const processTicket = (ticket) => {
    let category = "General";
    let priority = "Low";
    let assignedTo = "Junior Agent";

    if (ticket.issue.toLowerCase().includes("payment")) {
      category = "Payments";
      priority = "High";
      assignedTo = "Finance Team";
    }

    if (ticket.issue.toLowerCase().includes("unsafe")) {
      category = "Safety";
      priority = "High";
      assignedTo = "Senior Agent";
    }

    if (ticket.issue.toLowerCase().includes("refund")) {
      category = "Refund";
      priority = "Medium";
      assignedTo = "Support Team";
    }

    return { ...ticket, category, priority, assignedTo };
  };

  const [tickets, setTickets] = useState([
    processTicket({
      id: 1,
      user: "John Doe",
      issue: "Driver was unsafe",
      status: "Open",
    }),
    processTicket({
      id: 2,
      user: "Priya Sharma",
      issue: "Payment deducted twice",
      status: "Open",
    }),
  ]);

  const [selected, setSelected] = useState(null);
  const [reply, setReply] = useState("");

  const closeTicket = (id) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: "Closed" } : t
      )
    );
    setSelected(null);
    setReply("");
  };

  const priorityColor = (p) => {
    if (p === "High") return "bg-red-100 text-red-700";
    if (p === "Medium") return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
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
        <h1 className="text-xl font-semibold">Support Tickets</h1>
      </div>

      {/* 📋 Ticket List */}
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white p-4 rounded-xl shadow space-y-2 cursor-pointer hover:shadow-md transition"
            onClick={() => setSelected(ticket)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{ticket.user}</p>

              <span
                className={`text-xs px-2 py-1 rounded-full ${priorityColor(ticket.priority)}`}
              >
                {ticket.priority}
              </span>
            </div>

            <p className="text-sm text-gray-600">{ticket.issue}</p>

            {/* 🔥 NEW INFO */}
            <div className="flex justify-between text-xs text-gray-500">
              <span>{ticket.category}</span>
              <span>{ticket.assignedTo}</span>
            </div>

            <span
              className={`text-xs px-2 py-1 rounded-full ${
                ticket.status === "Open"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {ticket.status}
            </span>
          </div>
        ))}
      </div>

      {/* 📄 Ticket Detail */}
      {selected && (
        <div className="bg-white p-4 rounded-xl shadow space-y-4">

          <h2 className="font-semibold text-lg">{selected.user}</h2>

          <p className="text-sm text-gray-600">{selected.issue}</p>

          {/* 🔥 EXTRA INFO */}
          <div className="text-sm space-y-1">
            <p><b>Category:</b> {selected.category}</p>
            <p><b>Priority:</b> {selected.priority}</p>
            <p><b>Assigned To:</b> {selected.assignedTo}</p>
          </div>

          <textarea
            placeholder="Write reply..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full border rounded-lg p-2 text-sm"
          />

          <div className="flex gap-3">
            <button
              className="bg-slate-900 text-white px-4 py-2 rounded-lg"
              onClick={() => closeTicket(selected.id)}
            >
              Send & Close
            </button>

            <button
              className="bg-gray-200 px-4 py-2 rounded-lg"
              onClick={() => setSelected(null)}
            >
              Cancel
            </button>
          </div>

        </div>
      )}

    </div>
  );
}