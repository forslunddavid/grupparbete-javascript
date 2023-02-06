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
