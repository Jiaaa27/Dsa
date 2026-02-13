import React from "react";
export default function AbesCollegePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-blue-900 text-white px-8 py-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold">ABES College</h1>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Work</li>
        </ul>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center mt-16 px-4">
        <img
          src="https://via.placeholder.com/800x400?text=ABES+Engineering+College"
          alt="ABES Engineering College"
          className="rounded-2xl shadow-2xl"
        />
        <h2 className="mt-8 text-3xl font-semibold text-gray-800">
          Welcome to ABES Engineering College
        </h2>
      </div>
    </div>
  );
}