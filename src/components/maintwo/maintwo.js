import React from 'react'
import '../maintwo/maintwo.css'
import NoImgCard from '../noimgcard/noimgcard'
import WithImgCard from '../withimgcard/withimgcard'

function MainTwo() {
  

  return (

    <div className='mainTwo container'>
      <div className='colLeft'>
       <WithImgCard/>
      </div>
      <div className='colRight'>
      <h3 className='blockTitle'>More Featured</h3>
        <ul className='postList'>
          <li><NoImgCard/></li>
          <li><NoImgCard/></li>
          <li><NoImgCard/></li>
          <li><NoImgCard/></li>
        </ul>
      </div>

    </div>
  )
}

export default MainTwo