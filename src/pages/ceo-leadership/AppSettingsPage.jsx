import { useState } from "react";

export default function AppSettingsPage() {
  const [appEnabled, setAppEnabled] = useState(true);
  const [baseFare, setBaseFare] = useState(50);
  const [surge, setSurge] = useState(1.5);

  return (
    <div className="space-y-6">

      {/* Header */}
      <h1 className="text-2xl font-semibold">App Settings</h1>

      {/* Toggle */}
      <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
        <div>
          <p className="font-medium">App Status</p>
          <p className="text-sm text-gray-500">
            Enable or disable ride bookings
          </p>
        </div>

        <button
          onClick={() => setAppEnabled(!appEnabled)}
          className={`px-4 py-2 rounded-lg text-white ${
            appEnabled ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {appEnabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* Pricing */}
      <div className="bg-white p-4 rounded-xl shadow space-y-4">

        <h2 className="font-semibold">Pricing Settings</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Base Fare (₹)</label>
            <input
              type="number"
              value={baseFare}
              onChange={(e) => setBaseFare(e.target.value)}
              className="border rounded-lg p-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Surge Multiplier</label>
            <input
              type="number"
              value={surge}
              onChange={(e) => setSurge(e.target.value)}
              className="border rounded-lg p-2"
            />
          </div>
        </div>

      </div>

      {/* Save Button */}
      <button className="bg-slate-900 text-white px-6 py-2 rounded-lg">
        Save Settings
      </button>

    </div>
  );
}