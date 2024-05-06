import React, { useContext } from 'react'
import { Context } from '../../main'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedin} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
  const {isAuthorized} = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div><span className='text-primary'>&copy;</span>All Rights Reserved By Vishal Mishra. </div>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100016075652175" target='_blank'><FaFacebookF/></a>
        <a href="http://www.linkedin.com/in/vishal-mishra-657442258" target="_blank"><FaLinkedin/></a>
        <a href="https://www.instagram.com/vishhhal00?igsh=MTJiaG00eWt4bzdwOQ==" target='_blank'><RiInstagramFill/></a>
      </div>
    </footer>
  )
}

export default Footer