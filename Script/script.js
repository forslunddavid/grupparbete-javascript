


const word = document.getElementById('word');
const incorrect = document.getElementById('incorrect');
const incorrectLettersEl = document.querySelector('#incorrect p');
const backdrop = document.getElementById('backdrop');
const finalMsg = document.getElementById('final-msg');
const msgInfo = document.getElementById('msg-info');
const playBtn = document.getElementById('play');
const indication = document.getElementById('indication');
const bodyParts = document.getElementsByClassName('body-part');

// List of words
const wordList = [
  "-aktig",
  "-artad",
  "-bent",
  "-bladig",
  "-blodig",
  "-bo",
  "-bröstad",
  "-cylindrig",
  "-däckare",
  "-döme",
  "-enlig",
  "-faldig",
  "-faldiga",
  "-falt",
  "-filig",
  "-fotad",
  "-föring",
  "-gradig",
  "-halsad",
  "-haltig",
  "-havare",
  "-hyad",
  "-hänt",
  "-hövdad",
  "-klassare",
  "-klassig",
  "-ledes",
  "-lek",
  "-lemmad",
  "-lös",
  "-makare",
  "-makeri",
  "-maskig",
  "-näst",
  "-procentig",
  "-radig",
  "-ryggad",
  "-ryggig",
  "-sidig",
  "-siffrig",
  "-sitsig",
  "-skalig",
  "-slagare",
  "-spaltig",
  "-stammig",
  "-stavig",
  "-stämmig",
  "-synt",
  "-tals",
  "-tida",
  "-tonig",
  "-tonnare",
  "-tummare",
  "-tungad",
  "-varo",
  "-vis",
  "-växlad",
  "-årig",
  "-ögd",
  "a",
  "à",
  "a cappella",
  "a conto",
  "a conto-betalning",
  "à la bonne heure",
  "à la carte",
  "a priori",
  "à quatre mains",
  "a vista",
  "A-aktie",
  "A-avdrag",
  "A-barn",
  "A-dur",
  "a-kassa",
  "a-kasseersättning",
  "A-lag",
  "A-lagare",
  "A-lagsmatch",
  "A-lagsspelare",
  "a-ljud",
  "a-moll",
  "à-pris",
  "A-skatt",
  "A-språk",
  "a-sträng",
  "A-vitamin",
  "abakus",
  "abandon",
  "abbé",
  "abbedissa",
  "abborre",
  "abborrgrund",
  "abborrpinne",
  "abbot",
  "abbotsstift",
  "abbreviatur",
  "abc",
  "abc-bok",
  "abc-stridsmedel",
  "Abchazien",
  "abchazier",
  "abchazisk",
  "abchaziska",
  "abderitisk",
  "abdikation",
  "abdikera",
  "abdomen",
  "abdominal",
  "aber",
  "aberration",
  "Abessinien",
  "abessinier",
  "abessinsk",
  "abessinska",
  "abilitet",
  "abiturient",
  "abiturientklass",
  "ablation",
  "ablativ",
  "abnorm",
  "abnormitet",
  "abnormtillstånd",
  "abolition",
  "abolitionism",
  "abonnemang",
  "abonnemangsavgift",
  "abonnemangskonsert",
  "abonnemangssystem",
  "abonnemangsvillkor",
  "abonnent",
  "abonnentförteckning",
  "abonnentnummer",
  "abonnera",
  "aborigin",
  "aboriginsk",
  "abort",
];

// document.getElementById("myButton").onclick =  function(){
//   var myName = document.getElementById("myText").value;
//   console.log("Hello", myName);
// }

// var myName = window.prompt("What is your name?")
// console.log("Hello", myName);



// Ord som är valt att spela
let selectedWord = null;
// Lagrar antalet felaktigt skrivna bokstäver
let incorrectCount = 0;
// Rätt bokstäver som skrivits av spelaren
const correctLetters = [];
// Felaktiga bokstäver har skrivits av spelaren
const incorrectLetters = [];

// Välj ett ord slumpmässigt från ordlistan och initiera i DOM
function initializeWord() {
  selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  const noOfLetters = selectedWord.length;
  for (let i = 0; i < noOfLetters; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('letter');
    word.append(listItem);
  }
}

// Visar en indikation som glider från botten
function displayIndication() {
  indication.classList.add('visible');

  setTimeout(() => {
    indication.classList.remove('visible');
  }, 2400);
}

// Uppdatera siffran när felaktiga bokstäver har skrivits
function updateFigure() {
  try {
    bodyParts[incorrectCount].style.display = 'block';
    incorrectCount++;
  } catch (error) {}
}

// När spelaren vinner
function successState() {
  setTimeout(() => {
    backdrop.classList.add('visible');
    finalMsg.classList.add('visible');
    msgInfo.textContent = 'Hurrah! You won.';
  }, 400);
}

// När spelaren förlorar
function failureState() {
  setTimeout(() => {
    backdrop.classList.add('visible');
    finalMsg.classList.add('visible');
    msgInfo.textContent = `Oops! You lost. The right word is "${selectedWord}"`;
  }, 400);
}

// Kontrollera om den inskrivna nyckeln är en del av det valda ordet och uppdatera i DOM vid behov
function check(ev) {
  const letterElements = document.querySelectorAll('.word .letter');
  const character = ev.key;

  // Hantera tangentbordshändelser
  if (
    !backdrop.classList.contains('visible') &&
    !indication.classList.contains('visible') &&
    ev.keyCode >= 65 &&
    ev.keyCode <= 90
  ) {
    if (selectedWord.includes(character)) {
      if (correctLetters.includes(character)) {
        displayIndication();
      } else {
        correctLetters.push(character);
        const indexes = [];
        [...selectedWord].forEach((value, index) => {
          if (value === character) {
            indexes.push(index);
          }
        });
        indexes.forEach((value) => {
          letterElements[value].textContent = character;
        });
      }
    } else {
      if (incorrectLetters.includes(character)) {
        displayIndication();
      } else {
        incorrectLetters.push(character);
        if (!incorrect.classList.contains('visible')) {
          incorrect.classList.add('visible');
        }
        incorrectLettersEl.textContent = `${incorrectLetters.join(', ')}`;
        updateFigure();
      }
    }
  }

  // Skapa ett ord från alla bokstavsobjekt
  let formedWord = '';
  letterElements.forEach((value) => {
    formedWord += value.textContent;
  });

  // Kontrollera om det skapade ordet är korrekt
  if (formedWord === selectedWord) {
    successState();
  }

  // Kontrollera om mannen var hängd
  if (incorrectCount >= 6) {
    failureState();
  }
}

// Återställ alla variabler och starta ett nytt spel
function startNewGame() {
  selectedWord = null;
  incorrectCount = 0;
  correctLetters.splice(0);
  incorrectLetters.splice(0);
  word.innerHTML = '';
  Array.from(bodyParts).forEach((value) => {
    value.style.display = 'none';
  });
  incorrect.classList.remove('visible');
  backdrop.classList.remove('visible');
  finalMsg.classList.remove('visible');
  initializeWord();
}

// Starta spelet
initializeWord();

// Event Listeners
window.addEventListener('keyup', check);
playBtn.addEventListener('click', startNewGame);
