export const signup = (user) => {
    const API = 'http://localhost:8000/api/signup'
    return fetch(`${API}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
}
export const signin = (user) => {
    const API = 'http://localhost:8000/api/signin'


    return fetch(`${API}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
}
