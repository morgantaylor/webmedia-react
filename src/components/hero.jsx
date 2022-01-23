import React from 'react'
import Me from '../assets/me.jpg'

const Hero = () => {
  return (
    <section className='hero'>
      <div>
        <img className='hero__img' src={Me} alt='morgan taylor' />
      </div>
      <div>
        <h1 className='hero__title'>Hi! I'm Morgan!</h1>
        <h5 className='hero__subtitle'>Developer &amp; Designer</h5>
        <p className='hero__copy'>From ideation to execution with frontend skills and an artistic approach.<br />I bridge the gap between design and engineering.</p>
      </div>
    </section>
  )
}

export default Hero
