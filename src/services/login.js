export function logar({ login, senha }){
    const url = "https://api-twitelum.herokuapp.com/login";
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({ login: login.value, senha: senha.value }),
    })
    .then( async (response) => {
        return {
            success: response.ok,
            body: await response.json()
        }
    });
}