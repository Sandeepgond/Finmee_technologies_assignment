import React from 'react'
import Header from "./header/Header"
import ProductPage from './product_page/ProductPage'
import UpperSection from './upper_section/UpperSection'
import BackToTopButton from './BackToTop'
import Footer from "./footer/Footer"

const LandingPage = () => {
  return (
   <>
    <Header/>
    <UpperSection/> 
    <BackToTopButton/>
    <ProductPage/>
    <Footer/>
   </>
  )
}

export default LandingPage