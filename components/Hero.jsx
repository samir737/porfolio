import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="hero" className="w-full  p-8 md:p-20">
      <div className=" w-full h-full max-w-5xl flex-col md:flex-row flex justify-between items-center space-y-5 gap-8 mx-auto">
        <div className="flex-1 md:animate-fadeleft">
          <h1 className="text-4xl font-serif uppercase mb-4 font-bold">
            hi , i'm an <br /> ITPM Freelancer{' '}
            <span className="text-rose-800">Project Manager</span>
          </h1>
          <div className="mb-4 max-w-md">
            <p className="text-gray-100 font-light mb-4">
              A finale year student of Management Information Systems at Pau in Denizli/Tükiye. Doing the right thing for the right reason at the right time in the right place.
            </p>
            <p className="text-gray-100 font-light">
              I like reading the latest information about technology, cybersecurity, project management, emotional intelligent, leadership and soccer.
            </p>
          </div>
          <div>
            <a href='#contact' className="hover:bg-red-600 duration-300 hover:text-gray-100 rounded-md shadow-md shadow-gray-400 bg-gray-100 px-4 py-2 text-gray-800 uppercase">
              contact us
            </a>
          </div>
        </div>
        <div className="max-w-md md:animate-faderight  max-h-[380px] overflow-hidden rounded-lg flex-1  ">
          <img
            src="/haroune.jpg"
            alt=" hero profile"
            className="w-full h-full object-cover  bg-center transition-all hover:scale-105 duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
