import React, { useState } from 'react'
import './miniPreview.css'



const MiniPreview = ({ title, photoArray }) => {

  const [modelIndex, setModelIndex] = useState(0)

  return (
    <div className='miniPreview'>
      <h1>{title}</h1>

      <div className='miniModelDisplay'>
        {photoArray.map((photo, i) => (
          <div
            key={i}
            className={`miniModelSlice ${i === modelIndex ? 'modelFocus' : ''}`}
            onClick={() => setModelIndex(i)}
          >
            <img className='miniModelPhoto' src={photo} />
          </div>
        ))}
      </div>

      <button>View the Range</button>

    </div>
  )
}

export default MiniPreview
