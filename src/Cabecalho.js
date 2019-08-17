import React, { Component } from 'react';

import Navegacao from './Navegacao';

class Cabecalho extends Component {

    render(){
        return(
            <header>
                <h1>Twitelum</h1>

                <Navegacao />
            </header>
        );
    }
}

export default Cabecalho;