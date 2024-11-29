import React from 'react'
import '../../styles/Loader.less'

const Loader = ({ progress }) => {
  return (
    <div className='loader'>
      <div className='progress' style={{ width: `${progress}%` }} />
      <p>Loadind</p>
      <span className='progress-text'>{progress}%</span>
    </div>
  )
}

export default Loader
