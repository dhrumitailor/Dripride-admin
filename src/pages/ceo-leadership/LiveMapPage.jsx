export default function LiveMapPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <h1 className="text-2xl font-semibold">Live Map</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Active Captains</p>
          <p className="text-xl font-bold">120</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Riders Waiting</p>
          <p className="text-xl font-bold">45</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Busy Areas</p>
          <p className="text-xl font-bold">8</p>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="h-[400px] w-full rounded-lg bg-slate-200 flex items-center justify-center">
          <p className="text-gray-500">Map will be shown here</p>
        </div>
      </div>

      {/* Info */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-2">Insights</h2>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• High demand in Mumbai</li>
          <li>• Low captain availability in Delhi</li>
          <li>• Surge pricing active in 3 areas</li>
        </ul>
      </div>

    </div>
  )
}