// skapa referens till knappen
const playbutton = document.querySelector("#button");
const playbutton2 = document.querySelector("#button");

// lägg till en eventlistener för att klicka på knappen

playbutton.addEventListener("click", function() {

// välj alla divar med stil invisible

	const divs = document.querySelectorAll(".invisible");
console.log('click',divs)
// Dölj visa div

	divs.forEach(function(div) {

	div.classList.toggle('invisible');

	});
});

playbutton2.addEventListener("click", function() {

// välj alla divar med stil welcome

	const divs = document.querySelectorAll(".welcome");
console.log('click',divs)
// Dölj visa div

	divs.forEach(function(div) {



	div.classList.toggle('welcome-hidden');




	});
});


// overlay statistik

const statistics = document.querySelector(".statistics");

statistics.addEventListener("click", function() {

// skapa / styla overlay
	const overlay = document.createElement("div");
	overlay.style.position = "fixed";
	overlay.style.top = 0;
	overlay.style.left = 0;
	overlay.style.width = "100%";
	overlay.style.height = "100%";
	overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	overlay.style.display = "flex";
	overlay.style.alignItems = "center";
	overlay.style.justifyContent = "center";

// skapa / styla på content
	const content = document.createElement("section");
	content.style.backgroundColor = "#ffffff";
	content.style.padding = "20px";
	content.style.borderRadius = "10px";
	content.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
	content.style.width = "90vw";
	content.style.height = "90vh";
	content.style.zIndex = "30";
	content.textContent = "Statistik";


// Append the content to the overlay
	overlay.appendChild(content);

// Append the overlay to the body
	document.body.appendChild(overlay);



	overlay.addEventListener("click", function(event) {
    if (event.target === overlay) {
    overlay.remove();
    }
});

});

// spara till local storage från inputfältet

let playerNames = [];

document.querySelector('button').addEventListener('click', () => {
	const playerName = document.querySelector('.player-name').value;

	playerNames.push(playerName);
	localStorage.setItem('playerNames', JSON.stringify(playerNames));
});

// function savePlayer(){
// 	var newPlayer = document.getElementsByClassName('player-name').value

// 	if (localStorage.getItem('playerNames') == null) {
// 		localStorage.setItem('playerNames','[]')
// 	}

// 	var playerList = JSON.parse(localStorage.getItem('playerNames'));
// 	playerList.push(newPlayer);

// 	localStorage.setItem('playerNames', JSON.stringify(playerList));

// }

