import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { gsap } from 'gsap';
import { FaEnvelope, FaFileDownload } from 'react-icons/fa'; // Import icons from react-icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import Footer from "../components/Footer";

function Skills() {
  const titleRef = useRef(null);
  const typewriterRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const bgCircle1Ref = useRef(null);
  const bgCircle2Ref = useRef(null);
  const skillsRef = useRef(null);

    useEffect(() => {
    // Text Animations
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      typewriterRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 0.5, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, delay: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, delay: 1.5, duration: 0.5, ease: 'power3.out' }
    );

    // Animate background circles
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(bgCircle1Ref.current, {
      x: 100,
      y: 50,
      duration: 5,
      ease: "power1.inOut",
    })
    .to(bgCircle2Ref.current, {
      x: -150,
      y: -80,
      duration: 7,
      ease: "power1.inOut",
    }, "<"); // Use the same time as the previous animation to keep them synchronized

    // Animate skills section
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1, ease: 'power3.out' }
    );

  }, []);

  return (
    <>
      <Navbar />
      <section className="py-10 px-6 md:px-12 bg-black">
      <div
          ref={bgCircle1Ref}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 top-10 left-10 blur-lg"
        ></div>
        <div
          ref={bgCircle2Ref}
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 bottom-10 right-10 blur-lg"
        ></div>
        <div className="container mx-auto max-w-3xl">
        <div ref={skillsRef} className="mt-16">
          <h1
            ref={titleRef}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white text-center"
          >
            My Skills
          </h1>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[
              { icon: <FaHtml5 className="text-red-600" size={60} />, title: "HTML", desc: "Proficient in HTML5 and its semantic elements." },
              { icon: <FaCss3 className="text-blue-600" size={60} />, title: "CSS", desc: "Experienced in writing clean and responsive CSS." },
              { icon: <IoLogoJavascript className="text-yellow-500" size={60} />, title: "JavaScript", desc: "Proficient in modern JavaScript and its frameworks." },
              { icon: <RiReactjsLine className="text-blue-400" size={60} />, title: "React", desc: "Experienced in building complex React applications." },
              { icon: <SiExpress className="text-gray-1000" size={60} />, title: "Express Js", desc: "Proficient in building server-side applications with Express.js." },
              { icon: <DiNodejs className="text-green-700" size={60} />, title: "Node Js", desc: "Experienced in developing scalable server-side applications with Node.js." },
              { icon: <SiMongodb className="text-green-500" size={60} />, title: "MongoDB", desc: "Proficient in working with MongoDB, a NoSQL database, for data storage and management." },
              { icon: <TbBrandCpp className="text-blue-500" size={60} />, title: "C++", desc: "Proficient in C++ and its standard template library." },
              { icon: <RiTailwindCssFill className="text-cyan-500" size={60} />, title: "Tailwind CSS", desc: "Proficient in using Tailwind CSS for styling." },
            ].map((skill, index) => (
              <div key={index} className="rounded-lg bg-gray-600 p-6 text-center">
                {skill.icon}
                <h3 className="mt-4 text-lg font-medium text-white">{skill.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
          </div>
      </section>
      <Footer />
    </>
  );
}

export default Skills;