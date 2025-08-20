import React from "react";
import { motion } from "framer-motion";
import ToothIcon from "../assets/logo.svg";

const HappyPatientsSection = () => (
  <div className="w-full py-16 flex flex-col items-center bg-white relative overflow-hidden">
    {/* Animated floating tooth icons background */}
    <motion.div
      className="absolute left-8 top-8"
      initial={{ y: -20, opacity: 0.5 }}
      animate={{ y: [ -20, 20, -20 ], opacity: [0.5, 0.8, 0.5] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      style={{ zIndex: 0 }}
    >
      <img src={ToothIcon} alt="tooth" width={36} />
    </motion.div>
    <motion.div
      className="absolute right-12 top-16"
      initial={{ y: 0, opacity: 0.5 }}
      animate={{ y: [ 0, 30, 0 ], opacity: [0.5, 0.8, 0.5] }}
      transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      style={{ zIndex: 0 }}
    >
      <img src={ToothIcon} alt="tooth" width={32} />
    </motion.div>
    <motion.div
      className="absolute left-1/2 bottom-8"
      initial={{ x: -20, opacity: 0.5 }}
      animate={{ x: [ -20, 20, -20 ], opacity: [0.5, 0.8, 0.5] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      style={{ zIndex: 0 }}
    >
      <img src={ToothIcon} alt="tooth" width={40} />
    </motion.div>
    {/* Animated heading and button */}
    <motion.h2
      className="text-4xl font-extrabold text-red-700 mb-6 text-center relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      Happy Patients
    </motion.h2>
    <motion.p
      className="text-lg text-red-500 mb-4 text-center relative z-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      See what our patients say about us on Google!
    </motion.p>
    <motion.a
      href="https://www.google.com/maps/place/Urja+Dental+Clinic+-+Dental+Implants+%26+Cosmetic+Dentistry/@30.7092467,76.7196521,17z/data=!4m8!3m7!1s0x390fee8620233e77:0x4c75775a5312d801!8m2!3d30.7092421!4d76.722227!9m1!1b1!16s%2Fg%2F11c49cf_pn?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-white text-white font-bold shadow-lg hover:bg-white hover:text-red-600 border-2 border-red-500 transition relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      View All Google Reviews
    </motion.a>
    <div className="w-full max-w-4xl flex flex-wrap justify-center gap-8 relative z-10">
      {/* Animated review cards */}
      {[
        {
          name: "Priya Sharma",
          review: "Best dental clinic experience ever! The staff is friendly and professional. Highly recommended!",
        },
        {
          name: "Rahul Verma",
          review: "Very clean and modern clinic. The doctors explained everything clearly. My treatment was painless!",
        },
        {
          name: "Sneha Gupta",
          review: "Excellent service and care. I am very happy with my new smile!",
        },
      ].map((r, i) => (
        <motion.div
          key={r.name}
          className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl p-6 w-80 border border-red-100 hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
        >
          <div className="flex items-center mb-2">
            <img src="https://www.gstatic.com/images/icons/material/system/2x/star_rate_black_24dp.png" alt="star" className="w-6 h-6 mr-1" />
            <span className="font-bold text-yellow-600">5.0</span>
            <span className="ml-2 text-red-600">Google Review</span>
          </div>
          <p className="text-red-700 italic mb-2">"{r.review}"</p>
          <span className="text-sm text-gray-500">- {r.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default HappyPatientsSection;
