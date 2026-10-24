import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import EmployeeForm from './pages/EmployeeForm';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employee-form" element={<EmployeeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
