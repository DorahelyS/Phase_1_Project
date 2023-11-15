//GROUP PROJECT

/* Constant variables */
const animalList = document.getElementById("animal-list")
const animalImgsUrl = "http://localhost:3000/animals"
const newDogForm = document.getElementById("new-pet");
const dogImage = document.getElementById("dog-image");


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
        // console.log(data)
        fetch('https://api.petfinder.com/v2/animals?type=dog&page=2', {
            headers: {
                'Authorization': `Bearer ${data.access_token}`
            }
        })
            .then(res => res.json())
            .then(animals => {
                animals.animals.forEach(animal => {
                    // console.log(animal)
                    renderAnimalInfo(animal)
                    // debugger

                })

            })
    })

// fetch(animalImgsUrl)
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(renderImg)
//         // debugger
//     })                                   //code for db.json images
// function renderImg(image) {
//     // console.log(image)
//     const dogImage = document.createElement('img')

//     dogImage.src = image.Url

//     animalList.append(dogImage)
//     debugger
// }
function renderAnimalInfo(animal) {
    const animalSpecies = document.createElement('li')
    const animalAge = document.createElement('li')
    const animalImg = document.createElement('img')

    animalAge.textContent = "Age: " + animal.age
    animalSpecies.textContent = "Animal: " + animal.species

    if (animal.photos.length > 0) {
        animalImg.src = animal.photos[0].small
        animalList.append(animalImg)
    } else {
        const noAnimalImage = document.createElement('img')
        noAnimalImage.src = "https://st3.depositphotos.com/9494100/15431/i/450/depositphotos_154313516-stock-photo-pug-dog-with-yellow-constructor.jpg"
        animalList.append(noAnimalImage)
    }
    animalList.append(animalSpecies, animalAge)
    // creating a node for the form
    // debugger
}
//if statement 



//creating a submit event using the form node, also added error catching.
newDogForm.addEventListener('submit', function (e) {
    //prevent form from actually reloading the page or redirecting
    e.preventDefault();
    // this name will hold the Id key that will be returned when form is submitted
    const newDogId = document.getElementById("dog-id").value
    // this node will hold the value of Dname when form is submitted
    const newDogName = document.getElementById("dog-name").value
    //this node will hold the value of the dog breed
    const newDogBreed = document.getElementById("dog-breed").value
    //this node will hold the value of the dog age
    const newDogAge = document.getElementById("dog-age").value
    //this node will hold the value of the dog gender
    const newDogGender = document.getElementById("dog-gender").value
    //this node will hold the value of the dog size
    const newDogSize = document.getElementById("dog.size").value
    // this node will hold the Pic URL value when submitted
    const newDogImage = document.getElementById("dog-image").value

    // payload is our values from our form being created into an object and sent to the json 
    const newDogInfo = {
        "newDogName": newDogName, "newDogImage": newDogImage, "newDogId": newDogId, "newDogBreed": newDogBreed, "newDogAge": newDogAge, "newDogGender": newDogGender, "newDogSize": newDogSize
    };
    // Simple fetch 
    fetch('http://localhost:3000/animals', {
        // our post 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // payload  is being stringify and converted to plain text
        body: JSON.stringify(newDogInfo),

    })
        .then(res => res.json())
        .then(data => console.log(newDogInfo))

    console.log(data)
})
// This process is successful if there is not console error
// .catch(err => console.log(err));
