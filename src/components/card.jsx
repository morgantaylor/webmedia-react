import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ project = {}, ...props }) => {
  return (
    <article className='card'>
      <img className='card__img' src={project.imagePath} alt={project.title} />
      <div className='card__body'>
        <p className='card__title'>{project.title}</p>
        <p className='card__labels'>{project.languages}</p>
        <p className='card__description'>{project.description}</p>
        {project.study &&
          <Link to={`${project.studyPath}`} title={project.title} className='btn btn--blue card__btn'>Case study</Link>}
      </div>
    </article>
  )
}

export default Card
