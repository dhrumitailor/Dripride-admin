export default function RevenuePage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <h1 className="text-2xl font-semibold">Revenue Report</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4">
        <input
          type="date"
          className="border rounded-lg p-2 w-full md:w-auto"
        />
        <input
          type="date"
          className="border rounded-lg p-2 w-full md:w-auto"
        />
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg">
          Apply
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-xl font-bold">₹2,45,000</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Top City</p>
          <p className="text-xl font-bold">Mumbai</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Subscriptions</p>
          <p className="text-xl font-bold">₹45,000</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Revenue Breakdown</h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-500 text-left">
              <th className="py-2">City</th>
              <th>Rides</th>
              <th>Revenue</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-2">Mumbai</td>
              <td>540</td>
              <td>₹1,20,000</td>
            </tr>

            <tr>
              <td className="py-2">Delhi</td>
              <td>420</td>
              <td>₹85,000</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}