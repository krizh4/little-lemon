import React from 'react'

const Hero = () => {
  return (
    <div className='bg-green'>
      <div className='hero'>
        <div className='hero-text'>
          <div className='title'>Little Lemon</div>
          <div className='subtitle'>Chicago</div>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation.</p>
          <div className='button' onClick={() => window.location.href = '/reservation'}>
            <div className='button-text'>Reserve a Table</div>
          </div>
        </div>
        <img className='hero-img' src="/hero-img.png" alt="Delicious food" />
      </div>
    </div>
  )
}

export default Hero