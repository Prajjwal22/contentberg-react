import React from 'react'
import '../maintwo/maintwo.css'
import NoImgCard from '../noimgcard/noimgcard'
import WithImgCard from '../withimgcard/withimgcard'

function MainTwo() {
  

  return (

    <div className='mainTwo container'>
      <div className=''>
       <WithImgCard/>
      </div>
      <div className=''>
      <h3 className='blockTitle'>More Featured</h3>
        <ul className='postList'>
          <NoImgCard/>
          <NoImgCard/>
          <NoImgCard/>
          <NoImgCard/>
        </ul>
      </div>

    </div>
  )
}

export default MainTwo