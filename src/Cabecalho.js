import React, { Component } from 'react';

class Cabecalho extends Component {

    render(){
        return(
            <header>
                <h1>Twitelum</h1>
                {this.props.children}
            </header>
        );
    }
}

export default Cabecalho;