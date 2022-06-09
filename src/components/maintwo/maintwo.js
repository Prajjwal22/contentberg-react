import React from 'react'
import FeatImg from '../../assets/card-image.jpg'
import '../maintwo/maintwo.css'

function MainTwo() {
  return (
    <div className='mainTwo container'>
        <div className='colLeft'>
            <div className='bigOne'>
               <img src={FeatImg}/>
               <span className='tag'>Marketing</span>
            </div>
        </div>
        <div className='colRight'>
            <h3>More Featured</h3>
        </div>

    </div>
  )
}

export default MainTwo