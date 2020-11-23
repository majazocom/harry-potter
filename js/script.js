let url = 'https://www.potterapi.com/v1/';
let houseUrl = 'http://hp-api.herokuapp.com/api/characters/house/'; // + gryffindor
let endPoint = '';
let dataSet;
let house = '';
let classmates = [];
let spell = '';
let patronus = '';
let deatheater = false;

let doMagic = async () => { // sagt till JS att funktionen är asynkron

    let response = await fetch(url + endPoint); // innan responsen sparas i 
                                                // variabeln ska vi vänta på fetchen

    let localDataSet = await response.json(); // vänta på att vår respons ska göra om till objekt

    return localDataSet; //returnerar det vi gjort härinne i funktionen

}

let renderHouse = async () => {
    house = dataSet;
    document.getElementById('house').innerHTML = house;
}

document.getElementById('sorting-hat-image').addEventListener('click', async function() {
    endPoint = 'sortingHat';
    dataSet = await doMagic();   // innan det vi returnerar från funktionen sparas i variabeln 
                                 // ska vi vänta på att den asynkrona funktionen är HELT färdig
    await renderHouse();
})

document.getElementById('spells-image').addEventListener('click', function() {
    classmates = [];
    fetch(houseUrl + house)
    .then(response => response.json())
    .then(data => {
        data.map(d => classmates.push(d.name));
        console.log(classmates);
        classmates.map(classmate => {
            console.log(classmate);
            document.getElementById('select-mate').innerHTML += `<option>${classmate}</option>`;
        })
    })
})