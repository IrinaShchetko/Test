import React from 'react'
import { players } from '../data/players'
import '../../styles/PlayerInfo.less'

export default function PlayerInfo() {
  const renderStars = score => {
    const totalStars = 5
    return (
      <div className='stars'>
        {[...Array(totalStars)].map((_, index) => (
          <span key={index} className='star'>
            <svg
              width='8'
              height='8'
              viewBox='0 0 8 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 0L5.24731 2.45763L8 2.88136L5.97849 4.78814L6.45161 7.5L4 6.22881L1.54839 7.5L1.97849 4.78814L0 2.88136L2.75269 2.45763L4 0Z'
                fill={index < score ? '#FAFF1A' : '#FFFFFF'}
              />
            </svg>
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className='player-list'>
      {players.map(({ id, name, photo, currency, sum, score }) => (
        <div key={id} className='player-info'>
          <div className='player-details'>
            <h2 className='player-name'>{name}</h2>
            {renderStars(score)}
          </div>

          <div className='player-photo-wrapper'>
            <img
              src={photo}
              alt={`${name}'s avatar`}
              className='player-photo'
            />
          </div>

          <div className='player-financials'>
            <button className='eye-btn'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8 4C5.238 4 3 6 3 8s2.238 4 5 4 5-2 5-4-2.238-4-5-4zM8 10C6.346 10 5 8.874 5 8s1.346-2 3-2 3 1.126 3 2-1.346 2-3 2z'
                  fill='#000'
                />
              </svg>
            </button>
            <p className='player-score'>
              {currency}
              {sum.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
