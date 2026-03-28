import React, { useState } from 'react';

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  if (!images || images.length === 0) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden group/carousel select-none cursor-default bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Phone mockup container */}
      <div className="absolute inset-0 flex items-center justify-center py-3 px-6">
        {/* Phone frame */}
        <div className="relative w-[200px] h-full max-h-[420px] rounded-[24px] border-[3px] border-gray-600/80 bg-black shadow-[0_0_40px_rgba(0,0,0,0.5),0_0_80px_rgba(59,130,246,0.08)] overflow-hidden">
          {/* Android punch-hole camera */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-gray-800 rounded-full z-30 ring-1 ring-gray-700"></div>

          {/* Screen content - carousel slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div key={idx} className="w-full h-full flex-shrink-0">
                <img
                  src={`/${img}`}
                  alt={`${title} - image ${idx + 1}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Phone home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/30 rounded-full z-30"></div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-0 w-1/4 z-40 flex items-center justify-start pl-1.5" onClick={handlePrev}>
            <button
              className={`bg-slate-900/60 hover:bg-blue-600 text-white p-2 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 transform ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              aria-label="Anterior"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[3]">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 w-1/4 z-40 flex items-center justify-end pr-1.5" onClick={handleNext}>
            <button
              className={`bg-slate-900/60 hover:bg-blue-600 text-white p-2 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 transform ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
              aria-label="Siguiente"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[3]">
                <path d="M9 5l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </>
      )}

      {/* Progress dots */}
      {images.length > 1 && (
        <div className={`absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-30 transition-all duration-500 ${isHovering ? 'opacity-100' : 'opacity-60'}`}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-400 ${idx === currentIndex ? 'bg-blue-500 w-5' : 'bg-white/30 w-1.5 hover:bg-white/50'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
