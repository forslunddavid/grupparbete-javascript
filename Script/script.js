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




const randomWords = words
const guessWordText = document.querySelector('.guess-word-text')
const wrongLetter = document.querySelector('wrong-letter')

let randomValue = randomWords[Math.floor(Math.random() * randomWords.length)]
console.log(randomValue)




/* let element = document.createElement('p')
	element.innerText = randomValue
	element.className = '.random-words'
	guessWordText.append(element)
 */



	for (let lines = 0; lines <= randomValue.length; lines++) {
	
		const underLine = document.createElement('p')
		underLine.innerText =('_')
		underLine.className = ('.under-line')
		underLine.style.margin = "1em"; 
		underLine.style.display = "inline-block"; 
	
		guessWordText.append(underLine)
	}


/* function guessLetter(){

	for (let i=0; i<randomValue.length; i++){
	
		if (keyDown ==randomValue[i]){
			replaceLetters = function strReplace(){
				var myStr = (element);
				var newStr = myStr.replace(/a-z/gi, "_");
				guessWordText.append(newStr)
		}


	}

}

} */


// om keyDown == randomValue[i] replace undeLine[i]


	// console.log(randomValue)
 
/*  replaceLetters = function strReplace(){
        var myStr = (element);
        var newStr = myStr.replace(/a-z/gi, "_");
	}
 */




