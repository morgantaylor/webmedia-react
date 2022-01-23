import React from 'react'

const Section = ({
  name,
  altName,
  content,
  children
}) => {
  return (
    <section className='container'>
      <div className={`${name.toLowerCase()}`}>
        <h2 className='container__title'>{altName || name}</h2>
        {content && <p className={`${name.toLowerCase()}__copy`}>{content}</p>}
        {children}
      </div>
    </section>
  )
}

export default Section
