import React from 'react'
import './about.scss'
import MY_PIC from '../../asset/img/my_pic.png'

export default function About() {
  return (
    <div className='about' id='about'>
      <div className='left'>
        <div className='card'>
          <div className='card-img'>
            <img
              src={MY_PIC}
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
