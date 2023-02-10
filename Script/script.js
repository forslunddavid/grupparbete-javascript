import { words } from "./ord.js"
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




let wrongLetters = [];
const randomWords = words
const guessWord = document.querySelector('.guess-word')
// console.log(guessWord);
const wrongLetterContainer = document.querySelector('.wrong-letter')
// console.log(wrongLetterContainer)
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö'];
let guessedLetters = [];

let randomValue = randomWords[Math.floor(Math.random() * randomWords.length)]
console.log(randomValue)
const randomValueArray = [...randomValue]
const answer = []
const wrongAnswer = []

console.log(randomValueArray)
console.log(wrongAnswer)

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
		currentUser.result = 'Förlorade'
	}
	currentUser.score = score;

	users.push(currentUser);
	localStorage.setItem('users', JSON.stringify(users));
}


makeWrongLetterArray()

function makeWrongLetterArray() {
	for (let j = 0; j < 5; j++) {
		wrongAnswer.push("")
	}
}

function renderWrongLetter(letter) {
	let wrongLetter = document.createElement('p')
	wrongLetter.innerText = (letter)
	wrongLetter.className = ('wrong-letter-text')

	wrongLetterContainer.insertAdjacentElement('afterbegin', wrongLetter);
	// console.log(wrongLetter)
}

makeAnswerArray();

function makeAnswerArray() {
	for (let i = 0; i < randomValueArray.length; i++) {
		answer.push("");
	}
	// console.log(answer);
}


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

			console.log(correctWordAsArray)
			for (let i = 0; i < correctWordAsArray.length; i++) {
				if (correctWordAsArray[i] === guessedLetter) {
					answer.splice(i, 1, correctWordAsArray[i]);
				}
			}
			renderLines();
			console.log(correctWordAsArray, answer);

			if (JSON.stringify(correctWordAsArray) == JSON.stringify(answer)) {
				alert('du vann');
				// spara undan spelarens resultat i LS
				saveUserData(5, true);
			}
		}
		else {

			// förebygger att samma fel bokstav går att gissa på flera gånger
			if (!guessedLetters.includes(guessedLetter)) {
				guessedLetters.push(guessedLetter);
				wrongLetters.push(guessedLetter);
				wrongLetterContainer.innerHTML = "";
				for (let y = 0; y < wrongLetters.length; y++) {
					console.log(wrongLetters[y]);
					wrongAnswer.unshift(guessedLetter);
					renderWrongLetter(wrongLetters[y]);
				}
				if (wrongLetters.length === 5) {
					alert('game over');
					// spara undan spelarens resultat i LS
					saveUserData(5, false);
				}
			}
		}

	}




	/* if (answer = correctWordAsArray){
		//end game, you win!

	} */
})









