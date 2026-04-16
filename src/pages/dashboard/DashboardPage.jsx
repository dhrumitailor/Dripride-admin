export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Rides</p>
          <p className="text-2xl font-bold">1,245</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="text-2xl font-bold">₹85,000</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Active Captains</p>
          <p className="text-2xl font-bold">342</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Issues</p>
          <p className="text-2xl font-bold">12</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Recent Rides</h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-2">Rider</th>
              <th>Captain</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-2">John</td>
              <td>Alex</td>
              <td>₹250</td>
              <td className="text-green-600">Completed</td>
            </tr>

            <tr>
              <td className="py-2">Priya</td>
              <td>Ravi</td>
              <td>₹180</td>
              <td className="text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}