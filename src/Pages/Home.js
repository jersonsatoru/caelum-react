import React, { Component, Fragment } from 'react';
import Cabecalho from '../components/Cabecalho'
import NavMenu from '../components/NavMenu'
import Dashboard from '../components/Dashboard'
import Widget from '../components/Widget'
import TrendsArea from '../components/TrendsArea'
import Tweet from '../components/Tweet'

import * as TweetServices from '../services/tweets';

class Home extends Component {

    state = {
        novoTweet: '',
        listaTweet: [],
    }

    novoTweetEstaValido() {
        const novoTweetLength = this.state.novoTweet.length;
        return novoTweetLength > 0 && novoTweetLength <= 140;
    }

    componentDidMount() {
        TweetServices.listaTweets()
        .then(({ body }) => {
           this.setState({
               listaTweet: body
           }) 
        });
    }

    handleCriaTweet = (event) => {
        event.preventDefault();
        TweetServices.criaTweet(this.state.novoTweet)
            .then(({ body }) => {
                this.setState({
                    novoTweet: '',
                    listaTweet: [body, ...this.state.listaTweet]
                });
            })
        
    }

    render() {
        const { listaTweet, novoTweet } = this.state;
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
                                {listaTweet.length > 0 ? listaTweet.map( (item, index) => (
                                    <Tweet key={index} avatar={item.foto} 
                                            userName="Jerson" 
                                            likes="3">
                                        {item.conteudo}
                                    </Tweet>
                                )) : "Digite seu primeiro tweet"}    
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default Home;