import React from 'react'
import './about.scss'

export default function About() {
  return (
    <div className='about' id='about'>
      <div className='left'>
        <div className='card'>
          <div className='card-img'>
            <img
              src="assets/my_pic.png"
              alt="" />
          </div>
        </div>
      </div>
      <div className='right'>
        <h1>About Me</h1>
        <hr />
        <h3>I'm Khalid Arsa. I am a Full-stack web/mobile developer
          and highly enthusiastic
          about my work and committed to it.
          I have obtained the knowledge, skills,
          and abilities to ensure the success of your project.</h3>
      </div>
    </div>
  )
}
