import './App.css';
import Contador from './components/Contador/Contador'

function App() {
  
  return (
    <div className="App">
      <Contador sum="3"  />
      <Contador sum="2" res="2" initVal="3"/>
      <Contador sum="1" res="1" initVal="10" />
      <Contador sum="5" res="5" />
    </div>
  );
}

export default App;
