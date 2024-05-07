import React from "react";
import Navbar from "../components/Navbar";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaD } from "react-icons/fa6";
import { FaS } from "react-icons/fa6";
import { FaA } from "react-icons/fa6";

function Skills() {
  return (
    <>
      <Navbar />
      <section className="py-10 px-6 md:px-12 bg-gray-900">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Skills
              </h2>
            </div>
          </div>
          <br />
          <hr />
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-600 p-6">
              <div classNameName="flex">
                <FaD size={30} />
                <FaS size={30} />
                <FaA size={30} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">
                Data Structure And Algorithm
              </h3>
              <p className="mt-2 text-gray-400">
                Solved 200+ Questions on Leetcode.
              </p>
            </div>
            <div className="rounded-lg bg-gray-600 p-6">
              <RiReactjsLine size={60} />
              <h3 className="mt-4 text-lg font-medium text-white">React</h3>
              <p className="mt-2 text-gray-400">
                Experienced in building complex React applications.
              </p>
            </div>
            <div className="rounded-lg bg-gray-600 p-6">
              <SiExpress size={60} />
              <h3 className="mt-4 text-lg font-medium text-white">Express Js</h3>
              <p className="mt-2 text-gray-400">
                Proficient in building server-side applications with Express.js.
              </p>
            </div>
            <div className="rounded-lg bg-gray-600 p-6">
              <DiNodejs size={60} />
              <h3 className="mt-4 text-lg font-medium text-white">Node Js</h3>
              <p className="mt-2 text-gray-400">
                Experienced in developing scalable server-side applications with
                Node.js.
              </p>
            </div>
            <div className="rounded-lg bg-gray-600 p-6">
              <SiMongodb size={60} />
              <h3 className="mt-4 text-lg font-medium text-white">Mongodb</h3>
              <p className="mt-2 text-gray-400">
                Proficient in working with MongoDB, a NoSQL database, for data
                storage and management.
              </p>
            </div>
            <div className="rounded-lg bg-gray-600 p-6">
              <IoLogoJavascript size={60} />
              <h3 className="mt-4 text-lg font-medium text-white">JavaScript</h3>
              <p className="mt-2 text-gray-400">
                Proficient in modern JavaScript and its frameworks.
              </p>
            </div>
            <div className="rounded-lg bg-gray-600 p-6">
              <TbBrandCpp size={60} />
              <h3 className="mt-4 text-lg font-medium text-white">C++</h3>
              <p className="mt-2 text-gray-400">
                Proficient in C++ and its standard template library.
              </p>
            </div>
            <div className="rounded-lg bg-gray-600 p-6">
              <FaHtml5 size={60} />
              <h3 className="mt-4 text-lg font-medium text-white">HTML</h3>
              <p className="mt-2 text-gray-400">
                Proficient in HTML5 and its semantic elements.
              </p>
            </div>
            <div className="rounded-lg bg-gray-600 p-6">
              <FaCss3 size={60} />
              <h3 className="mt-4 text-lg font-medium text-white">CSS</h3>
              <p className="mt-2 text-gray-400">
                Experienced in writing clean and responsive CSS.
              </p>
            </div>
            <div className="rounded-lg bg-gray-600 p-6">
              <RiTailwindCssFill size={60} />
              <h3 className="mt-4 text-lg font-medium text-white">Tailwind CSS</h3>
              <p className="mt-2 text-gray-400">
                Proficient in using Tailwind CSS for styling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
