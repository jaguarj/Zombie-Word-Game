/*  PLANNING A PROJECT:
-----------------------------------------------
1. What do you want to make?:
-----------------------------------------------

I want to create a zombie text adventure game where the player
starts with a random scenario. They search for a weapon and fight a zombie.
The player has a 33% chance of getting bitten and losing, or killing the zombie and winning.

-----------------------------------------------
2. What steps do you think are necessary?
-----------------------------------------------

Beginning:
1. Write scenarios
2. Store a list of possible scenarios
3. Alert a random scenario from the list of possible scenarios

Weapon:
1. Create a list of weapons
2. Save the list of weapons
3. Alert which weapon the player finds

-----------------------------------------------
3. What syntax or coding patterns might you use?
-----------------------------------------------

Arrays for lists
Need multiple random numbers so a randomNumber function

-----------------------------------------------
Remember: There are many ways to create things with code! The most important part is to write it and get it working.
If you can't get something to work, try making it simpler.
After, look for ways you might improve your code!
*/

var outcome;

window.alert("Agggghhhhhh!! The zombies are coming, the zombies are coming!! \
            Welcome to the nightmare of the zombie apocalypse where you have \
            to fight, or run for your life! You will be given a random scenario!");

function beginGame() {

var beginningScenarios = [
	"You wake up in a forest disoriented and can't remember how you got there. You stumble around and hear moaning and groaning and soon find out the forest is cralling with zombies!",
	"You leave your apartment and find zombies walking amongst the street!",
	"You're picking up your child from school to realize they've been turned into a zombie!"
];

function randomNumber(range) {
	return Math.round(Math.random() * range)
};

alert(beginningScenarios[ randomNumber(beginningScenarios.length - 1) ]);


var character = {
	health: 5,
	strength: 0,
	stealth: 0,
	name: prompt("What is your name?"),
	characterClass: prompt("You will need to choose a character in order to survive!\
	What was your occupation before the zombie apocalypse?\
	(Choose your occupation: Soldier, Lawyer, Web Developer)").toLowerCase()
};

if (!character.name) {
	character.name = window.prompt("You didn't tell me your name... Let's try this again! What is your name player?");

	if (!character.name) {
		character.name = prompt("Since you didn't give me your name, I'll just give you one! Let's call you Kel Citrus!");
		character.name = "Kel Citrus";
	}
}


if (character.characterClass === "soldier") {
	character.strength = 10;
	character.stealth = 5;
};

if (character.characterClass === "lawyer") {
	character.stealth = 6;
};

if (character.characterClass === "web developer" || character.characterClass === "web dev") {
	character.strength = 10;
	character.stealth = 10;
};

var choice = window.prompt("The former " + character.characterClass + ", " + character.name + ", is forced to make a bold \
decision in order to survive the zombie apocalypse! Do you attack or sneak by the zombie?").toLowerCase();

switch(choice) {
	case choice = "attack":
		character.strength++;
		alert("Show those zombies who's boss and defend yourself! Your strength has been increased +1! Your stats are: " + "Strength: " + character.strength + " " + "Stealth: " + character.stealth + " " + "Health: " + character.health);
		outcome = "Win";
		break;
	case choice = "sneak":
		character.stealth = character.stealth + 3;
		alert("Decided to run for it huh? Your stealth has increased +3! Your stats are: " + "Strength: " + character.strength + " " + "Stealth: " + character.stealth + " " + "Health: " + character.health);
			if(character.stealth <= 5) {
				alert("You try and sneak by but the brain eating zombies sniff you out and chomp down on your face!!");
				outcome = "lose";
			}
			else if (character.strenght > 5) {
				alert("You are a sneaky devil and survive this time!");
				outcome = "win";
			}
		break;
	default:
		alert("Just stay alive is the name of the game!");
		break;
};


var weaponList = ["gun", "rake", "textbook", "shovel", "car", "rock" ,"volley ball"];

var weapon = weaponList [randomNumber( weaponList.length - 1 ) ];
alert("Noticing the carnage surrounding you, you grab the nearest weapon you can find! You grab a " + weapon + "!");

alert("You attack the zombies with your " + weapon + " and struggle to hold them off!");

var survival = randomNumber(2);

switch(survival) {
	case survival = 0:
		alert("The brain eating zombies have bitten you! You loose!! Yummy brains!!");
		break;
	case survival = 1:
		alert("You are a master with your " + weapon + " and slay the brain eating zombies!! You win!!");
		break;
	case survival = 2:
		alert("Your " + weapon + " can't stop the zombies, run for your life!!");
		break;
	case survival = 3:
		alert("You've tripped over a dead body and lost your " + weapon + " the zombies are coming!!");
		break;
	case survial = 4:
		alert("Whoa, you're like a ninja with that " + weapon + " ! Watch out zombies!! You've won the war!");
		break;
	default:
		alert("You tough, but you must keep killing them if you want to stay alive!!");
		break;
};

// Closing bracket for start game funciton.
}

beginGame();

console.log("Zombies are approaching!");
