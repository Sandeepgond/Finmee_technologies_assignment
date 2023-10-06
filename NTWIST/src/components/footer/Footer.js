import React from 'react'
import "./Footer.css"
import {AiOutlineLinkedin} from "react-icons/ai"
import {BiLogoTwitter} from "react-icons/bi"
import ntwistlightfooterlogo from "../assests/ntwistlightfooterlogo.png"

const Footer = () => {
  return (
    <>
        <div className='footer_box'>
            <div className='footer_logo'>
                <img src={ntwistlightfooterlogo} alt="" />
            </div>
            <div className='links'>
                <div>Home</div>
                <div>About Us</div>
                <div>Contact Us</div>
                <div>Privacy Policy</div>
                <div>Sitemap</div>
            </div>
            <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
            <div className='social_logo'>
                <div> <BiLogoTwitter/> </div>
                <div>  <AiOutlineLinkedin/> </div>
            </div>
            <p>© 2022. Ntwist Inc.</p>
        </div>
    </>
  )
}

export default Footer