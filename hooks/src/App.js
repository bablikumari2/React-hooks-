import logo from './logo.svg';
import './App.css';
import ErrorExample from './Hooks/UseState/1-error-example';
import Propdiling from './Hooks/Props-diling/prop-diling';
import Contexts from './Hooks/useContext/UseContext';
import Counter from './counter/Counter';
import Fech from './APi/Fech';
function App() {
  return (
    <div className="App">
      {/* <ErrorExample/> */}
      {/* <Propdiling/> */}
      {/* <Contexts/> */}
      {/* <Counter/> */}
      <Fech/>
    </div>
  );
}

export default App;
