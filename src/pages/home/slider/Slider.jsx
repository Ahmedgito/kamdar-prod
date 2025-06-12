import React, { useState, useRef, useEffect } from 'react';
import gulf from '../../../assets/gulf.png';
import khaleej from '../../../assets/khaleej.png';
import lovin from '../../../assets/lovin.png';
import slider from '../../../assets/slider.png';

const images = [
  slider,
  slider,
  slider,
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const [slideWidth, setSlideWidth] = useState(0);
  const [previewWidth, setPreviewWidth] = useState(0);

  // Responsive slide width and preview
  useEffect(() => {
    const handleResize = () => {
      // Use clamp for min 280px, max 900px, prefer 80vw
      const baseWidth = Math.min(Math.max(window.innerWidth * 0.8, 280), 900);
      setSlideWidth(baseWidth);
      setPreviewWidth(baseWidth * (window.innerWidth < 640 ? 0.07 : 0.10)); // less preview on mobile
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Center all slides, always show a small preview of the next
  const getTranslateX = () => {
    let tx = current * (slideWidth + previewWidth) - previewWidth / 2;
    // Max translateX so last slide is centered
    const maxTx = (slideWidth + previewWidth) * (images.length - 1) - previewWidth / 2;
    return Math.min(Math.max(tx, 0), maxTx);
  };

  const containerWidth = slideWidth + previewWidth;
  const containerHeight = slideWidth * 0.56 > 500 ? 500 : slideWidth * 0.56;

  return (
    <div className="w-full bg-white px-2 sm:px-8 pt-12 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Heading and Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-2 text-center sm:text-left"
              style={{ fontFamily: 'Luxerie, Lexend, sans-serif' }}
            >
              LATEST ARTICLES
            </h2>
            {/* Logos */}
            <div className="flex gap-6 sm:gap-8 mt-2 justify-center sm:justify-start w-full">
              <img src={gulf} alt="Gulf News" className="h-6 object-contain" />
              <img src={khaleej} alt="Khaleej Times" className="h-6 object-contain" />
              <img src={lovin} alt="Lovin Dubai" className="h-6 object-contain" />
            </div>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-md transition text-sm self-center sm:self-auto">
            View All Articles
          </button>
        </div>
        {/* Carousel */}
        <div className="relative flex flex-col items-center mt-8">
          {/* Animated Slide Track */}
          <div
            className="overflow-hidden relative mx-auto"
            style={{ width: `${containerWidth}px`, height: `${containerHeight}px`, maxHeight: '500px' }}
          >
            <div
              className="flex transition-transform duration-500"
              style={{
                width: `${(slideWidth + previewWidth) * (images.length - 1) + slideWidth}px`,
                transform: `translateX(-${getTranslateX()}px)`
              }}
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden bg-transparent relative shadow-lg"
                  style={{
                    width: `${slideWidth}px`,
                    height: `${containerHeight}px`,
                    marginRight: idx !== images.length - 1 ? `${previewWidth}px` : 0,
                    flex: '0 0 auto',
                  }}
                >
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-contain opacity-90 bg-white"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Progress Bar (thinner) */}
          <div className="w-full h-0.5 bg-gray-200 rounded-full mt-6 mb-10 relative overflow-hidden">
            <div
              className="h-0.5 bg-black rounded-full transition-all duration-300"
              style={{ width: `${((current + 1) / total) * 100}%` }}
            />
          </div>
          {/* Arrows at bottom right of the whole section */}
          <div className="absolute bottom-2 right-2 flex gap-2 z-10">
            <button
              onClick={prevSlide}
              className="w-8 h-8 flex items-center justify-center text-gray-700 text-2xl hover:text-black transition"
              aria-label="Previous"
              style={{ background: 'none', border: 'none', outline: 'none' }}
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 flex items-center justify-center text-gray-700 text-2xl hover:text-black transition"
              aria-label="Next"
              style={{ background: 'none', border: 'none', outline: 'none' }}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
