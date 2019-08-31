export function criaTweet(novoTweet){
    const url = `https://api-twitelum.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem('token')}`;
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
    const url = `https://api-twitelum.herokuapp.com/tweets`;
    return fetch(url)
    .then(async (response) => {
        return {
            success: response.ok,
            body: await response.json()
        }
    });
}