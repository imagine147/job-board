import Image from "next/image";
import Img from "../../images/57d1fed6beee4982a729978553fb8ae2.avif";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="w-full container mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 text-center">
          <h2 className="text-4xl font-bold mb-3">Contact Us</h2>
          <address className="not-italic text-gray-700 text-base leading-relaxed">
            547 Moreland Way, Santa Clara, CA 95054<br />
            United States<br />
            <Link href="mailto:remotejobhabiledata@aol.com" className="block hover:underline">
              remotejobhabiledata@aol.com
            </Link>
            <Link href="tel:+13128564179" className="block hover:underline">
              (312) 856-4179
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
          <form className="flex flex-col space-y-3">
            <label htmlFor="email-input" className="sr-only">Email address</label>
            <input
              id="email-input"
              type="email"
              placeholder="e.g., email@example.com"
              className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
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
