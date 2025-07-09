'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const carouselImages = [
  { src: '/Al1.jpg', alt: 'Sundown Party' },
  { src: '/Al2.jpg', alt: 'Music Festival' },
  { src: '/Al3.jpg', alt: 'Art Night' },
];

function LoopCarousel() {
  const [index, setIndex] = useState(0);
  const total = carouselImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  const getPosition = (i) => {
    if (i === index) return 'z-20 scale-100';
    if (i === (index - 1 + total) % total) return '-translate-x-[110%] scale-75 z-10 opacity-80';
    if (i === (index + 1) % total) return 'translate-x-[110%] scale-75 z-10 opacity-80';
    return 'opacity-0 scale-50 z-0 pointer-events-none';
  };

  return (
    <div className="relative h-[calc(100vh-87px)] overflow-hidden bg-[#0b1c2d] flex items-center justify-center">
      {/* 🔁 All Slides Positioned Absolutely */}
      {carouselImages.map((image, i) => (
        <div
          key={i}
          className={`absolute transition-all duration-700 ease-in-out transform ${
            i === index ? 'w-full md:w-[70vw]' : 'w-[50vw]'
          } h-[80vh] rounded-xl overflow-hidden ${getPosition(i)}`}
          
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-xl opacity-50"
          />
        </div>
      ))}

      {/* ✅ Content only for center image inside wrapper */}
      {/* <div className="relative z-30">
        <div className="wrapper text-white flex flex-col gap-6 items-start">
          <h1 className="text-5xl md:text-7xl font-semibold w-full md:w-2/3">
            Discover And Book Events Near You
          </h1>
          <Link
            href="/events"
            className="bg-yellow-400 px-5 py-3 rounded-lg font-bold tracking-wider text-[#131d30] w-max"
          >
            Browse Events
          </Link>
        </div>
      </div> */}

      {/* ◉ Dot Controls */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? 'bg-yellow-400 scale-110' : 'bg-white/50'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}

export default LoopCarousel;
