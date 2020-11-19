let url = 'https://www.potterapi.com/v1/';
let houseUrl = 'http://hp-api.herokuapp.com/api/characters/house/';
let endPoint = '';
let dataSet;
let house = '';
let spell = '';
let patronus = '';
let deatheater = false;

let doMagic = () => {
    fetch(url + endPoint)
    .then(response => response.json())
    .then(data => {
        dataSet = data;
    })
    .catch((error) => {
        console.error('Error: ', error);
    });
}

document.getElementById('sorting-hat-image').addEventListener('click', function() {
    endPoint = 'sortingHat';
    doMagic();
    house = dataSet;
    document.getElementById('house').innerHTML = house;
})

document.getElementById('spells-image').addEventListener('click', function() {
    endPoint = 'spells';
    doMagic();
    spell = dataSet;
})