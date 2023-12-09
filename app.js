///Monster raising game
//needs:
//player data
class user {
    constructor(){
        this.egg = {};
        this.digimon = {};
        this.graveyard = [];
        }
    }

//Monster archetypes (the monsters hatch from eggs, and evolve as they grow)
const digitype = ['Virus', 'Vaccine', 'Null'];
const level = ['Baby','Rookie','Mega']
const rookieNames = ['Agumon', 'Gabumon', 'Patamon', 'Renamon', 'Lopmon', 'Tentamon'];
const megaNames = ['Wargreymon', 'Weregarurumon', 'Angemon', 'Jijimon', 'Seraphimon', 'Beelzemon', 'MegaKabuterimon'];

//each monster has unique stats (strength, defense, HP) that are raised by training
class digimon{
    constructor(){
        this.name = "Botamon";
        this.digitype = digitype[getRandomInt(3)];
        this.level = level[0];
        this.str = getRandomInt(10);
        this.def = getRandomInt(10);
        this.hp = 20 + getRandomInt(6);
        this.age = 0;
        this.clean = 100;
        this.hunger = 60;
        this.failure = 0;
        this.victory = 0;
    }
}
function digiEgg(){
    const egg = {imgUrl: 'images/Digitama.png', width: 100px}
    if (user.digimon === '';){
     
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
        user.digimon.hunger -= 2;
        seconds = 1799;
    }
}
function messTimer(){
    if (seconds > 0){
        setTimeout(tick, 1000);
    } else { 
        user.digimon.clean--;
    }
}

// hunger and cleanliness meters being left low for too long is a husbandry failure and affects evolution
if (user.digimon.hunger <= 20 || user.digimon.clean <=20){
    user.digimon.failure += 1;
}
function digimonDies(){
if (user.digimon.hunger || user.digimon.clean === 0){
    alert('Your Digimon has Died!');
    let gravestone = user.digimon.name.toString();
    let lastAge = user.digimon.age.toString() + ' days';
    user.graveyard.push([gravestone, lastAge]);
    delete user.digimon;
    }
}
//1 area to explore and fight other monsters, victories affect evolution, defeats count as a husbandry failure and affect evolution
//battle randomizer (you should be fighting things at your own level)