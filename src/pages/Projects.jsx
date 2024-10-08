import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Project2 from '../assets/project2.png'
import Project1 from '../assets/project1.png'
import Project3 from '../assets/project3.png'
function Projects() {
  return (
    <>
      <Navbar />
      <section className="py-10 px-6 md:px-12 bg-gray-900">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Projects
              </h2>
            </div>
          </div>
          <br />
          <hr />
          <div className="mt-8 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={Project2}
                  //   width="400"
                  //   height="300"
                  alt="Project 2"
                  className="aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Mental Health Support Website with Audio Chat Bot
                  </h3>
                  <p className="text-gray-400 mt-1">
                    - Developed a comprehensive mental health support website featuring an innovative audio chat bot powered by Gemini API
                    for interactive communication. Integrated Whisper API for converting audio inputs to text and utilized Gemini API for
                    analyzing input and generating subsequent questions. Additionally, implemented a daily journaling feature where users
                    can input their daily activities, with all data securely stored in a database.
                    <br />- Technologies Used: React, Tailwind, JavaScript,Node.js, Express.js, Mongodb, Gemini API, Whisper API
                    <br />
                    <Link to={'https://github.com/karanrajput2003/Hal'} className="text-indigo-600">Github</Link>
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={Project3}
                    width="400"
                    height="300"
                  alt="Project 2"
                  className="aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Aarogya Bharat
                  </h3>
                  <p className="text-gray-400 mt-1">
                    - Developed a solution leveraging telemedicine to connect rural patients with urban doctors. Facilitate remote medical
                    consultations between patients and healthcare providers. Ensure the solution is sustainable and effective for long-term
                    healthcare delivery.To ensure secure environment to patient for Video Calling and chatting. Also e-prescription at the end
                    of video call.
                    <br />– HTML, EJS, CSS, Tailwind,JavaScript,Node.js, Express.js, Mongodb, Digital Samba API, Twillo.
                    <br />
                    <Link to={'https://github.com/karanrajput2003/78_UnbeatableCodiee_BnB24'} className="text-indigo-600">Github</Link>
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={Project1}
                  width="400"
                  height="300"
                  alt="Project 1"
                  className="aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Resume Generator Using Linkedin
                  </h3>
                  <p className="text-gray-400 mt-1">
                    -Developed and designed web application for students and
                    working professionals to make resumes. We use proxy curl api
                    to get user data and paste into the different resume
                    templates.
                    <br />
                    – Technologies Used: HTML, CSS, JavaScript, Node.js, Express.js, Mongodb, Nubela LinkedIn API
                    <br />
                    <Link to={'https://github.com/karanrajput2003/resume_generator'} className="text-indigo-600">Github</Link>
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={Project2}
                  //   width="400"
                  //   height="300"
                  alt="Project 2"
                  className="aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    College E-learning Platform
                  </h3>
                  <p className="text-gray-400 mt-1">
                    - Developed an E-learning website for students in which
                    students enroll in different courses. On our platform
                    teachers and admin both will add different courses and
                    quizzes for particular to courses to asset student
                    understanding.
                    <br />– Technologies Used: React, Tailwind, JavaScript, Node.js, Express.js, Mongodb
                    <br />
                    <Link to={'https://github.com/karanrajput2003/Online_Teaching_Website'} className="text-indigo-600">Github</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
