import Navbar from "./components/navbar";
import React from 'react'
import HeroCarousel from "./components/hero-carousel";
import AboutSection from "./components/about-section";
import ServicesSection from "./components/service-section";

import Footer from "./components/footer";

export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroCarousel/>
      <AboutSection/>
      <ServicesSection/>
      <Footer/>
    </div>
  )
}
