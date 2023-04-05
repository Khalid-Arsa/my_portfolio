import React, { useState } from 'react'
import './works.scss'
import CAPLAN_IMG from "../../asset/img/caplan_plan.png"
import { data } from '../../data'

export default function Works() {

  const [currentSlider, setCurrentSlider] = useState(0)

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
  }

  return (
    <div className='works' id='works'>
      <h1>Project</h1>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className='container'>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='imgContainer'>
                    <img src={d.icon} alt='' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
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
