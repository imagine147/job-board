import { Briefcase, Rocket, Users, Heart } from "lucide-react";
import Link from "next/link";

export default function CareerPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Talent Acquisition Specialist",
      location: "New York, NY",
      type: "Part-time",
    },
    {
      title: "Career Coach",
      location: "Remote",
      type: "Contract",
    },
  ];

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
      title: "Career Growth",
      desc: "We support your development with mentorship, training, and promotion opportunities.",
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: "Positive Culture",
      desc: "We foster a supportive, inclusive workplace where everyone can thrive.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Team Collaboration",
      desc: "We believe great things happen when people come together with purpose.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Join Our Mission</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Help shape the future of employment and empower job seekers worldwide.
        </p>
      </section>

      {/* About / Mission */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
        <p className="text-gray-600">
          We're not just building a platform — we're creating access to opportunity for everyone.
          If you're passionate about purpose-driven work, you'll feel right at home here.
        </p>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Open Positions</h2>
        <div className="space-y-6">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex justify-between items-center"
            >
              <div>
                <h3 className="text-base md:text-lg font-bold">{job.title}</h3>
                <p className="text-gray-600 text-sm">
                  {job.location} • {job.type}
                </p>
              </div>
              <Link
                href="/apply"
                className="text-blue-600 font-medium hover:underline"
              >
                Apply
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Employee Perks</h2>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Didn’t Find the Right Role?</h2>
        <p className="mb-6">
          We’re always on the lookout for great talent. Reach out and introduce yourself.
        </p>
        <Link
          href="/apply"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Send a General Application
        </Link>
      </section>
    </div>
  );
}
