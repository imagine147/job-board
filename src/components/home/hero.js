'use client';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/home-banner_2025.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="relative z-10 flex w-full h-full flex-col items-center justify-center bg-black/30 px-4 text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl mb-4">
          Find Your Dream Job Today
        </h1>
        <p className="max-w-xl mb-6">
          Explore Thousands of Opportunities .
        </p>
        <Link href="/career" className="rounded-full bg-primary px-6 py-3 text-white border hover:border-blue-900 transition hover:bg-primary-dark">
          Apply Now
        </Link>
      </div>
    </section>
  );
}
