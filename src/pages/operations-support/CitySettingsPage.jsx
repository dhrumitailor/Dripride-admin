import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CitySettingsPage() {
  const navigate = useNavigate();

  const [cities, setCities] = useState([
    { id: 1, name: "Mumbai", hours: "6 AM - 11 PM" },
    { id: 2, name: "Delhi", hours: "24 Hours" },
  ]);

  const [newCity, setNewCity] = useState("");
  const [hours, setHours] = useState("");

  const addCity = () => {
    if (!newCity) return;

    setCities([
      ...cities,
      { id: Date.now(), name: newCity, hours },
    ]);

    setNewCity("");
    setHours("");
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white shadow hover:bg-gray-100"
        >
          ←
        </button>
        <h1 className="text-xl font-semibold">City Settings</h1>
      </div>

      {/* Add City */}
      <div className="bg-white p-4 rounded-xl shadow space-y-3">
        <input
          type="text"
          placeholder="City Name"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />

        <input
          type="text"
          placeholder="Working Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />

        <button
          onClick={addCity}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg"
        >
          Add City
        </button>
      </div>

      {/* City List */}
      <div className="space-y-4">
        {cities.map((city) => (
          <div
            key={city.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between"
          >
            <div>
              <p className="font-semibold">{city.name}</p>
              <p className="text-sm text-gray-500">{city.hours}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}