import React from 'react'
import Navbar from '@/app/components/navbar'
import AboutContent from '@/app/components/about-content'
import Footer from '@/app/components/footer'

export default function page() {
  return (
    <div>
        <Navbar/>
        <AboutContent/>
        <Footer/>
    </div>
  )
}
