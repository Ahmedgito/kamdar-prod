// components/Section1.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Bg from '../../../assets/1.png';

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const Section1 = () => {
  return (
    <section
      className="max-w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          style={{ fontFamily: 'Luxerie' }}
          className="text-white text-center text-4xl md:text-8xl leading-[0.8]"
        >
          BUILT FOR GENERATIONS.<br />
          CRAFTED WITH PURPOSE
        </motion.h1>
      </div>
    </section>
  );
};

export default Section1;
