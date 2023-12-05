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
function loginForm()
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
        let str = [0-9];
        let def = [0-9];
        let hp = [20-26];
        let clean = 100;
        let hunger = 100;
        this.name = random(babyNames);
        this.digitype = random(digitype);
        this.digistate = level[0];
        this.str = random(str);
        this.def = random(def);
        this.hp = random(hp);
        this.clean = 100;
        this.hunger = 100;
    }
}
//each monster has hunger and cleanliness meters that are filled by feeding and bathing respectively,
// hunger and cleanliness meters being left low for too long is a husbandry failure and affects evolution

//6 areas to explore and fight other monsters, victories affect evolution, defeats count as a husbandry failure and affect evolution