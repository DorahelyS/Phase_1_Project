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
    fetch('https://api.petfinder.com/v2/animals?type=dog&page=2&limit=40', {
      headers: {
        'Authorization': `Bearer ${data.access_token}`
      }
    })
      .then(res => res.json())
      .then(animals => {
        animals.animals.forEach(animal => {
          //console.log(animal)
          renderAnimalInfo(animal)
        })
      })
  })

function renderAnimalInfo(animal) {
  const animalAge = document.createElement('ul')
  const animalName = document.createElement('ul')
  const animalBreed = document.createElement('ul')
  const animalGender = document.createElement('ul')
  const animalSize = document.createElement('ul')
  const animalImg = document.createElement('img')

  animalAge.textContent = "Age: " + animal.age
  animalName.textContent = "Name: " + animal.name
  animalBreed.textContent = "Breed: " + animal.breeds.primary
  animalGender.textContent = "Gender: " + animal.gender
  animalSize.textContent = "Size: " + animal.size


  if (animal.photos.length > 0) {
    animalImg.src = animal.photos[0].small
    animalList.append(animalImg)
    animalList.append(animalName, animalBreed, animalAge, animalGender, animalSize)
  

    //mouseover event for animal Images (remember to change image)
animalImg.addEventListener('mouseover', () => {
    animalImg.src = "src/Photos/Adopt Me button.png";
    // console.log('event successful')

    })} 

    //mouseout event for animal images
animalImg.addEventListener('mouseout', () => {
    animalImg.src = animal.photos[0].small
    })

}


newDogForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const newDogId = document.getElementById("dog-id").value
  const newDogName = document.getElementById("dog-name").value
  const newDogBreed = document.getElementById("dog-breed").value
  const newDogAge = document.getElementById("dog-age").value
  const newDogGender = document.getElementById("dog-gender").value
  const newDogSize = document.getElementById("dog-size").value
  const newDogImage = document.getElementById("dog-image").value

  const newDogInfo = {
    "newDogName": newDogName, "newDogImage": newDogImage, "newDogId": newDogId, "newDogBreed": newDogBreed, "newDogAge": newDogAge, "newDogGender": newDogGender, "newDogSize": newDogSize
  }

  //dialogue box when you submit your dogs info
  window.alert("Thank you for submitting your dog's info!");

  //resets form once you hit submit info
  newDogForm.reset();

  //light/dark toggle function
//  function lightDarkMode() {
//     let button = document.getElementsByClassName('dark-mode')

//     button.addEventListener('click', () => {
//         // button.lightDark.toggle('dark-mode')
//         console.log("i was clicked")
//     })
   
//   }

  //Don't need POST REQUEST FOR PHASE-1 PROJECT
  // Fetch request to post a new dog to the webpage (API) using the submitted info:
  // You can uncomment and modify this code according to your needs
  // fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Other headers, if needed
  //     },
  //     body: JSON.stringify(newDogInfo),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the response data
  //     })
  //     .catch(error => {
  //       // Handle any errors
  //     });
});


//     // Simple fetch 
//     fetch('http://localhost:3000/animals', {
// // our post 
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
// //  newDogInfo  is being stringify and converted to plain text
//         body: JSON.stringify(newDogInfo),



//     })
//     return (res.json())
//     }
//     newDogInfo("https://example.com/answer" {then((data) => {
//   console.log(data))
//     })
//   console.log(data);
  
//   .then(res => res.json())
//   .then(data => {}






// console.log(data);


//event listeners
//eventlistener1: Submit listener (already done)

//eventlistener2: key down listener for the dark mode button

//eventlistener3: click listener for dialog box once dog info is submitted