import './App.css';
import Clickevent from './Clickevent';
import Admin from './UserHook';
import Reszie from './Reszie'
import FormEvent from './FormEvent'
import Data from './Data.jsx'
import Feachapi from './Feachapi.jsx';
import Postapi from './Postapi.jsx';

function App() {
  return (
    <div className="App">
      <Admin/>
      <Clickevent/>
      <Reszie/>
      <FormEvent/>
      <hr></hr>
      <Data/>
      <b><hr></hr></b>
      <Feachapi/>
      <hr/>
      <Postapi/>
    </div>
  );
}

export default App;
