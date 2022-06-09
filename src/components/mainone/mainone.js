import React from 'react'
import Card from '../card/card'
import './mainone.css'

function MainOne() {
    return (
        <div className='rowWrapper container'>
            <div className='colLeft'>
                <div className='oneCard'>
                    <Card />
                </div>
                <div className='twoCards'>
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='colRight'>
            <div className='twoCards'>
                    <Card />
                    <Card />
                </div>
            <div className='colLeft oneCard'>
                    <Card />
                </div> 
            </div>
        </div>
    )
}

export default MainOne