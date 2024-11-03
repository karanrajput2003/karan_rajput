import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { FaEnvelope, FaFileDownload } from 'react-icons/fa'; // Import icons from react-icons
import Footer from "../components/Footer";
function Home() {
  // Refs for GSAP animation
  const titleRef = useRef(null);
  const typewriterRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const bgCircle1Ref = useRef(null);
  const bgCircle2Ref = useRef(null);

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

  }, []);

  return (
    <>
      <Navbar />
      <section className="relative flex h-screen flex-col items-center justify-center px-6 md:px-12 bg-black">
        {/* Background decorative circles */}
        <div
          ref={bgCircle1Ref}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 top-10 left-10 blur-lg"
        ></div>
        <div
          ref={bgCircle2Ref}
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 bottom-10 right-10 blur-lg"
        ></div>

        <div className="max-w-3xl text-center relative z-10">
          <h1
            ref={titleRef}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white"
          >
            Hi, I'm Karan Rajput
          </h1>

          <p
            ref={typewriterRef}
            className="mt-4 text-xl text-gray-400"
          >
            <Typewriter
              words={['Full Stack Developer']}
              loop={5}
              cursor
              cursorStyle='.'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <p
            ref={descRef}
            className="mt-8 text-lg leading-relaxed text-white"
          >
            I am seeking a role in a company where I can contribute my ideas, expand my knowledge, and be mentored towards a successful career.
            Ample experience in full-stack development, delivering well-documented, tested, and operable code. Efficient in collaborating and
            communicating new ideas and opinions.
          </p>

          <div
            ref={buttonRef}
            className="mt-8 flex justify-center space-x-4"
          >
            <Link to={'https://mail.google.com/mail?view=cm&fs=1&tf=1&to=karanrajput181212@gmail.com'} 
              className="text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
            >
              <FaEnvelope className="mr-2" /> Contact Me
            </Link>

            <Link to={'https://drive.google.com/file/d/1BQwyygUDohM3tTNnVmjC78yf1FrXDKI_/view?usp=sharing'} 
              target="blank" 
              className="bg-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2"
            >
              <FaFileDownload className="mr-2" /> View Resume
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
