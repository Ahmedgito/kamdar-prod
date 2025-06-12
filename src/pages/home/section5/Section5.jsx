import React from 'react';
import Bg from '../../../assets/4.png';

const Section5 = () => {
  return (
    <section
      className="relative w-full h-[110vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >


      {/* Desktop View */}
      <div className="hidden md:flex relative z-10 flex-col items-start justify-start h-full pl-44 pt-24">
        <h1
          className="text-white -mt-10 font-light mb-10"
          style={{
            fontFamily: 'Luxerie, sans-serif',
            fontSize: '5rem',
            lineHeight: 0.8,
            letterSpacing: '0.01px',
            textShadow: '0 2px 16px rgba(0,0,0,0.18)',
          }}
        >
 CRAFTED FOR THE FEW <br /> WHO EXPECT MORE
        </h1>
        <button
          className="bg-white text-black rounded-md px-6 py-2 font-bold font-lexend shadow hover:bg-gray-200 transition"
        >
          Explore More
        </button>
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden relative z-10 flex-col items-center justify-center h-full px-4 pt-24 text-center">
        <h1
          className="text-white font-light -mt-68 mb-10"
          style={{
            fontFamily: 'Luxerie, sans-serif',
            fontSize: '2.5rem',
            lineHeight: 1.1,
            letterSpacing: '0.01px',
            textShadow: '0 2px 16px rgba(0,0,0,0.18)',
          }}
        >
            CRAFTED FOR THE FEW WHO EXPECT MORE
        </h1>
        <button className="bg-white text-black rounded-md px-6 py-2 font-bold font-lexend shadow hover:bg-gray-200 transition">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Section5;
