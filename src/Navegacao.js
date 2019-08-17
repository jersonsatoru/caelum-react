import React, { Component }  from 'react';

function Navegacao(props) {
    return (
        <nav>
            <ul>
                {props.links.map(item => (
                    <li>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navegacao;