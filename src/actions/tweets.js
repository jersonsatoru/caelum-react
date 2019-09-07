import * as TweetServices from '../services/tweets';

export function listaTweets() {
    return dispatch => {
        TweetServices.listaTweets()
            .then(({ body }) => {
                dispatch({
                    type: "tweets/atualizaLista",
                    listaDeTweets: body
                }) 
            });
    }
}