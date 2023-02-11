
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