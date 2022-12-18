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

let playerAttackDMG = 10;
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

let encAttackDMG = 10;
let encCritChance = 5;

let encHitRoll;
let encDamage; 


attackBtn.addEventListener("click", playerAttack);

function playerAttack (){
    console.log("playerAttack Ran");
            // does it hit
    playerHitRoll = Math.floor(Math.random()*100);
    console.log(playerHitRoll);
        // for how much
    if (playerHitRoll >  (100 - playerCritChance)) {
        playerDamage = Math.floor(Math.random()*(playerAttackDMG*2));
        // console.log("TEMP - Player Crit");
        encMitigation(playerDamage);
        return;
    }
    if (playerHitRoll >  65) {
        playerDamage = Math.floor(Math.random()*playerAttackDMG);
        // console.log("TEMP - Player hit");
        encMitigation(playerDamage);
        return;
    } if (playerHitRoll <= 64) {
        console.log("Player has missed their attack.");
        encAttack()
    };
    }

function encMitigation() {
    encEvadeChance = Math.floor(Math.random() * 100);
    console.log(encEvadeChance);
    if (encEvadeChance > (100 - encAgi)) {
        playerDamage = 0; //Clearing Value
        console.log("Players attacked has been dodged the Encounter.");
        encAttack()
        return;
    };
    playerDamage = (playerDamage - encArmorClass);
    if (playerDamage <= 0) {
        playerDamage = 0;
        console.log("Players damage neturalized by the encounters armor class");
        encHealth = encHealth - playerDamage;
        encHealthDisplay.textContent = encHealth;
        encAttack();
        return;
    }
    encHealth = encHealth - playerDamage;
    encHealthDisplay.textContent = encHealth;
    console.log("Player has hit the encounter for " + playerDamage + ", their health is now " + encHealth);
    encAttack();
}

function encAttack (){
    // console.log("encAttack Ran");
        // does it hit
    encHitRoll = Math.floor(Math.random()*100);
    // console.log(encHitRoll);
        // for how much
    if (encHitRoll >  (100 - encCritChance)) {
        encDamage = Math.floor(Math.random()*(encAttackDMG*2));
        // console.log("TEMP - Crit;");
        playerMitigation(encDamage);
        return;
    }
    if (encHitRoll >=  65) {
        encDamage = Math.floor(Math.random()*encAttackDMG);
        // console.log("TEMP - Hit");
        playerMitigation(encDamage);
        return;
    }
    console.log("Encounter has missed their attack.");
}

function playerMitigation(){
    playerEvadeChance = Math.floor(Math.random()*100);
    if (playerEvadeChance > (100-playerAgi)){
        encDamage = 0;
        console.log("Player has dodged and avoided the attack.")
        return;
    };
    encDamage = (encDamage - playerArmorClass);
        if (encDamage <= 0) {
            encDamage = 0;
        console.log("Encounters damage was absorbed by the players armor.");
        playerHealth = playerHealth - encDamage;
        playerHealthDisplay.textContent = playerHealth;
        return;
    }
    playerHealth = playerHealth - encDamage;
    playerHealthDisplay.textContent = playerHealth;
    console.log("Encounter has hit Player hit for " + encDamage + ", their health is now " + playerHealth);
}

/* Pseduo Coding
 combat Order of operation

outgoing chance to hit
outgoing damage
incoming chance to evade
incoming mitigation


*/