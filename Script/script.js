import { words } from "./ord.js"

const randomWords = words

function randomValue(randomWords) {
	return randomWords[Math.floor(Math.random() * randomWords.length)]
}

console.log(randomValue(randomWords))