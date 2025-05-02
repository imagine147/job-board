import Image from "next/image";
import { team } from "@/db";
import AboutUs from "@/components/about/aboutUs";

export default function About() {
  return (
    <div> 
      <AboutUs/>

      <div className="container mx-auto px-6 py-12 flex flex-col items-center gap-4">
        <div className="text-center mb-10 space-y-2 w-full">
        <h1 className="text-4xl font-bold text-gray-800">MEET THE TEAM</h1>
        <p className="text-base font-semi-bold text-gray-700">Get to Know Us</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 ">
          {team.map((member) => (
            <div className="relative" key={member.id}>
            <Image src={member.image} alt="team-image" className="rounded-md shadow-sm"/>
            <div className="absolute bottom-10 text-center w-full text-white">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-base font-normal">{member.role}</p>
            </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}