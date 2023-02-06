import { words } from "./ord.js"

// import wordList from './script/svenska-ord.json" assert { type: "json" };

// Overlay win

// varför funkar det bara i body?

document.body.onload = addElement;

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
}

// const randomWords2 = wordList


const randomWords = words
const guessWord = document.querySelector('.guess-word')
function randomValue(randomWords) {
	return randomWords[Math.floor(Math.random() * randomWords.length)]
}

// console.log(randomValue(randomWords))


let answer = randomValue(randomWords)

console.log(answer)

	let element = document.createElement('p')

	element.innerText = answer
	element.className = 'random-words'
	guessWord.append(element)

	console.log(element)

	function strReplace(){
        var myStr = (element);
        var newStr = myStr.replace(/a-z/gi, "_");
	}

// skriva ut console.log som <p>-tag i html-filen

// document.addEventListener('random-words', function(event) {
// 	let randomValue = randomWords.value
// 	let element = document.createElement('p')
// 	element.innerText = randomValue
// 	element.className = 'random-words'
// 	guessWord.append(element)

// 	console.log(element.innerText)
// });

// document.addEventListener('random-words', function(event) {

// for (let lines = 0; lines <= randomWords.length; lines++) {

// 	const underLine = document.createElement('p')
// 	underLine.style.width = "4em";
// 	underLine.style.height = "0.3em";
// 	underLine.style.background = "#000000";
// 	underLine.style.margin = "2em";
// 	underLine.style.display = "inline-block";

// 	guessWord.append(underLine)
// }
// })