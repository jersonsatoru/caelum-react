import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

import Cabecalho from './Cabecalho';

function App() {
  return (
    <Fragment>
      <Cabecalho />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editando <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 2
          </a>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
