import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'

class LoginPage extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { login, senha } = this.refs;

        const url = "http://twitelum-api.herokuapp.com/login";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({login: login.value, senha: senha.value}),
        })
        .then( async (response) => {
            return {
                success: response.ok,
                body: await response.json()
            }
        })
        .then(body => {
            if (body.success) {
                localStorage.setItem("token", body.token);
                this.props.history.push('/');
            } else {
                alert('PAM!!');
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form className="loginPage__form" onSubmit={this.handleSubmit}  action="/">
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login</label> 
                                    <input ref="login" className="loginPage__input" type="text" id="login" name="login"/>
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                    <input ref="senha" className="loginPage__input" type="password" id="senha" name="senha"/>
                                </div>
                                {/* <div className="loginPage__errorBox">
                                    Mensagem de erro!
                                </div> */}
                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginPage