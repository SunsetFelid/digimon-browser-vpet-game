///Monster raising game
//needs:
//HTML Collections
const mainContent = document.getElementsByName('main-content');
const statsBtn = document.getElementById('stats');
const feedBtn = document.getElementById('feed');
const cleanBtn = document.getElementById('clean');
const graveBtn = document.getElementById('grave');
//Monster archetypes (the monsters hatch from eggs, and evolve as they grow)
const type = ['Virus', 'Vaccine', 'Null'];
const level = ['Baby','Rookie','Mega']
//const rookieNames = ['Agumon', 'Gabumon', 'Patamon', 'Renamon', 'Lopmon', 'Tentamon'];
//const megaNames = ['Wargreymon', 'Weregarurumon', 'Angemon', 'Jijimon', 'Seraphimon', 'Beelzemon', 'MegaKabuterimon'];

//each monster has unique stats (strength, defense, HP) that are raised by training
class digimon{
    constructor(){
        this.name = "Botamon";
        this.type = type[getRandomInt(3)];
        this.level = level[0];
 //       this.str = getRandomInt(10);
 //       this.def = getRandomInt(10);
 //       this.hp = 20 + getRandomInt(6);
        this.age = 0;
        this.clean = 100;
        this.hunger = 60;
 //       this.failure = 0;
 //       this.victory = 0;
    }
}

//player data
const player = {
        egg: false,
        digimon: {},
        graveyard: ''
        }


function digiEgg(){
    while (mainContent.firstChild !== true){
        alert('You got a digi-egg!');
        const myImage = document.createElement('img');
        myImage.className= 'egg';
        mainContent.appendChild(myImage);
    }   
}
function hatch() {
    if (mainContent.firstChild.className = 'egg'){
    player.digimon = new digimon;
    alert('Your egg hatched into Botamon!');
    myImage.className= 'digimon';
    }
}
//each monster has hunger and cleanliness meters that are filled by feeding and bathing respectively,
//time (by half hours)
function hungry(){
    for (i = 15; i <= 0; i--){
        setTimeout(i, 1000);
    }
        player.digimon.hunger -= 2;
        i = 15;
}
function dirty(){
    for (i = 15; i <= 0; i--){
        setTimeout(i, 1000);
    }
        player.digimon.clean--;
        i = 15;
}


// hunger and cleanliness meters being left low for too long is a husbandry failure and affects evolution
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
    mainContent.removeChild('myDigimon')
    }
}

const eggClicker = egg.addEventListener('mousedown', hatch())