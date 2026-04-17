import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OnboardingPage() {
  const navigate = useNavigate();

  const [captains, setCaptains] = useState([
    { id: 1, name: "Ravi", stage: "Documents Pending" },
    { id: 2, name: "Amit", stage: "Training" },
  ]);

  const advanceStage = (id) => {
    setCaptains((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, stage: "Approved" }
          : c
      )
    );
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white shadow"
        >
          ←
        </button>
        <h1 className="text-xl font-semibold">Onboarding</h1>
      </div>

      {/* List */}
      <div className="space-y-4">
        {captains.map((c) => (
          <div
            key={c.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-gray-500">{c.stage}</p>
            </div>

            <button
              onClick={() => advanceStage(c.id)}
              className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm"
            >
              Approve
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}