import React from 'react'
import FeatImg from '../../assets/maintwo-card.jpg'
import '../../components/withimgcard/withimgcard.css'

function WithImgCard() {
    return (
        <div className='featCard'>
            <div className='bigOneImg'>
                <img src={FeatImg} alt="Card Image" />
            </div>
            <div>
                <span className='meta tag'>Marketing</span>
                <h2 className='largeTitle'>How to Dualboot Backtrack Alongside Windows 10</h2>
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
                    <p>More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</p>
                </div>
                <div className='readMore'>
                    <span>Read More</span>
                </div>
            </div>
        </div>
    )
}

export default WithImgCard