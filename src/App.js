
import './App.css';
import { HotBets } from './Components';
import Card from "./Components/Cards/Cards"

function App() {
  return (
    <div className="app">

    <h3>HOT Bets</h3>
    <HotBets />
    <br />
      <Card />
    </div>
  );
}

export default App;
