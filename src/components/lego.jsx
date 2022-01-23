import React from 'react'
import LegoImg from '../assets/lego-mockup.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LegoCaseStudy = () => {
  return (
    <section class='case'>
      <h1 className='case__title'>Lego CSS Library</h1>
      <img class='case__img' src={LegoImg} alt='LegoCSS Logo' />
      <div className='button-wrapper'>
        <a
          className='btn btn--blue'
          href='https://legocss.com/'
          target='_blank'
          rel='noreferrer'
          title='Angular Website'
        >
          Angular Website
        </a>
        <a
          className='btn btn--blue'
          href='https://61ec9c5799d45c004a561823-xygohkwnwp.chromatic.com'
          target='_blank'
          rel='noreferrer'
          title='Storybook'
        >
          Storybook
        </a>
        <a
          className='btn btn--blue'
          href='https://github.com/morgantaylor/design-system'
          target='_blank'
          rel='noreferrer'
          title='Github Project'
        >
          Github
          <FontAwesomeIcon icon={['fab', 'github']} className='icon icon--right' />
        </a>
      </div>
      <div class='case__study'>
        <h3>Objective</h3>
        <p>Massive-style libraries have a way of blocking creativity, consistency, and contain far more code than is necessary for a project. When I first learned to program, I used Twitter Bootstrap and Material Design. The downside was a considerable amount of code that I would never use. I would spend countless hours rewriting specific styles to my liking. When I noticed how much time I was spending doing this on every project, LegoCSS was born.</p>
        <h3>Challenge</h3>
        <p>All of it! I had in-depth knowledge of CSS and SCSS but designing and building an entire pattern library while thinking through every possible edge case was a larger project than I imagined. Over the years, I've kept returning to this project, adding more and adapting it to new technologies.</p>
        <h3>Learned</h3>
        <p>When this journey started, I began with a simple static HTML document that served as the library. It only existed on my local computer and I would take what I needed for websites I created. When I received a job offer that required me to learn Angular2+, I took the opportunity to advance my SCSS skills, rebuild the entire site, and publish a new website for the library. The website for the library uses Angular 6 because I wanted to become more familiar with it at the time.</p>
        <p>More recently, I've been obsessed with learning Storybook. It's exactly the technology needed for this project. Over the years, I've continued to develop the library, but between full-time jobs and life, sometimes side projects get put on the back burner. Fortunately, some friends inspired me to pick it back up now that I have far more familiarity with building not only framework-agnostic component libraries but also React-specific ones as well.</p>
        <p>Learned in the process:</p>
        <ul>
          <li>Angular 6 Routing</li>
          <li>NPM publishing, packaging and scripts</li>
          <li>Accessibility Standards</li>
          <li>Optimization and SEO</li>
          <li>React, React Hooks</li>
          <li>Storybook</li>
        </ul>
      </div>
    </section>
  )
}

export default LegoCaseStudy
