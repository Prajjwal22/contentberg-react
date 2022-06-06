import logo from './logo.svg';
import './App.css';
import Card from './components/card/card'
import './components/card/card.css';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='cardContainer'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
        </div>
    </div>
  );
}

export default App;
