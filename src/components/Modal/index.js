import React from 'react';

import Widget from '../Widget';

import './modal.css';

export default function Modal(props){
    
    const { children, modalIsOpen } = props; 
    return (
        <div className={`modal ${modalIsOpen && "modal--active"}`}>
            <div className="modal__conteudo">
                <Widget>
                    {modalIsOpen && children}
                </Widget>
            </div>
        </div>
    );
}