import React from 'react'
import '../../components/noimgcard/noimgcard.css'

function NoImgCard({data}) {
  return (
    <div className='listCard'>
      <span className='meta tag'>{data?.tabTitle}</span>
      <h3 className='medtitle'>{data?.title}</h3>
      <div className='meta dateMeta'>
        <time className='pubDate'>
          Aug 14 2018
        </time>
        <span className='metaSeperator'>
        </span>
        <span className='readTime'>
          5 Mins Read
        </span>
      </div>
    </div>
  )
}

export default NoImgCard