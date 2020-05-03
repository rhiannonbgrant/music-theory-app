const introBtn = document.querySelector("#intro button");
const introScreen = document.querySelector("#intro");
const playGame = document.querySelector("#play-game");

const playBtn = document.querySelector("#play-button");
const tone = document.querySelector(".tone");

const submitAnsBtn = document.querySelector("#answer");
const noteInput = document.querySelector("#note");
const semiTone = document.querySelectorAll(".sharpFlat");

const correctPg = document.querySelector("#correct");

let randomNote;
let playerGuess;
let playerResult;

class nextPg {
  constructor(nextPgBtn, currentPg, nextPg) {
    this.nextPgBtn = nextPgBtn;
    this.currentPg = currentPg;
    this.nextPg = nextPg;
  }
  goToNextPg() {
    this.currentPg.classList.add("fadeOut");
    this.nextPg.classList.add("fadeIn");
  }
  goToNextPgRemove() {
    this.currentPg.classList.add("fadeOut");
    this.currentPg.classList.remove("fadeOut");
    this.nextPg.classList.add("fadeIn");
  }
}

class playGamePage extends nextPg {
  constructor(nextPgBtn, currentPg, nextPg) {
    super(nextPgBtn, currentPg, nextPg);
  }

  generateNote() {
    let randomNumber = Math.floor(Math.random() * notes.length);
    randomNote = notes[randomNumber];
  }
}

const addInputValues = () => {
  let semiToneValue;
  let noteLowerCase = noteInput.value.toLowerCase();
  if (semiTone[0].checked === true) {
    semiToneValue = "s";
    if (randomNote.slice(0, 2) === noteLowerCase + semiToneValue) {
      toCorrectPg.goToNextPg();
    } else {
      console.log("you are incorrect");
    }
  }
  if (semiTone[1].checked === true) {
    if (randomNote.slice(0, 1) === noteLowerCase) {
      toCorrectPg.goToNextPg();
    } else {
      console.log("you are incorrect");
    }
  }
  if (semiTone[2].checked === true) {
    semiToneValue = "f";
    if (noteLowerCase === "d" && randomNote.slice(0, 1) === "c") {
      toCorrectPg.goToNextPg();
    } else if (noteLowerCase === "e" && randomNote.slice(0, 1) === "d") {
      toCorrectPg.goToNextPg();
    } else if (noteLowerCase === "g" && randomNote.slice(0, 1) === "f") {
      toCorrectPg.goToNextPg();
    } else if (noteLowerCase === "a" && randomNote.slice(0, 1) === "g") {
      toCorrectPg.goToNextPg();
    } else if (noteLowerCase === "b" && randomNote.slice(0, 1) === "a") {
      toCorrectPg.goToNextPg();
    } else {
      console.log("you are wrong");
    }
  }
  playerGuess = noteLowerCase + semiToneValue;
};

const notes = [
  "c4",
  "cs4",
  "d4",
  "ds4",
  "e4",
  "f4",
  "fs4",
  "g4",
  "gs4",
  "a4",
  "as4",
  "b4",
  "c5",
  "cs5",
  "d5",
  "ds5",
  "e5",
  "c5",
  "cs5",
  "d5",
  "ds5",
  "e5",
  "f5",
  "fs5",
  "g5",
  "gs5",
  "a5",
  "as5",
  "b5",
];

const toPlayGame = new playGamePage(introBtn, introScreen, playGame);
const toCorrectPg = new nextPg(submitAnsBtn, playGame, correctPg);

toPlayGame.nextPgBtn.addEventListener("click", function () {
  toPlayGame.generateNote();
  console.log(randomNote);
  toPlayGame.goToNextPg();
});

playBtn.addEventListener("click", (event) => {
  event.preventDefault();
  tone.src = `./sounds/${randomNote}-piano.wav`;
  tone.currentTime = 0;
  tone.play();
});

submitAnsBtn.addEventListener("click", addInputValues);
