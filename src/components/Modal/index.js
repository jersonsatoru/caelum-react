import React from 'react';

import Widget from '../Widget';

import './modal.css';

export default function Modal(props){
    const { children } = props; 
    return (
        <div className="modal">
            <div className="modal__conteudo">
                <Widget>
                    <h1>Yay</h1>
                    {children}
                </Widget>
            </div>
        </div>
    );
}