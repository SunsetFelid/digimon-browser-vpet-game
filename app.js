///Monster raising game
//needs:
//variables
//buttons
const loginButton = document.getElementsById('login-button');
const submitButton = document.getElementsById('ac-submit');

//Account Constructor
class user {
    constructor(){
        const digiegg = ["Botamon","Punimon","Pabumon"]
        var digimon ={
            name: random(digiegg);
            str = [0-9],
            def = [0-9],
            hp = 20,
            clean = 100,
            hunger = 100
        }
        this.username = ''; 
        this.password = '';
        this.email = '';
        this.createDigimon = function(...){
        user.digimon.push(new digimon());
        }
    }
}
//Account creation system
//Validate input
if (casPassCreate !=== casPassConfirm){
    alert('Passwords do not match.')
}
if (casEmail !=== casEmailConfirm){
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
    //make bettter later!
    if (casPassCreate.value !== casPassConfirm.value || casEmail.value !== casEmailConfirm){
        alert('email or password does not match.');
    } else {
        username = casUsernameCreate.value;
        password = casPassCreate.value;
        email = casEmail.value;
        create new user(username, password, email);
        
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
function loginform()
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

//each monster has unique stats (strength, defense, HP) that are raised by training

//each monster has hunger and cleanliness meters that are filled by feeding and bathing respectively,
// hunger and cleanliness meters being left low for too long is a husbandry failure and affects evolution

//6 areas to explore and fight other monsters, victories affect evolution, defeats count as a husbandry failure and affect evolution