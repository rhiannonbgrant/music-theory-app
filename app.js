const introBtn = document.querySelector("#intro button");
const introScreen = document.querySelector("#intro");
const playGame = document.querySelector("#play-game");

const playBtn = document.querySelector("#play-button");
const tone = document.querySelector(".tone");

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
let randomNote;

playBtn.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * notes.length);
    randomNote = notes[randomNumber];
    console.log(randomNote);
    return randomNote;
  },
  { once: true }
);

playBtn.addEventListener("click", (event, randomNote) => {
  event.preventDefault();
  tone.src = `./sounds/${randomNote}-piano.wav`;
  console.log(tone.src);
  console.log(randomNote);
  tone.currentTime = 0;
  tone.play();
});

const toPlayGame = new nextPg(introBtn, introScreen, playGame);

toPlayGame.nextPgBtn.addEventListener("click", function () {
  toPlayGame.goToNextPg();
});
