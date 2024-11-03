import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { gsap } from 'gsap';
import Footer from '../components/Footer';

function Achievements() {
  const titleRef = useRef(null);
  const bgCircle1Ref = useRef(null);
  const bgCircle2Ref = useRef(null);
  const achievementsRef = useRef(null);

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

    // Animate achievements section
    gsap.fromTo(
      achievementsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1, ease: 'power3.out' }
    );

  }, []);

  return (
    <>
      <Navbar />
      <section className="py-10 px-6 md:px-12 bg-black education">
        <div
          ref={bgCircle1Ref}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 top-10 left-10 blur-lg"
        ></div>
        <div
          ref={bgCircle2Ref}
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 bottom-10 right-10 blur-lg"
        ></div>

        <div ref={achievementsRef} className="mt-16 container mx-auto max-w-3xl flex flex-col items-center justify-center space-y-4">
          <h2
            ref={titleRef}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center"
          >
            Achievements
          </h2>
          <div className="w-full text-left mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-medium text-white">
                Achieved the 1st rank in the Computer Science And Electronics Department during the second year of study
              </h3>
              <p className="mt-1 text-gray-400">2023</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">
                Secured the 3rd position in the Prakalp 2.0 Inter-College Project Competition
              </h3>
              <p className="mt-1 text-gray-400">2024</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Achievements;
