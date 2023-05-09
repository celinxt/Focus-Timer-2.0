import { Timer } from "./timer.js";
import { Sounds } from "./sounds.js";

const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const colons = document.querySelector("#colons");

const btnPlay = document.querySelector("#btn-play");
const btnPlayLight = document.querySelector(".play-light");
const btnPlayDark = document.querySelector(".play-dark");

const btnPause = document.querySelector("#btn-pause");
const btnPauseLight = document.querySelector(".pause-light");
const btnPauseDark = document.querySelector(".pause-dark");

const btnStop = document.querySelector("#btn-stop");
const btnStopLight = document.querySelector(".stop-light");
const btnStopDark = document.querySelector(".stop-dark");

const btnAddMin = document.querySelector("#btn-add-min");
const btnAddLight = document.querySelector(".add-light");
const btnAddDark = document.querySelector(".add-dark");

const btnRemoveMin = document.querySelector("#btn-remove-min");
const btnRemoveLight = document.querySelector(".remove-light");
const btnRemoveDark = document.querySelector(".remove-dark");

// Forest
const btnForest = document.querySelector("#btn-forest");
const forestLight = document.querySelector("#forest");
const btnForestUnpress = document.querySelector(".forest-unpress");
const btnForestPress = document.querySelector(".forest-press");

const btnForestDark = document.querySelector("#btn-forest-dark");
const forestDark = document.querySelector("#forest-dark");
const btnForestDarkUnpress = document.querySelector(".forest-dark-unpress");
const btnForestDarkPress = document.querySelector(".forest-dark-press");

// Rain
const btnRain = document.querySelector("#btn-rain");
const rainLight = document.querySelector("#rain");
const btnRainUnpress = document.querySelector(".rain-unpress");
const btnRainPress = document.querySelector(".rain-press");

const btnRainDark = document.querySelector("#btn-rain-dark");
const rainDark = document.querySelector("#rain-dark");
const btnRainDarkUnpress = document.querySelector(".rain-dark-unpress");
const btnRainDarkPress = document.querySelector(".rain-dark-press");

// Coffee Shop
const btnCoffeeShop = document.querySelector("#btn-coffee");
const coffeeLight = document.querySelector("#coffee");
const btnCoffeeUnpress = document.querySelector(".coffee-unpress");
const btnCoffeePress = document.querySelector(".coffee-press");

const btnCoffeeDark = document.querySelector("#btn-coffee-dark");
const coffeeDark = document.querySelector("#coffee-dark");
const btnCoffeeDarkUnpress = document.querySelector(".coffee-dark-unpress");
const btnCoffeeDarkPress = document.querySelector(".coffee-dark-press");

// Fireplace
const btnFireplace = document.querySelector("#btn-fire");
const fireLight = document.querySelector("#fire");
const btnFireUnpress = document.querySelector(".fire-unpress");
const btnFirePress = document.querySelector(".fire-press");

const btnFireDark = document.querySelector("#btn-fire-dark");
const fireDark = document.querySelector("#fire-dark");
const btnFireDarkUnpress = document.querySelector(".fire-dark-unpress");
const btnFireDarkPress = document.querySelector(".fire-dark-press");

const dark = document.querySelector("#dark-mode");
const light = document.querySelector("#light-mode");

const timer = Timer({
  minutes,
  seconds,
  btnPlay,
  btnPause,
});

const sounds = Sounds();

export const displaySwitch = () => {
  btnPlay.classList.toggle("hide");
  btnPause.classList.toggle("hide");
};

// Controls
btnPlay.addEventListener("click", () => {
  displaySwitch();
  timer.countdown();
  sounds.btnPress();
});

btnPause.addEventListener("click", () => {
  displaySwitch();
  timer.hold();
  sounds.btnPress();
});

btnStop.addEventListener("click", () => {
  displaySwitch();
  timer.hold();
  timer.reset();
  sounds.btnPress();
});

btnAddMin.addEventListener("click", () => {
  timer.add();
  sounds.btnPress();
});

btnRemoveMin.addEventListener("click", () => {
  timer.remove();
  sounds.btnPress();
});

// Sound Buttons
btnForest.addEventListener("click", () => {
  if (btnForest.classList.contains("audio-on")) {
    btnForest.classList.remove("audio-on");
    btnForestPress.classList.add("hide");
    btnForestUnpress.classList.remove("hide");

    sounds.btnForest.pause();
    return;
  } else {
    btnForest.classList.add("audio-on");
    btnForestPress.classList.remove("hide");
    btnForestUnpress.classList.add("hide");

    sounds.btnForest.play();
  }
});

btnForestDark.addEventListener("click", () => {
  if (btnForestDark.classList.contains("audio-on")) {
    btnForestDark.classList.remove("audio-on");
    btnForestDarkPress.classList.add("hide");
    btnForestDarkUnpress.classList.remove("hide");

    sounds.btnForest.pause();
    return;
  } else {
    btnForestDark.classList.add("audio-on");
    btnForestDarkPress.classList.remove("hide");
    btnForestDarkUnpress.classList.add("hide");

    sounds.btnForest.play();
  }
});

btnRain.addEventListener("click", () => {
  if (btnRain.classList.contains("audio-on")) {
    btnRain.classList.remove("audio-on");
    btnRainPress.classList.add("hide");
    btnRainUnpress.classList.remove("hide");

    sounds.btnRain.pause();
    return;
  } else {
    btnRain.classList.add("audio-on");
    btnRainPress.classList.remove("hide");
    btnRainUnpress.classList.add("hide");

    sounds.btnRain.play();
  }
});

btnRainDark.addEventListener("click", () => {
  if (btnRainDark.classList.contains("audio-on")) {
    btnRainDark.classList.remove("audio-on");
    btnRainDarkPress.classList.add("hide");
    btnRainDarkUnpress.classList.remove("hide");

    sounds.btnRain.pause();
    return;
  } else {
    btnRainDark.classList.add("audio-on");
    btnRainDarkPress.classList.remove("hide");
    btnRainDarkUnpress.classList.add("hide");

    sounds.btnRain.play();
  }
});

btnCoffeeShop.addEventListener("click", () => {
  if (btnCoffeeShop.classList.contains("audio-on")) {
    btnCoffeeShop.classList.remove("audio-on");
    btnCoffeePress.classList.add("hide");
    btnCoffeeUnpress.classList.remove("hide");

    sounds.btnCoffeeShop.pause();
    return;
  } else {
    btnCoffeeShop.classList.add("audio-on");
    btnCoffeePress.classList.remove("hide");
    btnCoffeeUnpress.classList.add("hide");

    sounds.btnCoffeeShop.play();
  }
});

btnCoffeeDark.addEventListener("click", () => {
  if (btnCoffeeDark.classList.contains("audio-on")) {
    btnCoffeeDark.classList.remove("audio-on");
    btnCoffeeDarkPress.classList.add("hide");
    btnCoffeeDarkUnpress.classList.remove("hide");

    sounds.btnCoffeeShop.pause();
    return;
  } else {
    btnCoffeeDark.classList.add("audio-on");
    btnCoffeeDarkPress.classList.remove("hide");
    btnCoffeeDarkUnpress.classList.add("hide");

    sounds.btnCoffeeShop.play();
  }
});

btnFireplace.addEventListener("click", () => {
  if (btnFireplace.classList.contains("audio-on")) {
    btnFireplace.classList.remove("audio-on");
    btnFirePress.classList.add("hide");
    btnFireUnpress.classList.remove("hide");

    sounds.btnFireplace.pause();
    return;
  } else {
    btnFireplace.classList.add("audio-on");
    btnFirePress.classList.remove("hide");
    btnFireUnpress.classList.add("hide");

    sounds.btnFireplace.play();
  }
});

btnFireDark.addEventListener("click", () => {
  if (btnFireDark.classList.contains("audio-on")) {
    btnFireDark.classList.remove("audio-on");
    btnFireDarkPress.classList.add("hide");
    btnFireDarkUnpress.classList.remove("hide");

    sounds.btnFireplace.pause();
    return;
  } else {
    btnFireDark.classList.add("audio-on");
    btnFireDarkPress.classList.remove("hide");
    btnFireDarkUnpress.classList.add("hide");

    sounds.btnFireplace.play();
  }
});

// Light and Dark theme
dark.addEventListener("click", () => {
  dark.classList.toggle("hide");
  light.classList.toggle("hide");

  btnPlayDark.classList.remove("hide");
  btnPlayLight.classList.add("hide");

  btnPauseDark.classList.remove("hide");
  btnPauseLight.classList.add("hide");

  btnStopDark.classList.remove("hide");
  btnStopLight.classList.add("hide");

  btnAddDark.classList.remove("hide");
  btnAddLight.classList.add("hide");

  btnRemoveDark.classList.remove("hide");
  btnRemoveLight.classList.add("hide");

  document.body.style.background = "#000";
  minutes.style.color = "#fff";
  colons.style.color = "#fff";
  seconds.style.color = "#fff";

  forestDark.classList.remove("hide");
  forestLight.classList.add("hide");

  rainDark.classList.remove("hide");
  rainLight.classList.add("hide");

  coffeeDark.classList.remove("hide");
  coffeeLight.classList.add("hide");

  fireDark.classList.remove("hide");
  fireLight.classList.add("hide");

  btnForestPress.classList.add("hide");
  sounds.btnForest.pause();

  btnRainPress.classList.add("hide");
  sounds.btnRain.pause();

  btnCoffeePress.classList.add("hide");
  sounds.btnCoffeeShop.pause();

  btnFirePress.classList.add("hide");
  sounds.btnFireplace.pause();
});

light.addEventListener("click", () => {
  dark.classList.toggle("hide");
  light.classList.toggle("hide");

  btnPlayDark.classList.add("hide");
  btnPlayLight.classList.remove("hide");

  btnPauseDark.classList.add("hide");
  btnPauseLight.classList.remove("hide");

  btnStopDark.classList.add("hide");
  btnStopLight.classList.remove("hide");

  btnAddDark.classList.add("hide");
  btnAddLight.classList.remove("hide");

  btnRemoveDark.classList.add("hide");
  btnRemoveLight.classList.remove("hide");

  document.body.style.background = "#fff";
  minutes.style.color = "#000";
  colons.style.color = "#000";
  seconds.style.color = "#000";

  forestDark.classList.add("hide");
  forestLight.classList.remove("hide");

  rainDark.classList.add("hide");
  rainLight.classList.remove("hide");

  coffeeDark.classList.add("hide");
  coffeeLight.classList.remove("hide");

  fireDark.classList.add("hide");
  fireLight.classList.remove("hide");

  btnForestDarkPress.classList.add("hide");
  sounds.btnForest.pause();

  btnRainDarkPress.classList.add("hide");
  sounds.btnRain.pause();

  btnCoffeeDarkPress.classList.add("hide");
  sounds.btnCoffeeShop.pause();

  btnFireDarkPress.classList.add("hide");
  sounds.btnFireplace.pause();
});
