import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import data from '../utils/data';
import project5 from '../public/images/projects/project5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = () => {
  useEffect(() => { 
    AOS.init({ duration: 2000 });
  }, []);

  return <div className='py-10 max-w-6xl mx-auto px-4 sm:px-0'>
    <h1 className="mb-8 text-3xl uppercase text-white  text-center font-serif font-bold">
          my projects
        </h1>
     <div
         
          className="  justify-between items-center gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {data.projects.map((project) => {
            return (
              <div
                key={project.id}
                className="relative rounded-2xl  shadow-md shadow-rose-400 hover:-translate-y-1 duration-300 transition-all"
              >
                <div className="w-full h-full  ">
                  <Image
                    src={project.img}
                    width={450}
                    height={250}
                    className="rounded-t-2xl object-cover w-full h-full text-center object-center"
                  />
                  <div className="w-full h-full py-4 flex flex-col justify-center items-center gap-4">
                    <h1 className="text-xl  font-medium uppercase text-rose-200">
                      {project.title}
                    </h1>
                    <p className="text-center max-w-[280px] text-gray-200">
                      {project.desc}
                    </p>
                    <div className="flex gap-3">
                      <button className="block hover:text-gray-100 hover:bg-rose-700 duration-200 transition font-medium capitalize bg-gray-100 text-gray-900 px-3 py-2 rounded-xl">
                        more info
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  </div>;
};

export default projects;
