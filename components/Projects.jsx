import Image from 'next/image';
import data from '../utils/data';
import project5 from '../public/images/projects/project5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';

const projects = () => {
  useEffect(() => { 
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="projects" className="bg-gray-100">
      <div className="mx-auto max-w-5xl flex flex-col justify-center items-center p-6 ">
        <h1 className="mb-8 text-3xl uppercase text-rose-700  text-center font-bold">
          projects
        </h1>
        <div
          data-aos="fade-right"
          className="  justify-between items-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
        >
          {data.projects.slice(0,3).map((project) => {
            return (
              <div
                key={project.id}
                className="relative rounded-2xl overflow-hidden shadow-md shadow-rose-400 hover:-translate-y-1 duration-300 transition-all"
              >
                <div className="bg-black/20  w-full h-full  ">
                  <Image
                    src={project.img}
                    width={450}
                    height={250}
                    className="rounded-2xl object-cover w-full h-full text-center object-center"
                  />
                  <div className="absolute top-0 left-0 bg-black/60 w-full h-full flex flex-col justify-center items-center gap-4">
                    <h1 className="text-xl  font-medium uppercase text-rose-200">
                      {project.title}
                    </h1>
                    <p className="text-center max-w-[280px] text-gray-200">
                      {project.desc}
                    </p>
                    <div className="flex gap-3">
                      <button className="block hover:text-gray-100 hover:bg-rose-700 duration-200 transition font-medium capitalize bg-gray-100 text-gray-900 px-3 py-2 rounded-xl">
                        see code
                      </button>
                      <button className="block  bg-rose-700 hover:bg-gray-100 duration-200 transition font-medium  capitalize :hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-xl">
                        see website
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default projects;
