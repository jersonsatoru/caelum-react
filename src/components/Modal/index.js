import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';

import './modal.css';

export default class Modal extends React.Component{
    static propTypes = {
        isOpen: PropTypes.bool,
        children: PropTypes.node,
        onCloseModal: PropTypes.func.isRequired
    }

    static defaultProps = {
        children: ''
    }

    handleClose = (event) => {
        const { onCloseModal } = this.props;
        if (!event.target.closest('.modal__conteudo')){
            onCloseModal();
        }
    }

    render(){
        const { children, modalIsOpen } = this.props; 
        return (
            <div className={`modal ${modalIsOpen && "modal--active"}`} onClick={this.handleClose}>
                <div className="modal__conteudo">
                    <Widget>
                        {modalIsOpen && children}
                    </Widget>
                </div>
            </div>
        );
    }
}