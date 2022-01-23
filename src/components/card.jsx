import React from 'react'

const Card = ({ project = {}, ...props }) => {
  return (
    <article className='card'>
      <img className='card__img' src={project.imagePath} alt={project.title} />
      <div className='card__body'>
        <p className='card__title'>{project.title}</p>
        <p className='card__labels'>{project.languages}</p>
        <p className='card__description'>{project.description}</p>
        {project.viewStorybook &&
          <a
            href={project.viewStorybookPath}
            title='View Storybook'
            target='_blank'
            rel='noreferrer'
            className='btn btn--blue card__btn'
          >
            Storybook
          </a>}
        {project.viewWebsite &&
          <a
            href={project.viewWebsitePath}
            title='View website'
            target='_blank'
            rel='noreferrer'
            className='btn btn--blue card__btn'
          >
            Website
          </a>}
      </div>
    </article>
  )
}

export default Card
