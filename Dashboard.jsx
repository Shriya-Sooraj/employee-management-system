import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) throw new Error('Network issue while loading employee profiles.');
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20 text-gray-500 animate-pulse">Loading API Data...</div>;
  if (error) return <div className="p-4 text-red-800 bg-red-50 rounded-lg">{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Employee Dashboard</h2>
      <div className="overflow-hidden bg-white border rounded-xl shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3.5 text-left text-xs font-bold text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3.5 text-left text-xs font-bold text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3.5 text-left text-xs font-bold text-gray-500 uppercase">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">{emp.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-700">{emp.name}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
