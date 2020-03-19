'use-strict'

function authLogin (email, password, callBack) {
    const userToSend = {
        email: email,
        password: password
    }
    fetch('http://localhost:8080/auth/login', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userToSend)
    })
        .then(response => response.json())
        .then(data => {
            callBack(data)
        })
}

function logOutUser () {
    fetch('http://localhost:8080/auth/logout', {
        credentials: 'include'
    })
        .then(response => response.json())
        .then(data => {
            console.log('LOGOUT RESULT: ', data.success)
        })
}

function getCurrentUser (token, callBack) {
    fetch('http://localhost:8080/auth/user', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success === true) {
                fetch('http://localhost:8080/roles/' + data.data.id_role, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token
                    }
                })
                    .then(response => response.json())
                    .then(data2 => {
                        callBack(data, data2.data.title)
                    })
            } else {
                callBack(data, '')
            }
        })
}

export default {
    authLogin,
    logOutUser,
    getCurrentUser
}
