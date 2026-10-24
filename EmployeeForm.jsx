import React, { useState } from 'react';

export default function EmployeeForm() {
  const [formData, setFormData] = useState({ name: '', designation: '', location: '', salary: '' });
  const [isLogged, setIsLogged] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const processSubmission = (e) => {
    e.preventDefault();
    console.log('Form Captured Locally!', formData);
    setIsLogged(true);
    setFormData({ name: '', designation: '', location: '', salary: '' });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl border shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">New Registration Form</h2>
      {isLogged && <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 rounded-lg">Form submitted! Check dev console.</div>}
      <form onSubmit={processSubmission} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInput} required className="w-full px-4 py-2 border rounded-lg" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Designation</label>
          <input type="text" name="designation" value={formData.designation} onChange={handleInput} required className="w-full px-4 py-2 border rounded-lg" placeholder="Software Engineer" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleInput} required className="w-full px-4 py-2 border rounded-lg" placeholder="New York" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Salary</label>
          <input type="number" name="salary" value={formData.salary} onChange={handleInput} required className="w-full px-4 py-2 border rounded-lg" placeholder="80000" />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700">Register Employee</button>
      </form>
    </div>
  );
}
