import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewsPage() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "John",
      rating: 5,
      comment: "Great ride!",
      hidden: false,
    },
    {
      id: 2,
      user: "Amit",
      rating: 1,
      comment: "Very bad experience",
      hidden: false,
    },
  ]);

  const toggleHide = (id) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, hidden: !r.hidden } : r
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
        <h1 className="text-xl font-semibold">Reviews</h1>
      </div>

      {/* List */}
      <div className="space-y-4">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 rounded-xl shadow space-y-2"
          >
            <p className="font-semibold">{r.user}</p>
            <p className="text-yellow-500">⭐ {r.rating}</p>
            <p className="text-sm text-gray-600">{r.comment}</p>

            <button
              onClick={() => toggleHide(r.id)}
              className="text-xs px-3 py-1 rounded-lg bg-slate-900 text-white"
            >
              {r.hidden ? "Unhide" : "Hide"}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}