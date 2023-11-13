//GROUP PROJECT

// save url to a var
const apiLink = ''

fetch(apiLink)
.then((response) => {
    return response.json()
})
.then((pets) => {
    console.log(pets)
})
