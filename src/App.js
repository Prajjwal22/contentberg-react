import logo from './logo.svg';
import './App.css';
import './components/card/card.css';
import Header from './components/header/header';
import MainOne from './components/mainone/mainone';
import Card from './components/card/card';
import MainTwo from './components/maintwo/maintwo';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <div className="cardContainer">
      <Card/>
      <Card/>

      <Card/>

      <Card/>

      <Card/>

      <Card/>
      </div> */}


      <MainOne/>
      <MainTwo/>
    
</div>
  );
}

export default App;
