///Monster raising game
//needs:
//HTML Collections
const mainContent = document.getElementsByName('main-content');
const statsBtn = document.getElementById('stats');
const feedBtn = document.getElementById('feed');
const cleanBtn = document.getElementById('clean');
const graveBtn = document.getElementById('grave');
const eggclicker = document.addEventListener('click', hatch)
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
        alert('You got a digi-egg!')
        const myImage = document.createElement('img');
        myImage.className= 'egg';
        mainContent.appendChild(myImage);
    }   
       hatch() {
            alert('Your egg hatched into Botamon!')
            player.digimon = new digimon();
            const myDigimon = document.createElement('img');
            myDigimon.className= 'digimon';
            mainContent.removeChild('myImage');
            mainContent.appendChild('myDigimon');
        }
}
//each monster has hunger and cleanliness meters that are filled by feeding and bathing respectively,
//time (by half hours)
let seconds = 1799;
function timer(){
    seconds--;
}
function foodTimer(){
    if (seconds > 0){
        setTimeout(timer, 1000);
    } else {
        player.digimon.hunger -= 2;
        seconds = 1799;
    }
}
function messTimer(){
    if (seconds > 0){
        setTimeout(tick, 1000);
    } else { 
        player.digimon.clean--;
    }
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