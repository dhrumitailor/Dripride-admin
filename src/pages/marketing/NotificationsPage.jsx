import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotificationsPage() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const sendNotification = () => {
    alert("Notification sent: " + msg);
    setMsg("");
  };

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-lg shadow">←</button>
        <h1 className="text-xl font-semibold">Notifications</h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow space-y-3">
        <textarea
          placeholder="Write message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="w-full border rounded-lg p-2"
        />

        <button
          onClick={sendNotification}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>

    </div>
  );
}