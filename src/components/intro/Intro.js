import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'
import Button from '@mui/material/Button';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer'] 
        })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'></div>
                <img src='assets/khalid.png' alt=''/>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There! I'm</h2>
                    <h1>Khalid Arsa</h1>
                    <h3>Web <span ref={textRef}></span></h3>
                    <Button variant="contained">Download CV</Button>
                </div>
                <a href='#about'>
                    <img src='assets/down.png' alt=''/>
                </a>
            </div>
        </div>
    )
}
