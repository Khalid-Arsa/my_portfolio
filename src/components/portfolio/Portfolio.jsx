import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {
  webPortfolio,
  mobilePortfolio,
} from '../../data'

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  const list = [
    {
      id: 'web',
      title: 'Web App'
    },
    {
      id: 'mobile',
      title: 'Mobile App'
    },
  ]

  useEffect(() => {
    switch (selected) {
      case 'web':
        setData(webPortfolio)
        break;
      case 'mobile':
        setData(mobilePortfolio)
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div className='item'>
            <img
              src={d.img}
              alt=''
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}