//

// skapa referens till knappar och inputfält
const playButton = document.querySelector("#button");
const playbutton2 = document.querySelector("#button");
const newGameButton = document.querySelector('.new-game-button');
const nameInput = document.querySelector('.player-name');


// regler för inputfält

nameInput.addEventListener('keydown', function (event) {
	event.stopPropagation();
});

nameInput.addEventListener('input', function () {
	playButton.disabled =(this.value ==='');
});

// lägg till en eventlistener för att klicka på knappen

playButton.addEventListener("click", function () {

	// välj alla divar med stil invisible

	const divs = document.querySelectorAll(".invisible");
	console.log('click', divs)
	// Dölj visa div

	divs.forEach(function (div) {

		div.classList.toggle('invisible');

	});
});

playbutton2.addEventListener("click", function () {

	// ta namnet från input och spara i Local Storage
	let newUserName = document.querySelector('.player-name').value;
	let currentUser = {
		name: newUserName,
		score: 0,
		result: 'no game played'
	};

	localStorage.setItem('currentUser', JSON.stringify(currentUser));

	// välj alla divar med stil welcome
	const divs = document.querySelectorAll(".welcome");
	console.log('click', divs)
	// Dölj visa div

	divs.forEach(function (div) {
		div.classList.toggle('welcome-hidden');

	});
});



// overlay statistik
const statistics = document.querySelector(".statistics");

statistics.addEventListener("click", function () {

  // skapa / styla overlay
	const statisticsOverlay = document.createElement("div");
	statisticsOverlay.className = ('overlay');

  // skapa / styla  content
	const statisticsContent = document.createElement("section");
	statisticsContent.className = ('statistics-content');

  // Lägg till content till overlay
	statisticsOverlay.appendChild(statisticsContent);

  // Lägg till overlay till body
	document.body.appendChild(statisticsOverlay);

  // Append the user list to the statisticsContent element
	let users = JSON.parse(localStorage.getItem('users'));
	let userList = document.createElement('ul');
	userList.className = 'user-list';
	users.forEach(user => {
    let userItem = document.createElement('li');
	userItem.className = 'user-item';
    userItem.textContent = `${user.name} - Score: ${user.score}, Result: ${user.result}`;
    userList.appendChild(userItem);
	});
	statisticsContent.appendChild(userList);

	statisticsOverlay.addEventListener("click", function (event) {
    if (event.target === statisticsOverlay) {
    	statisticsOverlay.remove();
    }
	});

});
