import React, { Component, Fragment } from 'react';
import Cabecalho from '../components/Cabecalho'
import NavMenu from '../components/NavMenu'
import Dashboard from '../components/Dashboard'
import Widget from '../components/Widget'
import TrendsArea from '../components/TrendsArea'
import Tweet from '../components/Tweet'
import Modal from '../components/Modal'

import * as TweetServices from '../services/tweets';
import * as TweetActions from '../actions/tweets';
import { connect } from 'react-redux'

class Home extends Component {

    state = {
        modalIsOpen: false,
        tweetSelecionado: null,
        novoTweet: ''
    }

    novoTweetEstaValido() {
        const novoTweetLength = this.state.novoTweet.length;
        return novoTweetLength > 0 && novoTweetLength <= 140;
    }

    componentDidMount() {
        this.props.dispatch(TweetActions.listaTweets());
    }

    handleCriaTweet = (event) => {
        event.preventDefault();
        TweetServices.criaTweet(this.state.novoTweet)
            .then(({ body }) => {

                this.setState({ novoTweet: '' });
                this.props.dispatch({
                    type: "tweets/criaTweet",
                    novoTweet: body,
                });

            })
        
    }

    onHandleExcluirTweet = (tweetID) => {
        this.setState({
            listaTweet: this.state.listaTweet.filter(item => {
                return item._id !== tweetID;
            })
        });
    }

    onHandleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    onSelectTweet = (tweetID) => {
        const tweetSelecionado = this.state.listaTweet
            .find(item => item._id === tweetID);

        this.setState({
            tweetSelecionado
        });
    }

    onCloseModal = () => {
        this.setState({
            modalIsOpen: false,
        })
    }

    render() {
        const { novoTweet, tweetSelecionado, modalIsOpen } = this.state;
        const { listaDaStore } = this.props;
        return (
            <Fragment>
                <Cabecalho>
                    <NavMenu usuario="@omariosouto" />
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <form className="novoTweet" onSubmit={this.handleCriaTweet}>
                                <div className="novoTweet__editorArea">
                                    <span className={`novoTweet__status ${this.novoTweetEstaValido() ? '' : "novoTweet__status--invalido"}`}>
                                        {novoTweet.length}/140
                                    </span>
                                    <textarea 
                                        className="novoTweet__editor" 
                                        placeholder="O que está acontecendo?" 
                                        value={novoTweet} 
                                        onChange={(event) => {
                                            this.setState({
                                                novoTweet: event.target.value
                                            });
                                        }} />
                                </div>
                                <button 
                                    type="submit" 
                                    className="novoTweet__envia"
                        
                                    disabled={!this.novoTweetEstaValido()}>
                                        Tweetar
                                </button>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">
                                {listaDaStore.length > 0 ? listaDaStore.map( (item, index) => (
                                    <Tweet key={index} 
                                            id={item._id}
                                            avatar={item.usuario.foto} 
                                            userName={item.usuario.nome}
                                            likeado={item.likeado} 
                                            login={item.usuario.login}
                                            removivel={item.removivel}
                                            onHandleExcluirTweet={this.onHandleExcluirTweet}
                                            onHandleModal={this.onHandleModal}
                                            onCloseModal={this.onCloseModal}
                                            onSelectTweet={this.onSelectTweet}
                                            totalLikes={item.totalLikes}>
                                        {item.conteudo}
                                    </Tweet>
                                )) : "Digite seu primeiro tweet"}    
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
                <Modal 
                    modalIsOpen={modalIsOpen} 
                    tweetSelecionado={tweetSelecionado}
                    >

                    {tweetSelecionado && (<Tweet 
                        id={tweetSelecionado._id}
                        avatar={tweetSelecionado.usuario.foto} 
                        userName={tweetSelecionado.usuario.nome}
                        likeado={tweetSelecionado.likeado} 
                        login={tweetSelecionado.usuario.login}
                        removivel={tweetSelecionado.removivel}
                        totalLikes={tweetSelecionado.totalLikes}>
                        {tweetSelecionado.conteudo}
                    </Tweet>)}
                </Modal>
            </Fragment>
        );
    }
}

export default connect((store) => ({
    listaDaStore: store.lista,  
}))(Home);