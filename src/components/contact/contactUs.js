'use client';

import Image from "next/image";
import Img from "../../images/57d1fed6beee4982a729978553fb8ae2.avif";
import Link from "next/link";
import { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgqkokj';

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setStatus('');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus('Thank you for subscribing!');
        setError('');
        setEmail('');
      } else {
        setStatus('');
        setError('Failed to submit. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      setStatus('');
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="w-full container mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 text-center">
          <h2 className="text-4xl font-bold mb-3">Contact Us</h2>
          <address className="not-italic text-gray-700 text-base leading-relaxed">
            547 Moreland Way, Santa Clara, CA 95054<br />
            United States<br />
            <Link href="mailto:sutherlandcompany@gmail.com" className="block hover:underline">
              sutherlandcompany@gmail.com
            </Link>
            <Link href="tel:+13128564179" className="block hover:underline">
              +1 (646) 907-8545
            </Link>
          </address>
        </div>

        {/* Image */}
        <div className="relative w-full h-64">
          <Image
            src={Img}
            alt="Decorative circuit board"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Subscription Form */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-center mb-4">Subscribe to Our Updates</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <label htmlFor="email-input" className="sr-only">Email address</label>
            <input
              id="email-input"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., email@example.com"
              className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            {status && <p className="text-green-600 text-sm">{status}</p>}
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
