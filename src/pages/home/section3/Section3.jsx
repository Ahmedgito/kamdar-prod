// components/Section3.jsx
import React from 'react';
import { motion } from 'framer-motion';
import bg from "../../../assets/formbg.png"; // Adjust the path as necessary

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Section3 = () => {
  return (
    <section
      className="relative w-full min-h-[700px] px-6 sm:px-10 md:px-20 lg:px-32 xl:px-80 py-16 font-['Lexend']"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Grid: CEO Message and Quote/Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {/* Left: CEO Message */}
          <div className="flex flex-col gap-4 z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'Luxerie' }}
              className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl font-normal leading-8 md:leading-14 tracking-tight mb-0"
            >
              CEO MESSAGE
            </motion.h2>
            <p className="text-lg sm:text-xl font-base mb-4">
              We founded Kamdar with a simple belief; that real estate should stand the test of time, both in design and in trust. Every home we build is a reflection of that legacy.
            </p>
            <div className="mt-4">
              <div style={{ fontFamily: 'Luxerie' }} className="text-4xl font-medium">YUSUF KAMDAR</div>
              <div className="text-base font-base">Chairman of Kamdar Developments</div>
            </div>
            <button className="mt-5 w-fit px-6 py-2 bg-black text-white rounded-md shadow hover:bg-gray-900 transition">Get in Touch</button>
          </div>

          {/* Right: Large Quote or Image */}
          <div className="md:flex hidden justify-center items-start z-0">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="/src/assets/this.png"
              alt="Quote or CEO"
              className="w-[320px] h-auto object-contain opacity-90 rounded-xl"
            />
          </div>
        </div>

        {/* Bottom: Stats and Subheading */}
        <div className="flex flex-col gap-8 mt-5 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Luxerie' }}
            className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-normal tracking-tight mb-4"
          >
            GLOBAL LEGACY<br />LOCAL EXPERTISE
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-10 sm:gap-16"
          >
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-5xl sm:text-6xl font-medium bg-black text-transparent bg-clip-text">
                40+
              </h3>
              <p className="mt-0 text-base sm:text-lg font-base tracking-wide">
                Years
              </p>
            </motion.div>

            {/* Properties */}
            <motion.div variants={itemVariants}>
              <h3 className="text-5xl sm:text-6xl font-medium bg-black text-transparent bg-clip-text">
                500+
              </h3>
              <p className="mt-0 text-base sm:text-lg font-base tracking-wide">
                Properties
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
