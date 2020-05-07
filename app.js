const introBtn = document.querySelector("#intro button");
const introScreen = document.querySelector("#intro");
const playGame = document.querySelector("#play-game");

const playBtn = document.querySelector("#play-button");
const tone = document.querySelector(".tone");

const submitAnsBtn = document.querySelector("#answer");
const noteInput = document.querySelector("#note");
const semiTone = document.querySelectorAll(".sharpFlat");

const correctPg = document.querySelector("#correct");

const playAgainCorrectBtn = document.querySelector("#play-again1");
const playAgainIncorrectBtn = document.querySelector("#play-again2");
const submitDiv = document.querySelector("#submit-div");

const seeAnswerDiv = document.querySelector("#to-see-answer");
const seeAnswerPg = document.querySelector("#see-answer");
const seeAnswerBtn = document.querySelector("#to-see-answer-button");
const answerHere = document.querySelector("#see-answer span");

const sharp = document.querySelector("#sharp label");
const flat = document.querySelector("#flat label");

let randomNote;
let playerGuess;
let playerResult;

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

//Page transition class
class nextPg {
  constructor(nextPgBtn, currentPg, nextPg) {
    this.nextPgBtn = nextPgBtn;
    this.currentPg = currentPg;
    this.nextPg = nextPg;
  }
  goToNextPg() {
    this.currentPg.classList.toggle("fadeIn");
    this.nextPg.classList.toggle("fadeIn");
  }
  generateNote() {
    let randomNumber = Math.floor(Math.random() * notes.length);
    randomNote = notes[randomNumber];
  }
}

//Generate Text telling them they are Incorrect and give them the option to see the answer
const incorrect = () => {
  seeAnswerDiv.classList.remove("fadeOut");
  seeAnswerBtn.addEventListener("click", seeCorrectAnswer);
};

//Pages transitions that lead to play game page
const playGamePg = () => {
  toPlayGame.generateNote();
  console.log(randomNote);
  toPlayGame.goToNextPg();
};

const playGameAgainFromCorrect = () => {
  toPlayAgainCorrectPg.generateNote();
  console.log(randomNote);
  toPlayAgainCorrectPg.goToNextPg();
  noteInput.value = "";
};

const playGameAgainFromIncorrect = () => {
  toPlayAgainIncorrectPg.generateNote();
  console.log(randomNote);
  toPlayAgainIncorrectPg.goToNextPg();
  seeAnswerDiv.classList.add("fadeOut");
  noteInput.value = "";
};

//Checks the user Input to see if it correct or not and directs the user to different pg based on the result
const checkPlayerInput = () => {
  let semiToneValue;
  let noteLowerCase = noteInput.value.toLowerCase();
  if (semiTone[0].checked === true) {
    semiToneValue = "s";
    if (randomNote.slice(0, 2) === noteLowerCase + semiToneValue) {
      toCorrectPg.goToNextPg();
    } else {
      incorrect();
    }
  }
  if (semiTone[1].checked === true) {
    if (
      randomNote.slice(0, 1) === noteLowerCase &&
      randomNote.slice(1, 2) !== "s"
    ) {
      toCorrectPg.goToNextPg();
    } else {
      incorrect();
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
      incorrect();
    }
  }
  playerGuess = noteLowerCase + semiToneValue;
};

//Generates the correct answer in some text
const seeCorrectAnswer = () => {
  toSeeAnswerPg.goToNextPg();
  let semiToneValue;
  let otherNoteName;
  let correctNote = randomNote.slice(0, 1);
  let correctUpperCase = correctNote.toUpperCase();
  if (randomNote.slice(1, 2) === "s") {
    semiToneValue = "#";
    if (randomNote.slice(0, 2) === "cs") {
      otherNoteName = ", also known as a D" + flat.innerText;
    } else if (randomNote.slice(0, 2) === "ds") {
      otherNoteName = ", also known as a E" + flat.innerText;
    } else if (randomNote.slice(0, 2) === "fs") {
      otherNoteName = ", also known as a G" + flat.innerText;
    } else if (randomNote.slice(0, 2) === "gs") {
      otherNoteName = ", also known as a A" + flat.innerText;
    } else if (randomNote.slice(0, 2) === "as") {
      otherNoteName = ", also known as a B" + flat.innerText;
    } else {
      otherNoteName = "";
    }
  } else {
    semiToneValue = "";
    otherNoteName = "";
  }
  answerHere.innerText = correctUpperCase + semiToneValue + otherNoteName;
};

//declaring different page transitions
const toPlayGame = new nextPg(introBtn, introScreen, playGame);
const toCorrectPg = new nextPg(submitAnsBtn, playGame, correctPg);
const toPlayAgainCorrectPg = new nextPg(
  playAgainCorrectBtn,
  correctPg,
  playGame
);
const toSeeAnswerPg = new nextPg(seeAnswerBtn, playGame, seeAnswerPg);
const toPlayAgainIncorrectPg = new nextPg(
  playAgainIncorrectBtn,
  seeAnswerPg,
  playGame
);

//Eventlisteners
playBtn.addEventListener("click", (event) => {
  event.preventDefault();
  tone.src = `./sounds/${randomNote}-piano.wav`;
  tone.currentTime = 0;
  tone.play();
});
toPlayGame.nextPgBtn.addEventListener("click", playGamePg);
toPlayAgainCorrectPg.nextPgBtn.addEventListener(
  "click",
  playGameAgainFromCorrect
);
submitAnsBtn.addEventListener("click", checkPlayerInput);
toPlayAgainIncorrectPg.nextPgBtn.addEventListener(
  "click",
  playGameAgainFromIncorrect
);
