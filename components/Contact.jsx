import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';

const Contact = () => {
  const [name,setName]=useState("")
  const [message,setMessage]=useState("")
  useEffect(() => {
    AOS.init({ duration: 2000 });


  }, []);

  const submitForm= async(e)=>{
    e.preventDefault()
const colRef=collection(db,"messages")
const docRef=await addDoc(colRef,{name:name,message:message})
alert(`the message with id ${docRef.id} is added successfully`)
  setMessage("")
  setName("")
  }

  return (
    <div id="contact" className="mt-10 bg-blue-600 p-10 ">
      <h1 className="mb-8 text-3xl uppercase text-rose-700  text-center font-bold">
        contact us
      </h1>
      <div className="flex  flex-col items-center justify-center space-y-8 md:flex-row md:justify-arround md:gap-12">
        <div data-aos="fade-right" className="space-y-4 max-w-md">
          <h2 className="text-2xl uppercase font-medium text-">
            Merci Pour votre 
            <strong className="text-rose-900 underline"> Confiance</strong>
          </h2>
          <div className="space-y-6 max-w-sm text-gray-200 capitalize">
            <p>
              Veillez nous contacter en remplissant ce formulaire ou en utilisant nos comptes de reseaux sociaux directement.
            </p>
            <p>
             Nous vous remercions d'avoir visiter notre page et n'hesiter pas de nous contacter si jamais vous avez des suggestions a nous dire. 
            </p>
          </div>
          <div className="flex justify-between items-center gap-2 md:gap-4">
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
        </div>
        <div className="flex items-center w-full max-w-md  ">
          <form
          onSubmit={submitForm}
            data-aos="fade-left"
            className=" w-full p-6 bg-gray-600 rounded-xl shadow-md shadow-blue-300 space-y-6 "
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-100 capitalize"
              >
                Nom et Prenom
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  value={name}
                  id="name"
                  onChange={e=>setName(e.target.value)}
                  autoComplete="text"
                  required
                  className=" text-black  w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-100 capitalize"
              >
                Votre Message 
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  value={message}
                  onChange={e=>setMessage(e.target.value)}
                  id="name"
                  rows={5}
                  autoComplete="text"
                  required
                  className=" text-black  w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded-md px-4 py-2 bg-rose-600 uppercase text-gray-100 hover:text-gray-900 hover:bg-gray-100 duration-200"
            >send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
