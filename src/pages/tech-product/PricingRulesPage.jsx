import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PricingRulesPage() {
  const navigate = useNavigate();

  const [price, setPrice] = useState("");

  return (
    <div className="space-y-6">

      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-lg shadow">←</button>
        <h1 className="text-xl font-semibold">Pricing Rules</h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow space-y-3">
        <input
          placeholder="Base price per km"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />

        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg">
          Save Pricing
        </button>
      </div>

    </div>
  );
}