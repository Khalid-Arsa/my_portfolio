import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'
import Button from '@mui/material/Button';
import RESUME from "../../file/RESUME-2021.pdf"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Web', 'Mobile']
    })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/khalid1.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There! I'm</h2>
          <h1>Khalid Arsa</h1>
          <h3><span ref={textRef}></span>Developer</h3>
          <Button
            className='downloadButton'
            variant="contained"
            href={RESUME}
            download
          >
            Download CV
          </Button>
        </div>
      </div>
    </div>
  )
}
