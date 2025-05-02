"use client";
import Image from "next/image";
import title from "../../../icons/selkirk-college-employment-services-shaking-hands.jpg";
import { motion } from "framer-motion";
export default function ServiceCard({ title, subtitle, image }) {
  return (
      <motion.div
        className="rounded-xl overflow-hidden shadow-lg bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm">{subtitle}</p>
          </div>
        </div>
      </motion.div>
    );
}