import React from 'react';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-black text-white py-4'>
      <div className='container mx-auto flex justify-center'>
        <ul className='flex space-x-6'>
          <li>
            <Link
              to="https://mail.google.com/mail?view=cm&fs=1&tf=1&to=karanrajput181212@gmail.com"
              target="_blank"
              className='hover:text-indigo-500'
            >
              <AiOutlineMail size="30px" color="#FF4500" /> {/* Orange Red */}
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/karan-ajay-rajput/"
              target="_blank"
              className='hover:text-indigo-500'
            >
              <AiOutlineLinkedin size="30px" color="#0077B5" /> {/* LinkedIn Blue */}
            </Link>
          </li>
          <li>
            <Link
              to="https://instagram.com/_.karan_rajput_rk?igshid=OTk0YzhjMDVlZA=="
              target="_blank"
              className='hover:text-indigo-500'
            >
              <AiOutlineInstagram size="30px" color="#C13584" /> {/* Instagram Pink */}
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/karanrajput2003"
              target="_blank"
              className='hover:text-indigo-500'
            >
              <AiOutlineGithub size="30px" color="#333" /> {/* GitHub Gray */}
            </Link>
          </li>
        </ul>
      </div>
      <div className='text-center text-gray-400 mt-2'>
        <p>&copy; {new Date().getFullYear()} Karan Rajput. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
