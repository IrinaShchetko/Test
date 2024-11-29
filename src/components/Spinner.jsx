import React, { useEffect, useState } from 'react'
import '../../styles/Spinner.less'

export default function Spinner() {
  const [activeDot, setActiveDot] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot(prev => (prev + 1) % 12)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='spinner'>
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          className={`dot dot-${index} ${activeDot === index ? 'active' : ''}`}
          key={index}
        ></div>
      ))}
    </div>
  )
}
