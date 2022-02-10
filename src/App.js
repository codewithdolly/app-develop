
import './App.css';
import { HotBets, Features } from './Components';
import Card from "./Components/Cards/Cards"

function App() {
  return (
    <div className="app">
    <HotBets />
    <Features />

      <Card />
    </div>
  );
}

export default App;
