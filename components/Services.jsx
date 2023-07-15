import data from '../utils/data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="services" className="mt-8 bg-gray-500 rounded-2xl p-4">
      <h1 className="text-3xl uppercase text-rose-700  text-center font-bold">
        our services
      </h1>
      <div className="md:animate-fadeleft max-w-5xl p-4 mx-auto grid grid-cols-1 justify-between items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Service */}
        {data.services.map((service) => {
          return (
            <div
              data-aos="zoom-in"
              key={service.id}
              className="shadow-md shadow-gray-800 group bg-gray-800 p-4 rounded-3xl text-center hover:-translate-y-1 duration-300 hover:bg-fuchsia-800  flex flex-col justify-between items-center gap-4 max-w-md mx-auto "
            >
              <h2 className=" group-hover:text-black  font-medium text-2xl uppercase text-rose-500 ">
                {service.title}
              </h2>
              <p className="text-gray-200 group-hover:text-gray-50 ">
                {service.desc}
              </p>
              <button className="hover:bg-rose-800 duration-300 hover:text-gray-100 rounded-md shadow-md shadow-gray-400 bg-gray-100 px-4 py-2 text-gray-800 uppercase">
                learn more
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
