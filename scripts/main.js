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

var beginningScenarios = [
	"You wake up in a forest disoriented and can't remember how you got there. You stumble around and hear moaning and groaning and soon find out the forest is cralling with zombies!",
	"You leave your apartment and find zombies walking amongst the street!",
	"You're picking up your child from school to realize they've been turned into a zombie!"
];

function randomNumber(range) {
	return Math.round(Math.random() * range)
};

function beignGame() {

alert(beginningScenarios[ randomNumber(beginningScenarios.length - 1) ]);

var weaponList = ["gun", "rake", "textbook", "shovel", "car", "rock" ,"volley ball"];

var weapon = weaponList [randomNumber( weaponList.length - 1 ) ];
alert("Noticing the carnage surrounding you, you grab the nearest weapon you can find! You grab a " + weapon + "!");

alert("You attack the zombies with your *" + weapon + " and struggle to hold them off!");

var survival = randomNumber(2);

	if (survival === 0) {
		alert("The brain eating zombies have bitten you! You loose!! Yummy brains!!");
	} else if (survival > 0) {
		alert("You are a master with your " + weapon + " and slay the brain eating zombies!! You win!!");
	}
};

beginGame();
