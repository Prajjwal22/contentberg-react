import React from 'react'
import LoadMoreBtn from '../loadmorebtn/loadmorebtn'
import WithImgCard from '../withimgcard/withimgcard'
import '../mainsix/mainsix.css'
import SmallCard from '../smallcard/smallcard'

function MainSix({data}) {
    return (
        <div className='container'>
            <h3 className='blockTitle'>Marketing</h3>
            <div className='mainSix'>
            {data?.slice(3,4).map(res =><WithImgCard  data={res}/>)} 
                    
                     <ul className='thumbList'>
                     {data?.map(res => <li><SmallCard data={res}/></li>  )}
                        {/* <li><SmallCard/></li>
                        <li><SmallCard/></li>
                        <li><SmallCard/></li> */}
                    </ul>
                  
                </div>

            <LoadMoreBtn />


        </div>
  )
}

export default MainSix