//GROUP PROJECT

/* Constant variables */



fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: 'P6GCotp7I6NmfYKxBpR3cf1haaJV5Oq7dmRMnQXnoFLtsmf7gZ',
        client_secret: 'fBcJro9ytCQJb1vJWMwBHrZJlEyeuv7h74FhOOhI'
    }),
    headers: {
        'content-type': 'application/json'
    }
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        fetch('https://api.petfinder.com/v2/animals?type=dog&page=2', {
            headers: {
                'Authorization': `Bearer ${data.access_token}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    })