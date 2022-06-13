import React from 'react'
import WithImgCard from '../withimgcard/withimgcard'
import '../mainfour/mainfour.css'
import LoadMoreBtn from '../loadmorebtn/loadmorebtn'

function MainFour() {
  return (
    <div className='container'>
      <h3 className='blockTitle'>More Featured</h3>
      <div className='mainFour'>
        <WithImgCard />
        <WithImgCard />
      </div>
      <LoadMoreBtn />
    </div>
  )
}

export default MainFour