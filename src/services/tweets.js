import config from '../config'

export function criaTweet(novoTweet){
    const url = `${config.baseURL}/tweets?X-AUTH-TOKEN=${localStorage.getItem('token')}`;
    return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            conteudo: novoTweet
        })
    })
    .then(async (response) => {
        return {
            success: response.ok,
            body: await response.json()
        }
    });
}

export function listaTweets() {
    const url = `${config.baseURL}/tweets?X-AUTH-TOKEN=${localStorage.getItem('token')}`;
    return fetch(url)
    .then(async (response) => {
        return {
            success: response.ok,
            body: await response.json()
        }
    });
}

export function curtiTweet({ token, tweetID }){
    const url = `${config.baseURL}/tweets/${tweetID}/like?X-AUTH-TOKEN=${localStorage.getItem('token')}`;
    return fetch(url, {
        method: "POST",
    })
    .then(async (response) => {
        console.log(response);
        return {
            body: response.json(),
            success: response.ok
        }
    });
}

export function excluirTweet(tweetID) {
    const url = `${config.baseURL}/tweets/${tweetID}?X-AUTH-TOKEN=${localStorage.getItem('token')}`
    return fetch(url, {
        method: "DELETE",
    }).then(response => {
        return {
            body: response.json(),
            success: response.ok,
        }
    });
}