import React from 'react'
import Photo from '../../assets/card-image.jpg'
function Card() {
  return (
    <div className='card'>
        <div className="cardImg overlay">
            <img alt=" " src={Photo}/>
        </div>
        <div className='cardTitle'>
          <h3>Home Appliances</h3>
        </div>

    </div>
  )
}

export default Card