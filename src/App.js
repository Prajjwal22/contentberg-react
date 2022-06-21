import './App.css';
import './components/card/card.css';
import MainTwo from './components/maintwo/maintwo';
import MainFour from './components/mainfour/mainfour';
import MainFive from './components/mainfive/mainfive';
import MainSix from './components/mainsix/mainsix';
import MainSeven from './components/mainseven/mainseven';
import Footer from './components/footer/footer';
import { useEffect } from 'react';
import { useState } from 'react';
import Header1 from './components/header/header1';
function App() {
  // const [data,setData]=useState([]);
  // const getData=()=>{
  //   fetch('data.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       setData(myJson)
  //     });
  // }
  // useEffect(()=>{
  //   getData()
  // },[])
const [state,setstate]=useState();

  useEffect(() => {
    async function fetchNews(){
      const data = await fetch('https://fortnite-api.com/v2/news/br');

      const items = await data.json();
      setstate(items.data.motds);
  }
    fetchNews();
  
  }, []);
  

  return (
    <div className="App">
      <Header1/>
      {/* <Header /> */}
      {/* {JSON.stringify({data[3].title})} */}
      {/* <div className="cardContainer">
      <Card/>
      <Card/>

      <Card/>

      <Card/>

      <Card/>

      <Card/>
      </div> */}
      <div className='Main'>
      <MainTwo data={state}/>
      <MainFour data ={state}/>
      <MainFive data={state} />
      <MainSix data={state} />
      <MainFour data={state}/>
      <MainSeven data={state}/>
      </div>
      {/* <MainOne /> */}
      <Footer />

    </div>
  );
}

export default App;
