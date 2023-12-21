///Monster raising game
//needs:

//HTML Collections
var mainContent = document.getElementsByName('main-content');
//const startBtn = document.getElementById('start');
//const statsBtn = document.getElementById('stats');
const feedBtn = document.getElementById('feed');
const cleanBtn = document.getElementById('clean');
const playBtn = document.getElementById('play');
//const graveBtn = document.getElementById('grave');
const egg = document.getElementById('egg');
var subtext = document.querySelector('.h4');
const digimonEl = document.querySelector('.digimon');
var gravestone = document.querySelector('.gravebtn');

//Monster archetypes (the monsters hatch from eggs, and evolve as they grow)
const type = ['Virus', 'Vaccine', 'Null'];
const level = ['Baby','Rookie','Mega'];
//const rookieNames = ['Agumon', 'Gabumon', 'Patamon', 'Renamon', 'Lopmon', 'Tentamon'];
//const megaNames = ['Wargreymon', 'Weregarurumon', 'Angemon', 'Jijimon', 'Seraphimon', 'Beelzemon', 'MegaKabuterimon'];

class digimon{
    constructor(){
        this.name = "Botamon";
        this.type = type[Math.floor(Math.random() * type.length)];
        this.level = level[0];
 //       this.str = getRandomInt(10);
 //       this.def = getRandomInt(10);
 //       this.hp = 20 + getRandomInt(6);
        this.age = 0;
        this.clean = 50;
        this.hunger = 50;
        this.fun = 50;
 //       this.failure = 0;
 //       this.victory = 0;
    }
}

//player data
const player = {
        digimon: {},
        graveyard: ['']
        }

//egg appears
function digiEgg(){
    while (mainContent.firstChild.id !== 'egg'){
        alert('You got a digi-egg!');
        const myImage = document.createElement('img');
        myImage.setAttribute('id', 'egg')
        mainContent.appendChild(myImage);
    }   
}

//egg hatches upon being clicked
function hatch(e) {
    if (e.target.id === 'egg') {
        console.log('starting hatch');
        player.digimon = new digimon();
        e.target.id = 'digimon';
        alert('Your egg hatched into Botamon!');
        subtext.textContent = 'Hint: Each stat drains the others in different amounts';
        console.log('finish hatch');
    }
}

function checkState(){
    if (player.digimon.clean < player.digimon.hunger && player.digimon.clean < player.digimon.fun){
        subtext.textContent = 'Botamon looks dirty.';
    } else if (player.digimon.hunger < player.digimon.clean && player.digimon.hunger < player.digimon.fun) {
        subtext.textContent = 'Botamon looks peckish.';
    } else if (player.digimon.fun < player.digimon.hunger && player.digimon.fun < player.digimon.clean){
        subtext.textContent = 'Botamon looks bored.'
    }
}
//Death
function digimonDies(){
        console.log("death start");
        alert('Your Digimon has Died!');
        let gravestat = 'Name: ' + player.digimon.name.toString() + ' Age: ' + player.digimon.age.toString() + 'days';

        console.log(gravestat);
        player.graveyard.push[gravestat];
        console.log(player.graveyard.values);
        delete player.digimon;
        console.log('digimon deleted');
        var mainCon = document.getElementById('digimon');
        mainCon.setAttribute('id', 'gravebtn');
        subtext.textContent = "Game Over";
        console.log('death end');
    }


    // hunger, fun, and cleanliness meters shift, as each is filled, they drain each other.
function feedDigimon(e){
    if (player.digimon.hunger > 60){
        alert('Botamon is not hungry!');
    }   else if (player.digimon.hunger <= 60){
        alert('Botamon: "Thanks for the food!"');
        player.digimon.hunger += 43;
        player.digimon.clean -= 20;
        player.digimon.fun -= 25;
        checkState();
        if (player.digimon.clean <= 0 || player.digimon.fun <= 0){
            digimonDies();
        }
    }
}

function playWithDigimon(e){
    if (player.digimon.fun > 60){
        alert('Botamon is not bored!');
    }   else if (player.digimon.fun <= 60){
        alert('Botamon: "Thanks for playing with me!"');
        player.digimon.fun += 43;
        player.digimon.clean -= 25;
        player.digimon.hunger -=20;
        checkState();

        if (player.digimon.clean <= 0 || player.digimon.hunger <= 0){
            digimonDies();
        }
    }
}

function washDigimon(e){
    if (player.digimon.clean > 60){
        alert('Botamon is not that dirty!');
    }   else if (player.digimon.clean <= 60) {
        alert('Botamon: "Thanks for the washing me!"');
        player.digimon.clean += 43;
        player.digimon.fun -= 20;
        player.digimon.hunger -= 25;
        checkState();

        if (player.digimon.hunger <= 0 || player.digimon.fun <= 0) {
            digimonDies();
        }
    }
}

function init(){
    const eggClick = egg.addEventListener('click', hatch);
    const feedClick = feedBtn.addEventListener('click', feedDigimon);
    const washClick = cleanBtn.addEventListener('click', washDigimon);
    const playClick = playBtn.addEventListener('click', playWithDigimon);
}
init();