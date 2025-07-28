import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='bg-green'>
        <div className='title'>Little Lemon</div>
        <div className='subtitle'>Chicago</div>
        <img className='hero-img' src="/hero-img.png" alt="Delicious food" />
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
      </div>
      <div className='button'>
        <div className='button-text'>Reserve a Table</div>
      </div>
    </div>
  )
}

export default Hero