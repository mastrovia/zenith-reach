'use client';

import { useState } from 'react';

const carouselItems = [
  {
    id: 1,
    image: '/image/coursol-img-a.png',
    category: 'FROZEN PRODUCTS',
    title: 'Natural Vegetables',
  },
  {
    id: 2,
    image: '/image/coursol-img-a.png',
    category: 'SPICES',
    title: 'Authentic Spices',
  },
  {
    id: 3,
    image: '/image/coursol-img-a.png',
    category: 'DRY PRODUCTS',
    title: 'Premium Dry Foods',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <section className="relative min-h-screen m-auto bg-black">
      <picture className="absolute inset-0 z-0">
        <img src="/banners/home-page-bg.png" alt="" className="w-full h-full object-cover" />
      </picture>
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen justify-between relative max-w-section m-auto py-24 lg:py-40 px-4">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-end lg:col-span-2 mb-12 lg:mb-0">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
              Pure Taste. Traditional Roots
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Bringing non-preservative ready-to-eat and ready-to-cook Indian food to the world.
            </p>

            {/* Carousel Indicators */}
            <div className="flex gap-4">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Carousel */}
        <div className="relative flex items-end justify-center lg:justify-end w-full">
          <div className="overflow-hidden w-full max-w-sm lg:max-w-none">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full lg:w-96"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 relative">
                  <picture className="">
                    <img src={item.image} alt={item.title} className="w-full object-cover" />
                  </picture>

                  {/* Bottom Overlay */}
                  <div className="bottom-0 left-0 right-0 bg-primary p-6 lg:p-8">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-white/70 text-sm lg:text-md uppercase tracking-wider mb-2">
                          {item.category}
                        </p>
                        <h3 className="text-white text-2xl lg:text-4xl">{item.title}</h3>
                      </div>

                      {/* Carousel Navigation */}
                      <div className="flex gap-1">
                        <button
                          onClick={prevSlide}
                          className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/20 rounded transition-colors"
                        >
                          ←
                        </button>
                        <button
                          onClick={nextSlide}
                          className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/20 rounded transition-colors"
                        >
                          →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
