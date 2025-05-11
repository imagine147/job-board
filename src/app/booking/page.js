"use client";

import { useState } from "react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission (API, Email, etc.)
    console.log(formData);
    alert("Booking request submitted!");
  };

  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Book a Session</h2>
        <p className="text-gray-600 mb-10">
          Schedule a personalized session with our team to accelerate your career goals.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md grid gap-6 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded"
            />
          </div>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded"
          >
            <option value="">Select a Service</option>
            <option value="resume">Resume Review</option>
            <option value="interview">Interview Prep</option>
            <option value="coaching">Career Coaching</option>
            <option value="jobsearch">Job Search Strategy</option>
          </select>

          <div className="relative">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded w-full"
            />
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
              📅
            </span>
          </div>

          <textarea
            name="message"
            rows={4}
            placeholder="Additional Notes (optional)"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
}
