/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from './Pages/Hero/Hero'
import Key from './Pages/Key/Key'
import Metrices from './Pages/metrices/Metrices'
import Reviews from './Pages/Reviews/Reviews'
import CTA from './Pages/CTA/CTA'
import Footer from './Pages/Footer/Footer'
import Form from './Components/Form'
import Features from './Pages/Features/Features'

const App = () => {
  return (
    <div>
      <Hero />
      <Key/>
      <Metrices/>
      <Reviews/>
      <Features/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App