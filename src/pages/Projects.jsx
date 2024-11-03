import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Project2 from "../assets/project2.png";
import Project1 from "../assets/project1.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import { gsap } from "gsap";
import Footer from "../components/Footer";

function Projects() {
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
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      typewriterRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 0.5, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, delay: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, delay: 1.5, duration: 0.5, ease: "power3.out" }
    );

    // Animate background circles
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(bgCircle1Ref.current, {
      x: 100,
      y: 50,
      duration: 5,
      ease: "power1.inOut",
    }).to(
      bgCircle2Ref.current,
      {
        x: -150,
        y: -80,
        duration: 7,
        ease: "power1.inOut",
      },
      "<"
    ); // Use the same time as the previous animation to keep them synchronized

    // Animate skills section
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative py-10 px-6 md:px-12 bg-black">
        <div
          ref={bgCircle1Ref}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 top-10 left-10 blur-lg"
        ></div>
        <div
          ref={bgCircle2Ref}
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 bottom-10 right-10 blur-lg"
        ></div>

        <div ref={skillsRef} className="mt-16">
          <h1
            ref={titleRef}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white text-center"
          >
            My Projects
          </h1>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={Project3}
                alt="Project 3"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Aarogya Bharat
                </h3>
                <p className="text-gray-400 mt-1">
                  - Developed a telehealth portal that facilitates seamless
                  connections between patients and doctors, enabling virtual
                  healthcare consultations. The platform features an
                  audio-to-audio chatbot for medical recommendations, role-based
                  login, and allows users to scan a QR code to view patient
                  medical records. It also provides an intuitive interface for
                  scheduling appointments and conducting secure video
                  consultations, aiming to transform the delivery of healthcare
                  using technology
                  <br />– : React, Tailwind, JavaScript, Node.js, Express.js, MongoDB, WebRTC, Gemini API, Whisper API, Twilio.
                  <br />
                  <Link
                    to={"https://github.com/karanrajput2003/Aarogya_Bharat"}
                    className="text-indigo-600"
                  >
                    Github Link
                  </Link>
                </p>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={Project4}
                alt="Project 4"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Mental Health Support Website with Audio Chat Bot
                </h3>
                <p className="text-gray-400 mt-1">
                  - Developed a comprehensive mental health support website
                  featuring an innovative audio chat bot powered by Gemini API
                  for interactive communication. Integrated Whisper API for
                  converting audio inputs to text and utilized Gemini API for
                  analyzing input and generating subsequent questions.
                  Additionally, implemented a daily journaling feature where
                  users can input their daily activities, with all data securely
                  stored in a database.
                  <br />- Technologies Used: React, Tailwind, JavaScript,
                  Node.js, Express.js, MongoDB, Gemini API, Whisper API
                  <br />
                  <Link
                    to={"https://github.com/karanrajput2003/Hal"}
                    className="text-indigo-600"
                  >
                    Github Link
                  </Link>
                </p>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={Project1}
                alt="Project 1"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Resume Generator Using Linkedin
                </h3>
                <p className="text-gray-400 mt-1">
                  - Developed and designed a web application for students and
                  working professionals to make resumes. We use proxy curl API
                  to get user data and paste it into different resume templates.
                  <br />
                  – Technologies Used: HTML, CSS, JavaScript, Node.js,
                  Express.js, MongoDB, Nubela LinkedIn API
                  <br />
                  <Link
                    to={"https://github.com/karanrajput2003/resume_generator"}
                    className="text-indigo-600"
                  >
                    Github Link
                  </Link>
                </p>
              </div>
            </div>
            {/* Project Card 4 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={Project2}
                alt="Project 2"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  College E-learning Platform
                </h3>
                <p className="text-gray-400 mt-1">
                  - Developed an E-learning website for students in which
                  students enroll in different courses. On our platform,
                  teachers and admin both will add different courses and quizzes
                  for particular courses to assess student understanding.
                  <br />– Technologies Used: React, Tailwind, JavaScript,
                  Node.js, Express.js, MongoDB
                  <br />
                  <Link
                    to={
                      "https://github.com/karanrajput2003/Online_Teaching_Website"
                    }
                    className="text-indigo-600"
                  >
                    Github Link
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
      <Footer />
    </>
  );
}

export default Projects;
