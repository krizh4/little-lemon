import React from 'react'
import Hero from './shared/Hero'
import Specials from './shared/Specials'
import Testimonials from './shared/Testimonials'
import About from './shared/About'

const Main = () => {
  return (
    <main className="main-container">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}

export default Main