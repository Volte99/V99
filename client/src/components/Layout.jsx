import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      {children}
      <Footer />
    </>

  )
}

export default Layout;