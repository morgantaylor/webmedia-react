import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLink = ({
  href,
  title,
  icon,
  iconFmaily
}) => {
  console.log('icon: ', icon)
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      title={title}
      className='tooltip'
    >
      <FontAwesomeIcon icon={[`${iconFmaily}`, `${icon}`]} className='icon' />
      <div class='bottom'>
        <p>{title}</p>
      </div>
    </a>
  )
}

export default SocialLink
