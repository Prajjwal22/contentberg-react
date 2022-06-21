import React from 'react'
import '../../components/withimgcard/withimgcard.css'

function WithImgCard({data}) {
    return (
        <div className='featCard'>
            <div className='bigOneImg'>
                <img src={data?.image} alt="Card" />
            </div>
            <div>
                <span className='meta tag'>{data?.tabTitle}</span>
                <h2 className='largeTitle'>{data?.title}</h2>
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
                <div className='postContent'>
                    <p>{data?.body}…</p>
                </div>
                <div className='readMore'>
                    <span>Read More</span>
                </div>
            </div>
        </div>
    )
}

export default WithImgCard