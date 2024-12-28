import React from 'react'
import '../../styles/Loader.less'

const Loader = ({ progress }) => {
  return (
    <div className='loader'>
      <div className='wrapper'>
        <div
          className='progress'
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className='info'>
        <p>Loadind {progress}%</p>
      </div>
    </div>
  )
}

export default Loader
