import img1 from "./images/11062b_07e406264bb140e18cb59e272f67ea1c~mv2.avif"
import img2 from "./images/11062b_8b5d14a2a1af4b0f98625e1ccedd1419~mv2.avif"
import img3 from "./images/11062b_9ca786635a644dcf89648b8a3c2aac21~mv2.avif"
export const team =[
  {
    id: 1,
    name: "ASH MARCUS",
    role: "Small Business Consultant",
    image: img1,
  },
  {
    id: 2,
    name: "CHARLIE MCMANN",
    role: "Associate Director",
    image: img2,
  },
  {
    id: 3,
    name: "JORDAN PARKER",
    role: "Senior Advisor",
    image: img3
  }
]

import { Briefcase, FileText, Mic, Compass } from "lucide-react";

  export  const services = [
    {
      id: 1,
      title: "Job Placement",
      description:
        "We connect qualified candidates with top employers across multiple industries and locations.",
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 2,
      title: "Resume Review",
      description:
        "Get expert feedback and formatting tips to ensure your resume stands out from the crowd.",
      icon: <FileText className="w-10 h-10 text-green-600" />,
    },
    {
      id: 3,
      title: "Interview Preparation",
      description:
        "Receive personalized coaching and mock interviews to boost your confidence and performance.",
      icon: <Mic className="w-10 h-10 text-purple-600" />,
    },
    {
      id: 4,
      title: "Career Coaching",
      description:
        "Work one-on-one with our career advisors to develop a clear and achievable professional path.",
      icon: <Compass className="w-10 h-10 text-orange-600" />
    }
  ];


//  export const services = [
//   {
//     id: 1,
//     title: "Strategic Planning Session",
//     subtitle: "Grow Your Business",
//     image: "/images/strategic-planning.jpg", // Replace with actual image path
//   },
//   {
//     id: 2,
//     title: "Branding & Positioning Analysis",
//     subtitle: "Achieve Your Goals",
//     image: "/images/branding-analysis.jpg", // Replace with actual image path
//   },
//   {
//     id: 3,
//     title: "Digital Marketing Strategy",
//     subtitle: "Reach the Right Audience",
//     image: "/images/digital-marketing.jpg",
//   },
//   {
//     id: 4,
//     title: "Product Development Consultation",
//     subtitle: "Build with Confidence",
//     image: "/images/product-dev.jpg",
//   },
// ];



