const baseURL = `https://api-twitelum.herokuapp.com`;

export function criaTweet(novoTweet){
    const url = `${baseURL}/tweets?X-AUTH-TOKEN=${localStorage.getItem('token')}`;
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
    const url = `${baseURL}/tweets`;
    return fetch(url)
    .then(async (response) => {
        return {
            success: response.ok,
            body: await response.json()
        }
    });
}

export function curtiTweet({ token, tweetID }){
    const url = `${baseURL}/tweets/${tweetID}/like?X-AUTH-TOKEN=${localStorage.getItem('token')}`;
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