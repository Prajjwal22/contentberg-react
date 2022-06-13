import './App.css';
import './components/card/card.css';
import Header from './components/header/header';
import MainOne from './components/mainone/mainone';
// import Card from './components/card/card';
import MainTwo from './components/maintwo/maintwo';
import MainFour from './components/mainfour/mainfour';
import MainFive from './components/mainfive/mainfive';
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
  
  return (
    <div className="App">

      <Header/>
      {/* {JSON.stringify({data[3].title})} */}
      {/* <div className="cardContainer">
      <Card/>
      <Card/>

      <Card/>

      <Card/>

      <Card/>

      <Card/>
      </div> */}

<MainTwo/>
<MainFour/>    
<MainFive/>
      <MainOne/>
    
</div>
  );
}

export default App;
