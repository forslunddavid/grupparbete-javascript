import { words } from "./ord.js"

// buttons få dem att tömma och starta nytt spel testat function på linje 80, men den fungerar ej. toggla win/loose overlaysen med button click?


// hämta info från LS och skriva ut den i statistik och sortera
window.addEventListener('click',function(){

// variabler för själva spelet
const randomWords = words
const guessWord = document.querySelector('.guess-word')
const wrongLetterContainer = document.querySelector('.wrong-letter')
const hangmanParts = document.querySelectorAll(".hangman-part");
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö'];
const randomValue = randomWords[Math.floor(Math.random() * randomWords.length)]
console.log(randomValue)
const randomValueArray = [...randomValue]
const guessedLetters = [];
const wrongLetters = [];
const answer = []


console.log(randomValueArray)



///// funktioner /////

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

// Skapa en Array med rätt gissade bokstäver i
makeAnswerArray();

function makeAnswerArray() {
	for (let i = 0; i < randomValueArray.length; i++) {
		answer.push("");
	}
	// console.log(answer);
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
	  if (index -1 < wrongGuess) {
		part.style.display = "block";
	  }
	  else {
		part.style.display = "none";
	  }
	});
  }

 function emtyArray(){
	return wrongLetters.splice(0, wrongLetters.length)
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
	
		// Append the content to the overlay
		winOverlay.appendChild(winContent);
		winContent.appendChild(winButton);
	
		// Append the overlay to the body
		document.body.appendChild(winOverlay);
	}
	
		
	function createLooseOverlay(){
		const looseOverlay = document.createElement("div");
		const looseButton = document.createElement('button')
		const looseContent = document.createElement('p')
	
		looseOverlay.className = ('overlay')
		looseButton.className = ('new-game-button')
		looseButton.innerText = ('Nytt spel')
		looseContent.innerText = ('Tyvärr du förlorade! Det rätta order var: ' + randomValue)
		looseContent.className = ('content')
	
			// Append the content to the overlay
			looseOverlay.appendChild(looseContent);
			looseContent.appendChild(looseButton);
		
		
			// Append the overlay to the body
			document.body.appendChild(looseOverlay);
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
			// console.log(guessedLetters);

			// hitta rätt index i ordet för gissade bokstaven/bokstäverna
			// console.log(correctWordAsArray)
			for (let i = 0; i < correctWordAsArray.length; i++) {
				if (correctWordAsArray[i] === guessedLetter) {
					answer.splice(i, 1, correctWordAsArray[i]);
				}
			}
			renderLines();
			// console.log(correctWordAsArray, answer);

			// när man vinner
			if (JSON.stringify(correctWordAsArray) == JSON.stringify(answer)) {
				createWinOverlay()
				// spara undan spelarens resultat i LS
				saveUserData(wrongLetters.length, true);
			}
		}
		else {
			showHangman()
			// förebygger att samma fel bokstav går att gissa på flera gånger
			if (!guessedLetters.includes(guessedLetter)) {
				guessedLetters.push(guessedLetter);
				wrongLetters.push(guessedLetter);
				wrongLetterContainer.innerHTML = "";
		

				for (let y = 0; y < wrongLetters.length; y++) {
					console.log(wrongLetters[y]);
					renderWrongLetter(wrongLetters[y]);
				}
				
				// när man förlorar
				
				if (wrongLetters.length === 6) {
					createLooseOverlay()
					// spara undan spelarens resultat i LS
					saveUserData(wrongLetters.length, false);
					emtyArray()
				}
			}
		}
	}
})
})

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















// import { storeName } from "./local-storage.js";


// import wordList from './script/svenska-ord.json" assert { type: "json" };

// Overlay win

// varför funkar det bara i body?

/* document.body.onload = addElement;

function addElement() {
  // create a new div element
	const newDiv = document.createElement("div");

  // and give it some content
	const newContent = document.createTextNode("Grattis, du vann!");

  // add the text node to the newly created div
	newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
	const currentDiv = document.getElementsByClassName("overlay-win");
	document.body.insertBefore(newDiv, currentDiv);
}

// Overlay lose

document.body.onload = addElement2;

function addElement2() {
  // create a new div element
	const newDiv = document.createElement("div");

  // and give it some content
	const newContent = document.createTextNode("Du förlorade");

  // add the text node to the newly created div
	newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
	const currentDiv = document.getElementsByClassName("overlay-lose");
	document.body.insertBefore(newDiv, currentDiv);
}

// overlay if sats
// if won = true
function on() {
	document.getElementsByClassName("overlay-win").style.display = "block";
}
// else
function off() {
	document.getElementsByClassName("overlay-lose").style.display = "block";
} */



// gör RandomValue till egen variabel , behövs?
/* let element = document.createElement('p')
	element.innerText = randomValue
	element.className = '.random-words'
	guessWordText.append(element)
 */