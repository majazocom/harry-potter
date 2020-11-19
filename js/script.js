let url = 'https://www.potterapi.com/v1/';
let endPoint = '';
let house = '';

let doMagic = () => {
    fetch(url + endPoint)
    .then(response => response.json())
    .then(data => {
        house = data;
        console.log(house);
    })
}

document.getElementById('sorting-hat-image').addEventListener('click', function() {
    endPoint = 'sortingHat';

    doMagic();
    
})

document.getElementById('spells-image').addEventListener('click', function() {
    endPoint = 'spells';
})