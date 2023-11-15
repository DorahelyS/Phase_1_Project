//GROUP PROJECT

/* Constant variables */
const animalList = document.getElementById("animal-list")


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
        //             .then(animals => {
        //                 animals.animals.forEach(animal => {
        //                     // console.log(animal)
        //                     renderAnimalInfo(animal)
        //                     debugger

        //                 })

        //             })
        //     })

        // function renderAnimalInfo(animal) {
        //     const animalSpecies = document.createElement('li')
        //     const animalAge = document.createElement('li')
        //     const animalImage = document.createElement('img')

        //     animalImage.src = ""
        //     animalAge.textContent = "Age: " + animal.age
        //     animalSpecies.textContent = "Animal: " + animal.species

        //     animalList.append(animalSpecies, animalAge, animalImage)
        //     debugger
    }
// creating a node for the form
const form = document.getElementById("form1");
// creating a node for the image URL
const DogPic = document.getElementById("image");

//creating a submit event using the form node, also added error catching.
form.addEventListener('submit', function (e) {
    //prevent form from actually reloading the page or redirecting
    e.preventDefault();
    // this node will hold the value of Dname when form is submitted
    const Dawgname = document.getElementById("Dname").value
    // this node will hold the Pic URL value when submitted
    const newpic = document.getElementById("Dogpic").value
    // this name will hold the Id key that will be returned when form is submitted
    const DID = document.getElementById("DogID").value

    // payload is our values from our form being created into an object and sent to the json 
    const payload = {
        "Dname": Dawgname, "Dogpic": newpic, "DogID": DID
    };
    // Simple fetch 
    fetch('http://localhost:3000/animals', {
        // our post 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // payload  is being stringify and converted to plain text
        body: JSON.stringify(payload),





    })
        .then(res => res.json())
        .then(data => {
            var Dawgname = Dname;

            console.log(payload);









            console.log(data);



        })
        // This process is successful if there is not console error
        .catch(err => console.log(err));



})
