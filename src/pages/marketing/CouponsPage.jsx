import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CouponsPage() {
  const navigate = useNavigate();

  const [coupons, setCoupons] = useState([]);
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");

  const addCoupon = () => {
    if (!code || !discount) return;

    setCoupons([
      ...coupons,
      { id: Date.now(), code, discount },
    ]);

    setCode("");
    setDiscount("");
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-lg shadow">←</button>
        <h1 className="text-xl font-semibold">Coupons</h1>
      </div>

      {/* Create */}
      <div className="bg-white p-4 rounded-xl shadow space-y-3">
        <input
          placeholder="Coupon Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />

        <input
          placeholder="Discount %"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />

        <button
          onClick={addCoupon}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg"
        >
          Create Coupon
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {coupons.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded-xl shadow flex justify-between">
            <p className="font-semibold">{c.code}</p>
            <p>{c.discount}% OFF</p>
          </div>
        ))}
      </div>

    </div>
  );
}