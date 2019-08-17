import React, { Component } from 'react';

class Cabecalho extends Component {

    render(){
        return(
            <header>
                <h1>Twitelum</h1>

                <nav>
                    <ul>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Cabecalho;