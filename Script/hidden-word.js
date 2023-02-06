import { words } from "./ord.js"

var lives = 6;
var myLetter;
var letter;
var wordChoice;
var hiddenWord;
var i;
var enter;

function checkCharacter(n) {
	for(i = 0; i < wordChoice.length; i++){
    	console.log(wordChoice[i].toLowerCase() + "==" + n);
    	if(wordChoice[i].toLowerCase() == n.toLowerCase()){
    		hiddenWord = setCharAt(hiddenWord,i,n);
    	}
	}
console.log("[" + hiddenWord + "]");
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function selectedWord() {
	var number = Math.round(Math.random() * (words.length - 1));
	wordChoice = words[number];
	hiddenWord = wordChoice.replace(/./gi,"-");
	console.log(wordChoice + "[" + hiddenWord + "]");
}

document.onkeyup = function(event) {
    var myLetter = event.key;
    if(myLetter === "Enter"){
        if(lives == 0){
        	selectedWord();
        	lives = 6;
        }else{
        	lives--;
        }
    }
    console.log(myLetter);
    checkCharacter(myLetter);
}

//Select a random word at start
selectedWord();