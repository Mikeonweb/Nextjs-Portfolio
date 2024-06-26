import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbTransitionTop } from "react-icons/tb";
import ContactImg from "../public/assets/contact.jpg";
import { RiTwitterXFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="w-full p-6 lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl text-center font-bold underline tracking-widest uppercase text-[#000000]">
          Contact
        </p>
        {/* <h2 className="py-4">Get In Touch</h2> */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl h-[300px] hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Michael Sunday</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for full-time roles and freelancing. Let&apos;s
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/michael-sunday-18b5a4267/"
                    target="_blank"
                    rel="noreferrer"
                    className="relative group"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                    <p className="absolute ml-1 my-2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      LinkedIn
                    </p>
                  </a>
                  <a
                    href="https://github.com/Mikeonweb"
                    target="_blank"
                    rel="noreferrer"
                    className="relative group"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                    <p className="absolute ml-2 my-2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      Github
                    </p>
                  </a>

                  <div className="rounded-full relative group shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="mailto:michael.sun14@gmail.com">
                      <AiOutlineMail />
                    </a>
                    <p className="absolute -ml-4 my-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      E-&nbsp;Mail
                    </p>
                  </div>
                  <Link
                    href="https://x.com/_Mikeonweb"
                    target="_blank"
                    rel="noreferrer"
                    className="relative group"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <RiTwitterXFill className="text-lg" />
                    </div>
                    <p className="absolute my-2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      Twitter
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/paqgxvga"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-x-0 border-b-2 bg-inherit outline-none rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-x-0 border-b-2 bg-inherit outline-none rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-x-0 border-b-2 bg-inherit outline-none rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-x-0 border-b-2 bg-inherit outline-none rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-x-0 border-b-2 bg-inherit outline-none rounded-lg p-3 mb-10 border-gray-300"
                    rows="5"
                    name="message"
                  ></textarea>
                </div>
                <button className="message-btn w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-20">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <TbTransitionTop className="text-[#000]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
