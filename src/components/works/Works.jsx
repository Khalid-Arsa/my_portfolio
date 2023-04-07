import React, { useState } from 'react'
import './works.scss'
import { data } from '../../model/data'

export default function Works() {

  const [currentSlider, setCurrentSlider] = useState(0)

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
  }

  return (
    <div className='works' id='works'>
      <h1>My Project</h1>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className='container'>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <h2 className='projectButton'>Visit Site</h2>
                  <span>{d.stack}</span>
                </div>
              </div>
              <div className='right'>
                <img src={d.img} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src='assets/arrow.png' className='arrow left' alt='' onClick={() => handleClick('left')} />
      <img src='assets/arrow.png' className='arrow right' alt='' onClick={() => handleClick('right')} />
    </div>
  )
}
