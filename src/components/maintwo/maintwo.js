import React from 'react'
import '../maintwo/maintwo.css'
import NoImgCard from '../noimgcard/noimgcard'
import WithImgCard from '../withimgcard/withimgcard'

function MainTwo({data}) {
  

  return (

    <div className='mainTwo container'>
      <div className=''>
      {data?.slice(0,1).map(res => <WithImgCard data={res}/>)} 
      </div>
      <div className=''>
      <h3 className='blockTitle'>More Featured</h3>
      <ul className='postList'> {data?.slice(0,6).map(res => 
          <NoImgCard  data={res}/>)} </ul>
      </div>

    </div>
  )
}

export default MainTwo