import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Logo from "../icons/sutherland-logo-colour.webp";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6">
      <div className="w-full container mx-auto flex flex-col gap-4 md:flex-row items-center md:items-start text-center md:text-start justify-between text-sm">
        {/* Branding */}
        <div className="flex flex-col gap-2">
          <h2 className="text-gray-700 text-lg font-bold">RemoteJob</h2>
          <p className="text-sm">Connecting talent with opportunity <br/> wherever you are.</p>
          <Link href="/">
            <Image src={Logo} alt="sutherland-logo" width={220} height={220}/>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 ">
          <h3 className="text-gray-700 text-lg font-semibold mb-2">Quick Links</h3>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/career" className="hover:underline">Careers</Link>
          <Link href="/booking" className="hover:underline">Book Online</Link>
        </div>

        {/* Social & Contact */}
        <div className="">
          <h3 className="text-gray-700  font-semibold mb-2">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-[#a30162]  cursor-not-allowed" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-[#a30162]  cursor-not-allowed" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-[#a30162]  cursor-not-allowed" />
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=sutherlandcompany@gmail.com" target="blank" rel="noopener noreferrer" aria-label="Email">
              <Mail className="w-5 h-5 hover:text-[#a30162]" />
            </Link>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} RemoteJob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
