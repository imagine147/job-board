import Image from "next/image";
import image from "../../icons/srg-eep-home-feature-600x338.webp"
import Dig from "../../images/67227b11df376d574be05aa3_66f07db8c53d88260cd0906b_66d98c12c3ed5044aca20360_66d2359c00825df4df832b8d_bad-hero-message_190726_164138.webp"
import { services } from "@/db";
export default function Services() {
  return (
    <section className="mb-10 bg-white">
      <div className="w-full flex justify-center md:hidden"><Image className="rounded-md object-cover shadow-md " src={image} alt="service-img"/></div>

      <Image className="rounded-md object-cover shadow-md w-full hidden md:flex  antialiased" src={Dig} alt="service-img"/>
      <div className="max-w-6xl mx-auto text-center mt-8 px-6">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
        <p className="text-gray-600 mb-12">
          We offer comprehensive career solutions to support you through every stage of your job search.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}