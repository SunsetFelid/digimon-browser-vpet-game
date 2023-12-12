///Monster raising game
//needs:
//HTML Collections
const mainContent = document.getElementsByName('main-content');
const statsBtn = document.getElementById('stats');
const feedBtn = document.getElementById('feed');
const cleanBtn = document.getElementById('clean');
const graveBtn = document.getElementById('grave');
const egg = document.querySelector('.egg');
const digimonEl = document.querySelector('.digimon');
//Monster archetypes (the monsters hatch from eggs, and evolve as they grow)
const type = ['Virus', 'Vaccine', 'Null'];
const level = ['Baby','Rookie','Mega']
//const rookieNames = ['Agumon', 'Gabumon', 'Patamon', 'Renamon', 'Lopmon', 'Tentamon'];
//const megaNames = ['Wargreymon', 'Weregarurumon', 'Angemon', 'Jijimon', 'Seraphimon', 'Beelzemon', 'MegaKabuterimon'];
//each monster has unique stats (strength, defense, HP) that are raised by training
class digimon{
    constructor(){
        this.name = "Botamon";
        this.type = type[Math.floor(Math.random() * type.length)];
        this.level = level[0];
 //       this.str = getRandomInt(10);
 //       this.def = getRandomInt(10);
 //       this.hp = 20 + getRandomInt(6);
        this.age = 0;
        this.clean = 39;
        this.hunger = 60;
 //       this.failure = 0;
 //       this.victory = 0;
    }
}

//player data
const player = {
        digimon: {},
        graveyard: ''
        }


function digiEgg(){
    while (mainContent.firstChild !== true){
        alert('You got a digi-egg!');
        const myImage = document.createElement('img');
        myImage.setAttribute(className, 'egg')
        mainContent.appendChild(myImage);
    }   
}
function hatch(e) {
    if (e.target.className === 'egg') {
        console.log('starting hatch');
        player.digimon = new digimon();
        e.target.className = 'digimon';
        alert('Your egg hatched into Botamon!');
        console.log('finish hatch');
    }
}

/*function hungry(){
        player.digimon.hunger -= 5;
        player.digimon.clean -= 4;
        console.log(player.digimon.hunger);
    }
*/

//each monster has hunger and cleanliness meters that are filled by feeding and bathing respectively,
//time (by half hours)

// hunger and cleanliness meters being left low for too long is a husbandry failure and affects evolution
function feedDigimon(e){
    if (player.digimon.hunger > 60){
        alert('Botamon is not hungry!');
    }   else if (player.digimon.hunger <= 60){
        alert('Botamon: "Thanks for the food!"');
        player.digimon.hunger += 40;
    }
}
    
function washDigimon(e){
    if (player.digimon.clean > 60){
        alert('Botamon is not that dirty!');
    }   else if (player.digimon.clean <= 60) {
        alert('Botamon: "Thanks for the washing me!"');
        player.digimon.clean += 40;
    }
}
if (player.digimon.hunger <= 20 || player.digimon.clean <=20){
    player.digimon.failure += 1;
}
function digimonDies(){
if (player.digimon.hunger || player.digimon.clean === 0){
    alert('Your Digimon has Died!');
    let gravestone = player.digimon.name.toString();
    let lastAge = player.digimon.age.toString() + ' days';
    player.graveyard.push([gravestone, lastAge]);
    delete player.digimon;
    mainContent.removeChild('myImage')
    }
}

const eggClicker = egg.addEventListener('click', hatch);
const feedClick = feedBtn.addEventListener('click', feedDigimon);
const washClick = cleanBtn.addEventListener('click', washDigimon);
