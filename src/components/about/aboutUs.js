import Image from "next/image";
import Team from "../../images/b5c739049cafacfff22b1e4b5eeaa484.webp"
export default function AboutUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We’re a mission-driven company connecting top talent with meaningful opportunities.
            Our culture values innovation, collaboration, and personal development. Whether you're
            a creative, a developer, or a strategist, we believe your next career chapter begins here.
          </p>
          <p className="text-gray-600">
            Join a team that empowers growth, nurtures ideas, and builds lasting careers across diverse industries.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 ">
          <Image
            src={Team}
            alt="Team collaboration"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
