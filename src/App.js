import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {

    state = {
        novoTweet: '',
        listaTweet: [],
    }

    novoTweetEstaValido() {
        const novoTweetLength = this.state.novoTweet.length;
        return novoTweetLength > 0 && novoTweetLength <= 140;
    }

    handleCriaTweet = (event) => {
        event.preventDefault();
        this.setState({
            novoTweet: '',
            listaTweet: [this.state.novoTweet, ...this.state.listaTweet],
        });
        console.log(this.state)
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
                                    <Tweet key={index} avatar="data:image/jpeg;base64,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" 
                                            userName="Jerson" 
                                            likes="3">
                                        {item}
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

export default App;