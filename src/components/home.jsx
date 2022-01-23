import React from 'react'
import Navigation from './navigation'
import Hero from './hero'
import Section from './section'
import Card from './card'
import { Projects } from '../projects/projects'

const Home = () => {
  return (
    <div className='app'>
      <Navigation />
      <Hero />
      <Section
        name='About'
        content="I'm a burrito obsessed, travel enthusiast, and lover of all things LEGO&#x00AE;. I'm passionate about user experience, building component libraries, and have a thirst for learning as much as I can along the way. I'm currently working as a Front End Developer in Denver, Colorado. Having an art school background with a BFA in Photography, I have a perspective rarely found in an engineering department."
      />
      <Section
        name='Skills'
        content='HTML, CSS, SASS, BEM, Javascript, React, Storybook, AngularJs, Angular2+, Responsive Design, UI Component Libraries, Graphic Design, Sketch, Figma'
      />
      <Section
        name='Projects'
        altName='Recent Projects'
      >
        {Projects.map(p => <Card key={p.title} project={p} />)}
        <p>See Github for more projects...</p>
      </Section>
    </div>
  )
}

export default Home
