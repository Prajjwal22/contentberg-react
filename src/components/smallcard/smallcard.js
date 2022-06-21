import React from 'react'
import '../smallcard/smallcard.css'

function SmallCard({data}) {
    return (
        <div className='cardThumb'>
            <div className='bigOneImg'>
                <img src={data?.image} alt="Card" />
            </div>
            <div>
                <h3 className='medTitle'>{data?.title}</h3>
            </div>
        </div>
    )
}

export default SmallCard