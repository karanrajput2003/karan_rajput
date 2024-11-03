import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { gsap } from 'gsap';
import Footer from "../components/Footer";

function Education() {
  const titleRef = useRef(null);
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
      <section className="py-10 px-6 md:px-12 bg-black education relative">
        <div
          ref={bgCircle1Ref}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 top-10 left-10 blur-lg"
        ></div>
        <div
          ref={bgCircle2Ref}
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 bottom-10 right-10 blur-lg"
        ></div>

        <div ref={skillsRef} className="mt-16 container mx-auto max-w-3xl flex flex-col items-center justify-center space-y-4">
          <h1
            ref={titleRef}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white text-center"
          >
            Education
          </h1>
          <br />
          <div className="w-full text-left">
            <h3 className="text-xl font-large text-white">Fr. Conceicao Rodrigues College of Engineering, Bandra</h3>
            <p className="mt-1 text-gray-400">Bachelor of Engineering in Electronics & Computer Science (2021 - 2025)</p>
            <p className="mt-1 text-gray-400">CGPA - 9.55</p>
          </div>
          <div className="w-full text-left">
            <h3 className="text-xl font-large text-white">Balmohan Higher Secondary School, Chopda</h3>
            <p className="mt-1 text-gray-400">HSC (2019 - 2021)</p>
            <p className="mt-1 text-gray-400">Percentage - 92</p>
          </div>
          <div className="w-full text-left">
            <h3 className="text-xl font-large text-white">Pratap Vidya Mandir, Chopda</h3>
            <p className="mt-1 text-gray-400">SSC (2018 - 2019)</p>
            <p className="mt-1 text-gray-400">Percentage - 86.20</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Education;
