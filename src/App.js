
import './App.css';
import { HotBets } from './Components';
import Card from "./Components/Cards/Cards"

function App() {
  return (
    <div className="app">
    <HotBets />
    <br />
    <div className='break'></div>
      <Card />
    </div>
  );
}

export default App;
