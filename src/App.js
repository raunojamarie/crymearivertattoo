import logo from './logo.svg';
import './App.css';
import plakat from "./plakat.jpg"

function App() {
  return (
    <div className="main-content">
      <img src={plakat} width="500" height="600" className="plakat" />
    </div>
  );
}

export default App;
