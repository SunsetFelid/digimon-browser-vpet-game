///Monster raising game
//needs:
//variables
//buttons
const loginButton = document.getElementsById('login-button');
const submitButton = document.getElementsById('ac-submit');

//Account Constructor
class user {
    constructor(){
        this.username = ''; 
        this.password = '';
        this.email = '';
        this.digimon = '';
        }
    }
//Account creation system
//Validate input
if (casPassCreate !== casPassConfirm){
    alert('Passwords do not match.')
}
if (casEmail !== casEmailConfirm){
    alert('Emails do not match.')
}


function accountCreate(classes){
    //variables
    let casUsernameCreate = document.getElementsById('username-create');
    let casPassCreate = document.getElementsById('password-create');
    let casPassConfirm = document.getElementsById('password-confirm');
    let casEmail = document.getElementsById('email');
    let casEmailConfirm = document.getElementsById('email-confirm');
    //validate input
    //make better later!
    if (casPassCreate.value !== casPassConfirm.value || casEmail.value !== casEmailConfirm){
        alert('email or password does not match.');
    } else {
        username = casUsernameCreate.value;
        password = casPassCreate.value;
        email = casEmail.value;
         new user(username, password, email);
        
    }
};
//Login form Submissions
    //login variables
function validateInput(classes){
    //variables
    let username = document.getElementsById('username');
    let password = document.getElementsById('password');

    //validate input
    if(username.value || password.value == ''){
        alert('Username or password fields are empty.');
        return;
    } else {
        username = "";
        password = "";
    }
}
function loginForm(){
    
}
//event listener for account creation submission
submitButton = document.addEventListener('ac-submit', (e) => {

})
//event listener for login form
loginButton.addEventListener('login-button', (e) => {
    e.preventDefault();
    validateInput('username', 'password');
});

//login storage (encryption required!)

//Monster archetypes (the monsters hatch from eggs, and evolve as they grow)
const digitype = ['Virus', 'Vaccine', 'Null'];
const level = ['Baby','Rookie','Mega']
const babyNames = ['Botamon', 'Pabumon', 'Poyomon'];
const rookieNames = ['Agumon', 'Gabumon', 'Patamon', 'Renamon', 'Lopmon', 'Tentamon'];
const megaNames = ['Wargreymon', 'Weregarurumon', 'Angemon', 'Jijimon', 'Seraphimon', 'Beelzemon', 'MegaKabuterimon'];

//each monster has unique stats (strength, defense, HP) that are raised by training
class digimon{
    constructor(){
        this.name = babyNames[getRandomInt(3)];
        this.digitype = digitype[getRandomInt(3)];
        this.level = level[0];
        this.str = getRandomInt(10);
        this.def = getRandomInt(10);
        this.hp = 20 + getRandomInt(6);
        this.clean = 100;
        this.hunger = 60;
        this.failure = 0;
        this.victory = 0;
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
//6 areas to explore and fight other monsters, victories affect evolution, defeats count as a husbandry failure and affect evolution
//battle randomizer (you should be fighting things at your own level)