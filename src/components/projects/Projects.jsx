import React, { useState } from 'react'
import './projects.scss'
import { data } from '../../model/data'
import ARROW from '../../asset/img/arrow.png'

export default function Works() {

  const [currentSlider, setCurrentSlider] = useState(0)

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
  }

  return (
    <div className='works' id='projects'>
      <h1>My Project</h1>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className='container'>
            <div className='item'>
              <div className='right'>
                <img src={d.img} alt='' />
              </div>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='titleContainer'>
                    <span className='hashtag'>#{d.hashtag}</span>
                    <h2>{d.title}</h2>
                  </div>
                  <p>{d.desc}</p>
                  <div className='link'>
                    {d.link.site && (<h2 className='projectButton'>View</h2>)}
                    {d.link.github && (<h2 className='projectButton'>Github</h2>)}
                  </div>
                  <span>{d.stack}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src={ARROW} className='arrow left' alt='' onClick={() => handleClick('left')} />
      <img src={ARROW} className='arrow right' alt='' onClick={() => handleClick('right')} />
    </div>
  )
}
