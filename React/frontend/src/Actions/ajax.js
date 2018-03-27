export const authTokenPromise = (username, password) => fetch(
    "http://localhost:8000/api/auth",
    {
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body:'username=' + username + '&password=' + password
    },
);

export const authTokenAsync = (username, password) => fetch(
    "http://localhost:8000/api/auth",
    {
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body:'username=' + username + '&password=' + password
    },
).then(
    res => res.json()
).then(
    (result) => {
        return ({signedIn:true, token:result.token})
    },

    (error) => {
        console.log(error);
        return ({signedIn:false, token:''})
    }
);
