console.log ("Connected");
let attackBtn = document.querySelector('#attackBtn')
let playerHealthDisplay = document.querySelector('#playerHealthDisplay')
let encHealthDisplay = document.querySelector('#encHealthDisplay')

/* Player Char */

let playerStr = 5;
let playerStam = 8;
let playerAgi = 6;
let playerExp;
let playerHealth = playerStr*2;
playerHealthDisplay.textContent = playerHealth;
let playerLevel = 1;
let playerArmorClass = 2;

let playerAttackDMG = 15;
let playerCritChance = 5;

let playerHitRoll;
let playerDamage;

/* Encounter Status */

let encStr = 5;
let encStam = 8;
let encAgi = 6;
// let encExp; // I dont think this could be needed
let encHealth = encStr*2;
encHealthDisplay.textContent = encHealth;
let encLevel = 1;
let encArmorClass = 2;

let encAttackDMG = 15;
let encCritChance = 5;

let enchitRoll;
let encdamage; 


attackBtn.addEventListener("click", playerAttack);

function playerAttack (){
    
        // does it hit
    playerHitRoll = Math.floor(Math.random()*100);
    console.log ("Rolled a "+playerHitRoll);
        // for how much
    if (playerHitRoll >  (100 - playerCritChance)) {
        playerDamage = Math.floor(Math.random()*(playerAttackDMG*2));
        console.log("CRITICAL HIT, hit for "+playerDamage);
        encMitigation(playerDamage);
        return;
    }
    if (playerHitRoll >  65) {
        playerDamage = Math.floor(Math.random()*playerAttackDMG);
        console.log("HIT, hit for "+playerDamage);
        encMitigation(playerDamage);
        return;
    }
}

function encMitigation(){
    encEvadeChance = Math.floor(Math.random()*100);
    if (encEvadeChance > (100-encAgi)){
        playerDamage = 0;
        return;
    };
    playerDamage = (playerDamage - encArmorClass);
        if (playerDamage <= 0) {
            playerDamage = 0;
        console.log("damage neturalized");
    }
    encHealth = encHealth - playerDamage;
    encHealthDisplay.textContent = encHealth;
    console.log("You have been hit for " + playerDamage + ", your health is now " + encHealth);
}

/* Pseduo Coding
 combat Order of operation

outgoing chance to hit
outgoing damage
incoming chance to evade
incoming mitigation


*/