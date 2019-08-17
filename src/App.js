import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

import Cabecalho from './components/Cabecalho';
import Navegacao from './components/Navegador';

function App() {
  return (
    <Fragment>
      <Cabecalho>
        <Navegacao links={["mensagem", "contato", "coisas loucas"]}></Navegacao>
      </Cabecalho>
    </Fragment>
  );
}

export default App;
