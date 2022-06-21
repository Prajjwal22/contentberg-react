import React from 'react'
import LoadMoreBtn from '../loadmorebtn/loadmorebtn'
import '../mainfive/mainfive.css'
import WithImgCard from '../withimgcard/withimgcard'

function MainFive({data}) {

   
    return (
        <div className='container'>
            <h3 className='blockTitle'>Gadgets</h3>
            <div className='mainFive'>
    {data===undefined?null:data.map(res=><WithImgCard data={res} />)}
    <WithImgCard data={{image:'https://cdn-live.prm.ol.epicgames.com/prod/b6f43272c4471848d59ae157a0090cc360f9c6c2653d57fdaf253177cdee0ecd-0d53a1f8-821c-4948-9e80-ad57a2f88b21.jpeg', title:"Summer Drift and Beach Bomber", body:"add new key value pair to object javascript” Code Answer's. how to add field to object in js. javascript by Scatterbrained Pennyduck on Aug 25 2020 Comment"}} />   
    <WithImgCard data={{image:'https://cdn-live.prm.ol.epicgames.com/prod/36067e63940ec36e2e848c8d042952a53e33ffbdb9103f9ca9b22b27f495ce67efff0144867d13e8f0cecaaeabc924ee-abe71cc5-b336-4ba4-81e3-d5e68004306e.jpeg?width=1920', title:"Summer Drift and Beach Bomber", body:"add new key value pair to object javascript” Code Answer's. how to add field to object in js. javascript by Scatterbrained Pennyduck on Aug 25 2020 Comment"}} />   
            </div>
            <LoadMoreBtn />
        </div>
    )
}

export default MainFive