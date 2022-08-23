import logo from './logo.svg';
import './App.css';
import ErrorExample from './Hooks/UseState/1-error-example';
import Propdiling from './Hooks/Props-diling/prop-diling';
import Contexts from './Hooks/useContext/UseContext';
import Counter from './counter/Counter';
import Fech from './APi/Fech';
import User from './interview/User';
function App() {
  return (
    <div className="App">
      {/* <ErrorExample/> */}
      {/* <Propdiling/> */}
      {/* <Contexts/> */}
      {/* <Counter/> */}
      {/* <Fech/> */}
      <User/>
    </div>
  );
}

export default App;
