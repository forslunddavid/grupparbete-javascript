export{}

// initialize local storage with empty array of users
let users = [];
console.log('hej');
localStorage.setItem('users', JSON.stringify(users));

function saveUserData(score, won) {
	let users = JSON.parse(localStorage.getItem('users'));
	let currentUser = JSON.parse(localStorage.getItem('currentUser'));

	if (won) {
		currentUser.result = 'Vinst'
	} else {
		currentUser.result = 'Förlust'
	}
	currentUser.score = score;

	users.push(currentUser);
	localStorage.setItem('users', JSON.stringify(users));
}

