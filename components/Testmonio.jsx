import React, { useEffect, useState } from 'react';
import data from '../utils/data';
import AOS from 'aos';

const Testmonio = () => {
  const [index, setİndex] = useState(1);

  const projects = () => {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  };
  return (
    <section className="mt-8  p-4 ">
      <h1 className="text-3xl uppercase text-rose-700  text-center font-bold mb-8">
        Testmonio
      </h1>
      <div className="mx-auto max-w-5xl flex flex-col justify-center items-center w-full h-full text-gray-900 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between items-center w-full">
          {data.testmonio.map((text) => {
            return (
              <div
                key={text.id}
                data-aos="fade-left"
                className="  shadow-rose-400 shadow-md transition-all hover:scale-105 duration-300 bg-white w-full h-full rounded-2xl p-4 flex flex-col md:flex-row  lg:flex-col lg:items-center lg:jutify-center justify-center items-center gap-10 md:gap-4 md:text-center "
              >
                <div className="text-center rounded-full p-4 bg-gray-800 w-20 shadow-md shadow-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-100 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center lg:items-center lg:text-center text-center md:items-start md:text-start">
                  <h1 className="text-2xl font-semibold font-serif uppercase mb-2 text-gray-900 first-letter:font-bold first-letter:italic first-letter:text-3xl first-letter:text-red-800">
                    {text.name}
                  </h1>
                  <p className="text-gray-700 max-w-sm first-letter:uppercase first-letter:font-bold">
                    {text.comments}
                  </p>
                  <div className="flex mt-2 justify-center">
                    {text.stars.map((star, i) => {
                      return (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full text-yellow-800 flex items-center justify-center "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      );
                    })}
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

export default Testmonio;
