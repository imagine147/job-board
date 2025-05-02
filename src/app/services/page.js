import ServiceCard from "@/components/reusable/cards/serviceCard";
import { services } from "@/db";
export default function Services() {
  return (
    <section className="py-16 bg-white px-6">
      <ServiceCard/>
      <div className="max-w-6xl mx-auto text-center mt-8">
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