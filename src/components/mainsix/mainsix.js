import React from 'react'
import LoadMoreBtn from '../loadmorebtn/loadmorebtn'
import WithImgCard from '../withimgcard/withimgcard'
import '../mainsix/mainsix.css'
import SmallCard from '../smallcard/smallcard'

function MainSix() {
    return (
        <div className='container'>
            <h3 className='blockTitle'>Marketing</h3>
            <div className='mainSix'>
                <div className='colLeft'>
                    <WithImgCard />
                </div>
                <div className='colRight'>
                    <ul className='thumbList'>
                        <li><SmallCard/></li>
                        <li><SmallCard/></li>
                        <li><SmallCard/></li>
                        <li><SmallCard/></li>
                    </ul>
                </div>
            </div>

            <LoadMoreBtn />


        </div>
  )
}

export default MainSix