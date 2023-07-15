import React, { useEffect, useState } from 'react';
import data from '../utils/data';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const skills = data.skills[0];
  const [skill, setSkill] = useState('frontend');
  const [active, SetActive] = useState('bg-transparent');
  const changeSkills = (sk, cat) => {
    setSkill(sk);
    SetActive('border-b-rose-800 bg-black/50');
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="about">
      <div className="max-w-5xl  mx-auto">
        <h1 className="text-3xl uppercase text-rose-700  text-center font-bold">
          about
        </h1>
        <div className="flex flex-col md:flex-row w-full h-full p-4 justify-between items-center gap-8">
          <div
            data-aos="flip-up"
            data-aos-anchor-placement="top-center"
            className="  pb-8 md:pb-2 flex-1 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
              {skills.categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    className={` ${
                      category == skill && active
                    } uppercase text-xl md:text-2xl font-semibold border-b pb-2 hover:border-b-green duration-300 hover:bg-rose-800 p-2 rounded-md cursor-pointer`}
                    onClick={() => changeSkills(category)}
                  >
                    {category}
                  </button>
                );
              })}

              {/* <button
                className="uppercase text-2xl font-semibold border-b pb-2 hover:border-b-green duration-300 hover:bg-rose-800 p-2 rounded-md cursor-pointer"
                onClick={() => changeSkills('backend')}
              >
                back-end
              </button>
              <button
                onClick={() => changeSkills('mobile')}
                className="uppercase text-2xl font-semibold border-b pb-2 hover:border-b-green duration-300 hover:bg-rose-800 p-2 rounded-md cursor-pointer"
              >
                mobile
              </button> */}
            </div>
            <div className="flex flex-col justify-between items-center gap-4 text-center">
              {/* SKİLLS */}
              {skills[skill].map((skill, index) => {
                return (
                  <div
                    key={index}
                    className=" w-full bg-black/20 p-4 rounded-lg shadow-md shadow-red-200 hover:-translate-y-1 duration-300"
                  >
                    <h1 className="text-xl uppercase font-medium text-gray-200">
                      {skill.title}
                    </h1>
                    <progress
                      value={skill.value}
                      max="100"
                      className="w-full"
                    ></progress>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            data-aos="flip-left"
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
            <div>
              <Link href="/about" passHref>
                <a className="bg-red-600 duration-300 text-gray-100 rounded-md shadow-md shadow-gray-400 hover:bg-gray-100 px-4 py-2 hover:text-gray-800 uppercase">
                  learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
