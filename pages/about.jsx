import React, { useEffect, useState } from 'react';
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const about = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return    <section id="about" className='py-10 flex flex-col items-center justify-center max-w-6xl mx-auto '>
  <div className="max-w-5xl  mx-auto">
    
    <div className="flex flex-col md:flex-row w-full h-full p-4 justify-between items-center gap-10">
      <div
        className="  pb-8 md:pb-2 flex-1 max-w-md w-full"
      >
        <div className="max-w-md  max-h-[380px] overflow-hidden rounded-lg flex-1  ">
          <img
            src="/yunus.jpg"
            alt=" hero profile"
            className="w-full h-full object-cover  bg-center transition-all hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div
        // data-aos="flip-left"
        className=" flex-1 max-w-sm h-full flex flex-col justify-between items-start gap-4"
      >
        <h2 className="text-2xl uppercase font-bold text-start">
          about me
        </h2>
        <div className="text-gray-300 capitalize flex flex-col justify-between items-start gap-8">
          <p className="first-letter:font-mono first-letter:uppercase first-letter:font-bold first-letter:italic first-letter:text-rose-800 first-letter:text-3xl">
            I'm a Management Information Systems student currently in my fourth grade bachelor degree at Pamukkale University in Denizli/Türkiye. 
          </p>
          <p className="first-letter:font-mono first-letter:uppercase first-letter:font-bold first-letter:italic first-letter:text-rose-800 first-letter:text-3xl">
            I have interest in Information Technology Project Management and Information Security. I'd like to pursue my master degree in these fields. 
          </p>
        </div>
        <div className="text-gray-300 capitalize">
          <p>
            Pamukkale University is one of the best universities in Türkiye. It's considered as an international university and it has B++ according to the world ranking university.
          </p>
        </div>
       
      </div>
    </div>
  </div>
  <div className="flex  items-center gap-2 md:gap-4 py-4">
            <div className="rounded-full p-5 bg-gray-800 shadow-md shadow-gray-500 hover:-translate-y-1 duration-300">
              <FaGithub className="text-xl" />
            </div>

            <div className="rounded-full p-5 bg-green-700 shadow-md shadow-gray-500 hover:-translate-y-1 duration-300">
              <IoLogoWhatsapp className="text-xl" />
            </div>
            <div className="rounded-full p-5 bg-blue-900 shadow-md shadow-gray-500 hover:-translate-y-1 duration-300">
              <FaFacebook className="text-xl" />
            </div>
            <div className="rounded-full p-5 bg-rose-800 shadow-md shadow-gray-500 hover:-translate-y-1 duration-300">
              <FaYoutube className="text-xl" />
            </div>
          </div>
</section>;
};

export default about;
