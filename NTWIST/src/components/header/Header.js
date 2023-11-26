import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';
import ntwistlogodark from "../assests/ntwistlogodark.png"

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };
   return (
      <>
         <div className='nav'>
            <div className='left_nav'>
               <img src={ntwistlogodark} alt="" />
            </div>
            <div className={`right_nav ${isOpen ? 'open' : ''}`}>
               <div > <Link to="/">HOME</Link></div>
               <div>INDUSTRIES</div>
               <div><Link to="/ai-software">AI SOFTWARE</Link></div>
               <div><Link to="/blog">BLOG</Link></div>
               <div><Link to="/contact-us">CONTACT US</Link></div>
            </div>
            <div className='right_nav_small_screen' onClick={toggleMenu}>
               <FiMenu size={50} style={{ paddingRight: "20px" }} />
            </div>
         </div>
      </>
   )
}

export default Header