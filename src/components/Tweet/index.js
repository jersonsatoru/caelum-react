import React, { Component } from 'react'
import './tweet.css'
import PropTypes from 'prop-types'

import * as TweetServices from '../../services/tweets'
import { NotificacaoContext } from '../../contexts/notificacao'

class Tweet extends Component {

    static propTypes = {
        avatar: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired, 
        login: PropTypes.string.isRequired, 
        removivel: PropTypes.bool.isRequired, 
        onHandleModal: PropTypes.func.isRequired,
    }

    state = {
        likeado: this.props.likeado,
        totalLikes: this.props.totalLikes,
    }

    static contextType = NotificacaoContext;

    onHandleCurtir = () => {
        const { likeado, totalLikes } = this.state;
        TweetServices.curtiTweet({
            token: localStorage.getItem('token'),
            tweetID: this.props.id,
        }).then((response) => {
            console.log(response);
            this.setState({
                likeado: !likeado,
                totalLikes: totalLikes + (likeado ? -1 : 1) 
            });
            // this.context.setMessage('Tweet curtido!');
        });
    }

    onHandleExcluirTweet = () => {
        TweetServices.excluirTweet(this.props.id)
        .then(({ body, success }) => {
            this.props.onHandleExcluirTweet(this.props.id);
        });
    }
 
    handleSelect = (event) => {
        const clickouNoFooter = event.target.closest('.tweet__footer')
        const { id, onSelectTweet } = this.props;

        if (onSelectTweet && !clickouNoFooter){
            onSelectTweet(id);
        }
    }

    render() {
        const { avatar, userName, children, login, removivel, onHandleModal } = this.props;
        const { likeado, totalLikes } = this.state; 
        return (
            <article className="tweet" onClick={this.handleSelect}>
                <div className="tweet__cabecalho">
                    <img className="tweet__fotoUsuario" src={avatar} alt="" />
                    <span className="tweet__nomeUsuario">{userName}o</span>
                    <a href="/"><span className="tweet__userName">@{login}</span></a>
                </div>
                <p className="tweet__conteudo" onClick={onHandleModal}>
                    {children}
                </p>
                <footer className="tweet__footer">
                    <button className="btn btn--clean" onClick={this.onHandleCurtir}>
                        <svg className={`icon icon--small iconHeart ${likeado ? 'iconHeart--active' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
                            <defs>
                                <clipPath id="a">
                                    <path d="M0 38h38V0H0v38z"></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                                <path d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.632-8.018-4.128-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.773.098-1.52.266-2.242C2.75 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.47.268 2.241"></path>
                            </g>
                        </svg>
                        {totalLikes}
                    </button>
                    {removivel && <button className="btn btn--blue btn--remove" onClick={this.onHandleExcluirTweet}>
                        X
                    </button>}
                </footer>
            </article>
        )
    }
}

export default Tweet