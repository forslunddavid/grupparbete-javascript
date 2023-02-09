console.log('hello world')

let h1 = document.querySelectorAll('h1')
let button = document.querySelector('button')
let buttonClicks = document.querySelector('.button-clicks')
let toggleButton = document.querySelector ('#toggle-button')
console.log( 'h1:' , h1)

let clicks = 0
let isOn = true

button.addEventListener('click', click =>{
    console.log('du klickade på knappen')
	// console.log(click)
	clicks = clicks + 1
	buttonClicks.innerText= 'Antal klick: ' + clicks
	// buttonClicks.innerHTML = '<a href="#> klicka mig </a>'


})

toggleButton.addEventListener('click', () => {
	isOn = !isOn
	if(isOn) {
		toggleButton.innerText = 'On'
    } else {
		toggleButton.innerText = 'Off'
	}
})


// kodidéer för storage:


// gör en funktion som lagrar flera data i objekt:

function store(){
	let name = document.getElementById('id-för input').value
	let resultat = 'resultatet från spelomgången'

	const spelare ={
	namn: namn
	resultat: resultat
	}

window.localStorage.setItem(spelare, JSON.stringify(spelare))
}

// funktion för att hämta från storage, inte helt genomarbetad

/* function retrieveStoredItems(){
	document.addEventListener ????

	let resultatLista = window.localStorage.getItem(key)
	let paragraf = document.createElement('p')
	paragraf.innerText = resultatLista
	rätt HTML-element.appendChild(paragraf)

} */



// exempel på att lagra flera spelare:

/* const localStorageContent = localStorage.getItem('names')

let names;
if(localStorageContent ===null){
	names = []
} else{
	names = JSON.parse(localStorageContent);
}

names.push('james')

localStorage.setItem('names', JSON.stringify(names)) */


// också lagra flera spelare, fast från ett inputfält (mest relevant)

function save(){
	let newData = ' ' + document.getElementById('player-name').value 

	if (localStorage.getItem('data') ==null){
		localStorage.setItem('data', '[]')
	}

	let earlierData  = JSON.parse(localStorage.getItem('data'))
	earlierData.push(newData)

	localStorage.setItem('data', JSON.stringify(earlierData))
}

// funktion för att synliggöra datan på skärmen, blir dock en array, behöver omvandlas till en ol?

 function viewResult(){
	if(localStorage.getItem('data') != null){
		document.getElementById(id-för-mottagnade-element).innerHTML =JSON.parse(localStorage.getItem('data'))
	}
} 

// kombinera översta funktionen med den nedersta, så man skapar ett objekt som funktionen tar emot istället för input-värde 


function save(){
	let name = document.getElementById('id-för input').value
	let resultat = 'resultatet från spelomgången'

	const NewPlayerData ={
	namn: namn,
	resultat: resultat,
	}


	if (localStorage.getItem('playerData') ==null){
		localStorage.setItem('playerData', '[]')
	}

	let earlierData  = JSON.parse(localStorage.getItem('data'))
	earlierData.push(newPlayerData)

	localStorage.setItem('data', JSON.stringify(earlierData))
}



function viewResult(){
	if(localStorage.getItem('data') != null){
		document.getElementById(id-för-mottagnade-element).innerHTML =JSON.parse(localStorage.getItem('data'))
	}
} 