import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminUsersPage() {
  const [admins, setAdmins] = useState([
    { name: "Dhrumil", role: "CEO" },
    { name: "Ravi", role: "Operations" },
  ]);

  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("Operations");

  const addAdmin = () => {
    if (!newName) return;
    setAdmins([...admins, { name: newName, role: newRole }]);
    setNewName("");
  };

  const removeAdmin = (index) => {
    const updated = admins.filter((_, i) => i !== index);
    setAdmins(updated);
  };
  const navigate = useNavigate();

  return (
    <div className="space-y-6">

      {/* Header */}
      {/* <h1 className="text-2xl font-semibold">Admin Users</h1> */}
      <div className="flex items-center gap-3 mb-2">

  <button
    onClick={() => navigate(-1)}
    className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition"
  >
    ←
  </button>

  <h1 className="text-xl font-semibold text-slate-900">
    Admin Users
  </h1>

</div>

      {/* Add Admin */}
      <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Admin name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />

        <select
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option>CEO</option>
          <option>Operations</option>
          <option>Support</option>
          <option>Marketing</option>
        </select>

        <button
          onClick={addAdmin}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* Admin List */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Current Admins</h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-500 text-left">
              <th className="py-2">Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {admins.map((admin, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{admin.name}</td>
                <td>{admin.role}</td>
                <td>
                  <button
                    onClick={() => removeAdmin(index)}
                    className="text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}