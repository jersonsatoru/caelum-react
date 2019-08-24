import React, { createContext, useState } from 'react';

export const NotificacaoContext = createContext({
    mensagem: '',
    setMensagem(){},
});

export const NotificacaoProvider = ({ children }) => {
    const [mensagem, setMensagem] = useState('');

    return (
        <NotificacaoContext.Provider 
            value={{ mensagem, setMensagem }}>

            {children}

            {mensagem && (
                <div className="notificacaoMsg" onAnimationEnd={() => setMensagem('')}>
                    {mensagem}
                </div>
            )}
        </NotificacaoContext.Provider>
    ) 
}
