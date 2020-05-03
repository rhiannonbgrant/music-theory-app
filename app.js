const introBtn = document.querySelector("#intro button");
const introScreen = document.querySelector("#intro");
const playGame = document.querySelector("#play-game");

const playBtn = document.querySelector("#play-button");
const tone = document.querySelector(".tone");

const submitAnsBtn = document.querySelector("#answer");
const noteInput = document.querySelector("#note");
const semiTone = document.querySelectorAll(".sharpFlat");

let randomNote;

class nextPg {
  constructor(nextPgBtn, currentPg, nextScreen) {
    this.nextPgBtn = nextPgBtn;
    this.currentPg = currentPg;
    this.nextScreen = nextScreen;
  }
  goToNextPg() {
    this.currentPg.classList.add("fadeOut");
    this.nextScreen.classList.add("fadeIn");
  }
}

class playGamePage extends nextPg {
  constructor(nextPgBtn, currentPg, nextScreen) {
    super(nextPgBtn, currentPg, nextScreen);
  }

  generateNote() {
    let randomNumber = Math.floor(Math.random() * notes.length);
    randomNote = notes[randomNumber];
  }
}

function compareValues() {
  let semiToneValue;
  if (semiTone[0].checked === true) {
    semiToneValue = "sharp";
  }
  if (semiTone[1].checked === true) {
    semiToneValue = "natural";
  }
  if (semiTone[2].checked === true) {
    semiToneValue = "flat";
  }
  console.log(noteInput.value.toLowerCase() + semiToneValue);
}

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

submitAnsBtn.addEventListener("click", compareValues);
