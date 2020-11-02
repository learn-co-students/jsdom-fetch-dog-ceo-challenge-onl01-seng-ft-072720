const imageContainer = document.querySelector('#dog-image-container')
const dogList = document.querySelector('#dog-breeds')
const header = document.querySelector('h1')
const selectButton = document.querySelector('#breed-dropdown')

// selectButton.addEventListener("change", function(e) {
//     let dogs = dogList.querySelectorAll('li');
//     dogs.forEach(dog => makeHidden(dog, e.target.value));
//     console.log(`The letter changed to ${e.target.value}`)
// });

selectButton.addEventListener("change", function(e) {
    let dogs = dogList.querySelectorAll('li');
    dogs.forEach(function(element) {
        if (element.textContent.startsWith(e.target.value)) {
            element.style.visibility = "visible";
        } else {
            element.style.visibility = "hiddden";
        }
    })
})

// function makeHidden(element, value) {
//     element.style.visibility = "hidden";
//     if (element.text.startsWith(value)) {
//         element.style.visibility = "visible";
//     }
// }

function renderImage(image) {
    const img = document.createElement('img');
    img.src = image;
    imageContainer.appendChild(img);
}

function renderAllImages(data) {
    data.message.forEach(dog => renderImage(dog))
}

function getImages() {
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(response => response.json())
.then(json => renderAllImages(json))
}

function getBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => writeBreeds(json))
}

function addChangeColorListener(li) {
    li.addEventListener("click", function(e){
        e.target.style.color = 'red';
    })
}

function writeBreeds(data) {
    for (const property in data["message"]) {
        const entry = document.createElement('li');
        const info = document.createTextNode(`${property}`);
        addChangeColorListener(entry);
        entry.appendChild(info);
        dogList.appendChild(entry);
    }
}


getImages();
getBreeds();