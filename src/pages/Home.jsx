import React from "react";
import Navbar from "../components/Navbar";
import { Typewriter } from 'react-simple-typewriter'
// import SocialMedia from "../components/SocialMedia";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
{/*     <SocialMedia /> */}
      <section className="flex h-screen flex-col items-center justify-center px-6 md:px-12 bg-gray-900">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">Hi, I'm Karan Rajput</h1>
          <p className="mt-4 text-xl text-gray-400">
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
          <p className="mt-8 text-lg leading-relaxed text-white">
            I am a passionate frontend developer with a strong focus on creating
            beautiful and user-friendly web applications. I have experience
            working with various technologies and frameworks, and I am always
            eager to learn new skills.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link to={'https://mail.google.com/mail?view=cm&fs=1&tf=1&to=karanrajput181212@gmail.com'} className="text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
              Contact Me
            </Link>
            <Link to={'https://drive.google.com/file/d/1J4nWZPJ7VsVevvJPQMvz9QEK6DFvT9Ds/view?usp=sharing'} target="blank" className="bg-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
              View Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
