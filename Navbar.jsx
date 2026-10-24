import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide text-indigo-400">EmpPortal</div>
        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-indigo-300 transition duration-200">Home / Dashboard</Link>
          <Link to="/employee-form" className="hover:text-indigo-300 transition duration-200">Employee Form</Link>
        </div>
      </div>
    </nav>
  );
}
