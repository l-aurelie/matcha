import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [newuser, setNewuser] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input type="text" value={newuser} onChange={(e) => setNewuser(e.target.value)}/>
         {/* <button onClick={}>add user</button>*/}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
