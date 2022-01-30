import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ project = {} }) => {
  const classString = ['card']
  if (!project.imagePath) classString.push('card--no-img')
  return (
    <article className={classString.join(' ')}>
      {project.imagePath && <img className='card__img' src={project.imagePath} alt={project.title} />}
      <div className='card__body'>
        <p className='card__title'>{project.title}</p>
        <p className='card__labels'>{project.languages}</p>
        <p className='card__description'>{project.description}</p>
        {project.study &&
          <Link to={`${project.studyPath}`} title={project.title} className='btn btn--blue card__btn'>Case study</Link>}
        {project.link &&
          <a
            href={`${project.linkPath}`}
            target='_blank'
            rel='noreferrer'
            title={project.title}
            className='btn btn--blue card__btn'
          >
            Github
          </a>}
      </div>
    </article>
  )
}

export default Card
