import React from 'react'
import LoadMoreBtn from '../loadmorebtn/loadmorebtn'
import '../mainfive/mainfive.css'
import WithImgCard from '../withimgcard/withimgcard'

function MainFive() {
    return (
        <div className='container'>
            <h3 className='blockTitle'>Gadgets</h3>
            <div className='mainFive'>
                <WithImgCard />
                <WithImgCard />
                <WithImgCard />
                <WithImgCard />
                <WithImgCard />
                <WithImgCard />
            </div>
            <LoadMoreBtn />
        </div>
    )
}

export default MainFive