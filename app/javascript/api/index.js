const getFruits = () => {
    return fetch('/api/v1/fruits.json') // this whole thing returns a promise
        .then((response) => {
            if (response.status === 200) {
                return response.json() // this is a promise that we return
            } else {
                // this is where we handle the error
            }
        })
}

export {
    getFruits
}