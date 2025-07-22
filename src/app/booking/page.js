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

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const FORM_ENDPOINT = "https://formspree.io/f/xpwlpwql"; // Replace with your actual Formspree endpoint

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.date) newErrors.date = "Please select a date";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          service: "",
          date: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Book a Session</h2>
        <p className="text-gray-600 mb-10">
          Schedule a personalized session with our team to accelerate your career goals.
        </p>

        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded shadow">
            🎉 Booking submitted! We’ll be in touch shortly.
          </div>
        ) : (
          <form action="https://formspree.io/f/xpwlpwql"
          method="POST"
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md grid gap-6 text-left"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`p-3 border rounded w-full ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-3 border rounded w-full ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`p-3 border rounded w-full ${
                  errors.service ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select a Service</option>
                <option value="resume">Resume Review</option>
                <option value="interview">Interview Prep</option>
                <option value="coaching">Career Coaching</option>
                <option value="jobsearch">Job Search Strategy</option>
              </select>
              {errors.service && (
                <p className="text-sm text-red-500 mt-1">{errors.service}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`p-3 border rounded w-full ${
                  errors.date ? "border-red-500" : "border-gray-300"
                }`}
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                📅
              </span>
              {errors.date && (
                <p className="text-sm text-red-500 mt-1">{errors.date}</p>
              )}
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
        )}
      </div>
    </section>
  );
}
