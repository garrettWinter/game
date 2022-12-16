console.log ("Connected");
let attackBtn = document.querySelector('#attackBtn')
let healthDisplay = document.querySelector('#healthDisplay')

/* Player Char */

let playerStr = 5;
let stam = 8;
let agi = 6;
let exp;
let health = stam*2;
healthDisplay.textContent = health;
let level = 1;
let armorClass = 2;

let attackDMG = 15;
let critChance = 5;

let hitRoll;
let damage;

/* Encounter Status */

let encStr = 5;
let encStam = 8;
let encAgi = 6;
let encExp;
let encHealth = stam*2;
// healthDisplay.textContent = health;
let encLevel = 1;
let encArmorClass = 2;

let encAttackDMG = 15;
let encCritChance = 5;

let enchitRoll;
let encdamage; 


attackBtn.addEventListener("click", attackOut);

function attackOut (){
    
        // does it hit
    hitRoll = Math.floor(Math.random()*100);
    console.log ("Rolled a "+hitRoll);
        // for how much
    if (hitRoll >  (100 - critChance)) {
        damage = Math.floor(Math.random()*(attackDMG*2));
        console.log("CRITICAL HIT, hit for "+damage);
        mitigation(damage);
        return;
    }
    if (hitRoll >  65) {
        damage = Math.floor(Math.random()*attackDMG);
        console.log("HIT, hit for "+damage);
        mitigation(damage);
        return;
    }
}

function mitigation(){
    evadeChance = Math.floor(Math.random()*100);
    if (evadeChance > (100-agi)){
        damage = 0;
        return;
    };
    damage = (damage - armorClass);
        if (damage <= 0) {
        damage = 0;
        console.log("damage neturalized");
    }
    health = health - damage;
    healthDisplay.textContent = health;
    console.log("You have been hit for " + damage + ", your health is now " + health);
}

/* Pseduo Coding
 combat Order of operation

outgoing chance to hit
outgoing damage
incoming chance to evade
incoming mitigation


*/