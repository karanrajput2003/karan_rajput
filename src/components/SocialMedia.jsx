import React from 'react'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai';
import {FaSnapchat} from 'react-icons/fa'
import { Link } from 'react-router-dom';


function SocialMedia() {

  return (
    <div className='social'>
        <ul>
            <li>
                <Link to="https://mail.google.com/mail?view=cm&fs=1&tf=1&to=karanrajput181212@gmail.com" target="_blank" className='snapchat'><AiOutlineMail size="30px" color='indigo' /></Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/in/karan-ajay-rajput/" target="_blank" className='linkedin'><AiOutlineLinkedin size="30px" color='indigo'/></Link>
            </li>
            <li>
                <Link to="https://instagram.com/_.karan_rajput_rk?igshid=OTk0YzhjMDVlZA==" target="_blank" className='instagram'><AiOutlineInstagram size="30px" color='indigo' /></Link>
            </li>
            <li>
                <Link to="https://github.com/karanrajput2003" target="_blank" className='github'><AiOutlineGithub size="30px" color='indigo' /></Link>
            </li>
        </ul>
    </div>

  )
}

export default SocialMedia