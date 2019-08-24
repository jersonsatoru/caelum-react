import React, { Component, createContext } from 'react';

export const NotificacaoContext = createContext('');

export class NotificacaoProvider extends Component {
    state = {
        mensagem: "Olá, Eu sou uma mensagem",
    }

    render(){
       return (
        <NotificacaoContext.Provider value={this.state.mensagem}>
            {this.props.children}
        </NotificacaoContext.Provider>
       ) 
    }
}
