import React from 'react'
import FeatImg from '../../assets/maintwo-card.jpg'
import '../smallcard/smallcard.css'

function SmallCard() {
    return (
        <div className='cardThumb'>
            <div className='bigOneImg'>
                <img src={FeatImg} alt="Card Image" />
            </div>
            <div>
                <h3 className='medTitle'>How to Dualboot Backtrack Alongside Windows 10</h3>
            </div>
        </div>
    )
}

export default SmallCard