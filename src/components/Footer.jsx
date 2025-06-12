import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import Instagram from "../assets/insta.png";
import LinkedIn from "../assets/linkedin.png";
import Facebook from "../assets/fb.png";
import YouTube from "../assets/youtube.png";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-[#0F0D0D] text-white text-sm px-6 md:px-20 py-10">
      {/* === TOP LEVEL === */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center pb-6"
      >
        {/* Left: Stay Updated Heading */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="mb-4 md:mb-0 text-center md:text-left md:w-1/3"
        >
          <p className="text-white font-lexend font-[200] leading-tight">
            Stay updated with the latest news,<br className="hidden md:block" />
            promotions, and exclusive offers.
          </p>
        </motion.div>

        {/* Center: Email + Subscribe */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          className="mb-4 md:mb-0 md:w-1/3 flex justify-center"
        >
          <div className="flex border border-white rounded-sm overflow-hidden w-full max-w-sm">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 text-white font-lexend font-[200] w-full outline-white bg-transparent"
            />
            <button className="bg-white px-6 py-2 text-black text-sm font-medium">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Right: Social Icons */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          className="flex gap-4 md:w-1/3 justify-center md:justify-end"
        >
          {[Instagram, LinkedIn, Facebook, YouTube].map((icon, index) => (
            <motion.img
              key={index}
              src={icon}
              alt="social"
              className="h-8 w-8"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </motion.div>
      </motion.div>

      <hr className="border-gray-600" />

      {/* === MIDDLE LEVEL === */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between gap-8 pt-10 pb-6"
      >
        {/* Left: Logo & Heading */}
        <motion.div variants={fadeUp} custom={0.1} className="md:w-1/2">
          <img src={Logo} alt="Kamdar Logo" className="h-10 mb-6" />
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-3xl md:text-4xl font-light leading-8"
            style={{ fontFamily: "Luxerie" }}
          >
           BUILT FOR GENERATIONS <br />
           CRAFTED WITH PURPOSE
          </motion.p>
        </motion.div>

        {/* Right: Links & Contact */}
        <div className="md:w-1/2 flex flex-col md:flex-row justify-between text-sm md:text-base">
          {/* Page Links */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="space-y-2 font-lexend font-[200] mb-6 md:mb-0"
          >
            {["Home", "About Us", "Projects", "News", "Contact Us"].map((text, idx) => (
              <motion.p key={idx} whileHover={{ x: 5 }} className="cursor-pointer">
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="font-lexend leading-tight text-white/40 font-[200] space-y-2"
          >
            <p>Unit No. S03-103, MAG</p>
            <p>AlQuoz Logistic Park, Dubai</p>
            <br />
            <p>info@kamdardevelopment.com</p>
            <br />
            <p>+971 4 885 9549</p>
          </motion.div>
        </div>
      </motion.div>


      {/* === BOTTOM LEVEL === */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.5}
        className="pt-4 text-white/40 font-lexend font-[200] text-xs text-left"
      >
        ©2025 Kamdar Development
      </motion.div>
    </footer>
  );
};

export default Footer;
