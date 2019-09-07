import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const initialState = {
    lista: [],
    tweetsSelecionado: "",
}

const store = createStore((store = initialState, action) => {
    if (action.type === "tweets/atualizaLista")
        return {
            ...store,
            lista: action.listaDeTweets,
        }
    if (action.type === "tweets/criaTweet")
        return {
            ...store,
            lista: [action.novoTweet, ...store.lista]
        }
    return store;
    
}, applyMiddleware(reduxThunk));

export default store;