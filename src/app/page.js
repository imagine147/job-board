import Image from "next/image";
import Hero from "@/components/home/hero";
import AboutUs from "@/components/about/aboutUs";
import ContactUs from "@/components/contact/contactUs";

export default function Home() {
  return (
   <div>
    <Hero/>
    <AboutUs/>
    <ContactUs/>
   </div>
  );
}
