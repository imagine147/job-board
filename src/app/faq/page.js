"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQs = [
  {
    question: "How do I apply for a job?",
    answer:
      "You can browse available positions on our Jobs page and apply directly through the platform using your resume or LinkedIn profile.",
  },
  {
    question: "Do you offer career coaching?",
    answer:
      "Yes! We provide one-on-one coaching sessions to help you with career planning, interview prep, and job search strategies.",
  },
  {
    question: "Is this service free for job seekers?",
    answer:
      "Most of our core services are free for candidates. Premium coaching and resume services may carry a fee.",
  },
  {
    question: "How soon will I hear back after applying?",
    answer:
      "Response times vary by employer, but we aim to update you within 5–7 business days of your application submission.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 bg-gray-100 text-left hover:bg-gray-200 transition"
      >
        <span className="font-medium text-gray-800">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="px-5 pb-4 text-gray-600">{faq.answer}</div>}
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}