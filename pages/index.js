import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testmonio from '../components/Testmonio';
import Contact from '../components/Contact';
import { FaHome, FaUserAlt } from 'react-icons/fa';
import { MdMail, MdDesignServices } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { VscProject } from 'react-icons/vsc';

export default function Home() {
  return (
    <div className=" w-full  text-gray-100 overflow-x-hidden ">
      <Head>
        <title>portfolio</title>
        <meta name="description" content="mustak lebrown portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Services />
      <Projects />
      <Testmonio />
      <Contact />
      <div className="fixed bottom-10 inset-x-0 max-w-md h-20 rounded-full w-full bg-black/40 mx-auto flex items-center px-4 md:px-8 hgap-2 animate-faderight justify-between shadow-md shadow-gray-100 transition-all ">
        <a
          href="#nav"
          className="rounded-full p-5 hover:bg-rose-800  bg-gray-700 shadow-md hover:-translate-y-1 duration-300"
        >
          <FaHome className="text-xl md:text-3xl" />
        </a>
        <a
          href="#about"
          className="rounded-full p-5 hover:bg-rose-800  bg-gray-700 shadow-md hover:-translate-y-1 duration-300"
        >
          <FaUserAlt className="text-xl md:text-3xl" />
        </a>
        <a
          href="#services"
          className="rounded-full p-5 hover:bg-rose-800 bg-gray-700 shadow-md hover:-translate-y-1 duration-300"
        >
          <MdDesignServices className="text-xl md:text-3xl " />
        </a>
        <a
          href="#projects"
          className="rounded-full p-5 hover:bg-rose-800 bg-gray-700 shadow-md  hover:-translate-y-1 duration-300"
        >
          <VscProject className="text-xl md:text-3xl  " />
        </a>
        <a
          href="#contact"
          className="rounded-full p-5 hover:bg-rose-800 bg-gray-700 shadow-md  hover:-translate-y-1 duration-300"
        >
          <MdMail className="text-xl md:text-3xl" />
        </a>
      </div>
    </div>
  );
}
