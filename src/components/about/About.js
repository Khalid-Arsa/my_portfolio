import React from 'react'
import './about.scss'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='left'>
                <div className='card'>
                    <div className='card-img'>
                        <img 
                            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""/> 
                    </div>
                </div>
            </div>
            <div className='right'>
                <h1>About Me</h1>
                <hr/>
                <h3>I'm Khalid Arsa. I am a Full-stack web developer, 
                    I'm a freelance programmer and highly enthusiastic 
                    about my work and committed to it.
                    I have obtained the knowledge, skills,
                    and abilities to ensure the success of your project.</h3>
            </div>
        </div>
    )
}
