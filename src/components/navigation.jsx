import React from 'react'
import SocialLink from './socialLink'
import Resume from '../assets/MT_Resume_2022.pdf'

const Navigation = () => {
  return (
    <nav className='social-nav'>
      <SocialLink
        href='https://www.linkedin.com/in/morganataylor'
        title='Linkedin'
        iconFmaily='fab'
        icon='linkedin'
      />
      <SocialLink
        href='https://github.com/morgantaylor'
        title='Github'
        iconFmaily='fab'
        icon='github'
      />
      <SocialLink
        href='https://codepen.io/mtaylor148'
        title='Codepen'
        iconFmaily='fab'
        icon='codepen'
      />
      <SocialLink
        href={Resume}
        title='Resume'
        iconFmaily='fas'
        icon='file-pdf'
      />
    </nav>
  )
}

export default Navigation
