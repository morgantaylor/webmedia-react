import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLink = ({
  href,
  title,
  icon,
  iconFmaily
}) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      title={title}
      className='tooltip'
    >
      <FontAwesomeIcon icon={[`${iconFmaily}`, `${icon}`]} className='icon' />
      <div className='bottom'>
        <p>{title}</p>
      </div>
    </a>
  )
}

export default SocialLink
