'use client';


import Link from 'next/link';

import LoopCarousel from "../../components/screens/LoopCarousel"
import Stats from "../../components/screens/Stats"
import Feature from '../../components/screens/Feature';



function Home() {
  return (
    <>
      

      {/* ✅ Content only for center image inside wrapper */}
      <div className="bg-[#0b1c2d]">
        <div className="wrapper text-white flex flex-col gap-6 items-start py-52">
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
      </div>

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

      {/* <LoopCarousel /> */}

      <Stats />
      <Feature />

    </>
  );
}

export default Home;
