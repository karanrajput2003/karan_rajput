import React from "react";
import Navbar from "../components/Navbar";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { FaEnvelope, FaFileDownload } from 'react-icons/fa'; // Import icons from react-icons

function Home() {
  return (
    <>
      <Navbar />
      <section className="flex h-screen flex-col items-center justify-center px-6 md:px-12 bg-gray-900">
        <motion.div 
          className="max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
            Hi, I'm Karan Rajput
          </h1>

          <motion.p 
            className="mt-4 text-xl text-gray-400"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
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
          </motion.p>

          <motion.p 
            className="mt-8 text-lg leading-relaxed text-white"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
          >
           I am seeking a role in a company where I can contribute my ideas, expand my knowledge and be mentored towards a successful
career. Ample experience in full-stack development, delivering well-documented, tested, and operable code. Efficient in
collaborating and communicating new ideas and opinions.
          </motion.p>

          <motion.div 
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.5, duration: 1 }}
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
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Home;
