import { words } from "./ord.js"


// variabler för själva spelet
const randomWords = words
const guessWord = document.querySelector('.guess-word')
const wrongLetterContainer = document.querySelector('.wrong-letter')
const hangmanParts = document.querySelectorAll(".hangman-part");
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö'];
const randomValue = randomWords[Math.floor(Math.random() * randomWords.length)]
console.log(randomValue)
const randomValueArray = [...randomValue]
let guessedLetters = [];
let wrongLetters = [];
const answer = []


///// funktioner /////

// Skapa en Array med rätt gissade bokstäver i
makeAnswerArray();

function makeAnswerArray() {
	for (let i = 0; i < randomValueArray.length; i++) {
		answer.push("");
	}
}

// skapa linjer till slumpat ord

renderLines();

function renderLines() {
	guessWord.innerHTML = "";
	for (let lines = 0; lines < answer.length; lines++) {
		const underLine = document.createElement('p')
		underLine.innerText = (answer[lines])
		underLine.className = ('under-line')
		guessWord.append(underLine)

	}
}

// Skapa en lista med gissade bokstäver som är fel

function renderWrongLetter(letter) {
	let wrongLetter = document.createElement('p')
	wrongLetter.innerText = (letter)
	wrongLetter.className = ('wrong-letter-text')
	wrongLetterContainer.insertAdjacentElement('afterbegin', wrongLetter);
	// console.log(wrongLetter)
}

// Rita ut gubben

function showHangman() {
	hangmanParts.forEach((part, index) => {
		const wrongGuess = wrongLetters.length;
		if (index -0  < wrongGuess) {
		part.style.display = "block";
		}

	});
}

// funktioner för att skapa overlays vid vinst/förlust

function createWinOverlay(){
	const winOverlay = document.createElement("div");
	const winButton = document.createElement('button')
	const winContent = document.createElement('p');

	winOverlay.className = ('overlay')
	winButton.className = ('new-game-button')
	winButton.innerText = ('Nytt spel')
	winContent.innerText = ('Grattis du vann! Du gissade ' + guessedLetters.length + ' gånger')
	winContent.className = ('content')

		// Lägg till content till overlay
	winOverlay.appendChild(winContent);
	winContent.appendChild(winButton);

		 // Lägg till event listener till knappen
	winButton.addEventListener('click', function() {
        document.body.removeChild(winOverlay);
    });
	winButton.addEventListener('click', () => {
		location.reload();
		return false;
	})
		// Lägg till overlay till body
	document.body.appendChild(winOverlay);
	}


	function createLoseOverlay(){
		const loseOverlay = document.createElement("div");
		const loseButton = document.createElement('button')
		const loseContent = document.createElement('p')

		loseOverlay.className = ('overlay')
		loseButton.className = ('new-game-button')
		loseButton.innerText = ('Nytt spel')
		loseContent.innerText = ('Tyvärr du förlorade! Det rätta order var: ' + randomValue)
		loseContent.className = ('content')

			// Lägg till content till overlay
		loseOverlay.appendChild(loseContent);
		loseContent.appendChild(loseButton);
		 // Lägg till event listener till button
		loseButton.addEventListener('click', function() {
        	document.body.removeChild(loseOverlay);
    	});
		loseButton.addEventListener('click', () => {
			location.reload();
			return false;
		})

			// Lägg till overlay till body
		document.body.appendChild(loseOverlay);
	}


// kod för att gissa bokstäver, spara rätt/fel

document.addEventListener('keydown', (event) => {
	let correctWordAsArray = randomValueArray;
	let guessedLetter = event.key;

	if (letters.includes(guessedLetter)) {
		// kolla om bokstaven finns i ordet
		// kolla så att man inte redan gissat på den
		if (correctWordAsArray.includes(guessedLetter) && !guessedLetters.includes(guessedLetter)) {
			// lägg in gissade bokstaven bland gissade bokstäver
			guessedLetters.push(guessedLetter);
			console.log(guessedLetters);

			// hitta rätt index i ordet för gissade bokstaven/bokstäverna
			// console.log(correctWordAsArray)
			for (let i = 0; i < correctWordAsArray.length; i++) {
				if (correctWordAsArray[i] === guessedLetter) {
					answer.splice(i, 1, correctWordAsArray[i]);
				}
			}
			renderLines();
			console.log(correctWordAsArray, answer);

			// när man vinner
			if (JSON.stringify(correctWordAsArray) == JSON.stringify(answer)) {
				createWinOverlay()
				// spara undan spelarens resultat i LS
				saveUserData(wrongLetters.length, true);
			}
		}
		else {
			
			// förebygger att samma fel bokstav går att gissa på flera gånger
			if (!correctWordAsArray.includes(guessedLetter) && !guessedLetters.includes(guessedLetter)) {
				guessedLetters.push(guessedLetter);
				wrongLetters.push(guessedLetter);
				showHangman()
				wrongLetterContainer.innerHTML = "";


				for (let y = 0; y < wrongLetters.length; y++) {
					
					renderWrongLetter(wrongLetters[y]);
					console.log(wrongLetters[y]);
				}

				// när man förlorar

				if (wrongLetters.length === 6) {
					createLoseOverlay()
					// spara undan spelarens resultat i LS
					saveUserData(wrongLetters.length, false);

				}
			}
		}
	}
})


// Initiera local storage med tom array 'users'



function saveUserData(score, won) {
	let users = JSON.parse(localStorage.getItem('users')  || '[]');
	let currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log('saveUserData1', users, currentUser);
	if (won) {
		currentUser.result = 'Vinst'
	} else {
		currentUser.result = 'Förlust'
	}
	currentUser.score = score;

	users.push(currentUser);
	console.log('saveUserData2', users);
	localStorage.setItem('users', JSON.stringify(users));
}