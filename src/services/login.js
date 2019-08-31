import config from '../config'

export function logar({ login, senha }){
    return fetch(`${config.baseURL}/login`, {
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