import React from 'react'
import { stores } from './Stores.js'

import './Slider.scss'

function Slider () {
  return (
    <div className='slider'>
      <div className='slider__container'>
        <div className='slider__left'>
          <div className='slider__title-row'>
            <h2 className='slider__title sec-title'>
              WHAT WE DO
            </h2>
            <div className='slider__stroke-row'>
              <div className='slider__stroke' />
              <div>1 / 5</div>
            </div>
          </div>
          <h5 className='slider__sub-title'>
            {stores[0].title1}
            <br />
            {stores[0].title2}
          </h5>
          <p className='slider__desc'>
            {stores[0].desc}
          </p>
          <a
            href='https://www.example.com'
            target='_blank'
            rel='noopener noreferrer'
            className='slider__link'
          >
            Learn more
          </a>

        </div>
        <img
          src={stores[0].image}
          alt={stores[0].title1}
          className='slider__image'
        />
      </div>
    </div>
  )
}

export default Slider

