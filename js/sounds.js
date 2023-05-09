export const Sounds = () => {
  const btnForest = new Audio("./assets/audios/forest.wav");
  const btnRain = new Audio("./assets/audios/rain.wav");
  const btnCoffeeShop = new Audio("./assets/audios/coffee-shop.wav");
  const btnFireplace = new Audio("./assets/audios/fireplace.wav");

  const btnPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );

  const endTimerAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

  btnForest.loop = true;
  btnRain.loop = true;
  btnCoffeeShop.loop = true;
  btnFireplace.loop = true;

  const btnPress = () => {
    btnPressAudio.play();
  };

  const endTimer = () => {
    endTimerAudio.play();
  };

  return {
    btnForest,
    btnRain,
    btnCoffeeShop,
    btnFireplace,
    btnPress,
    endTimer,
  };
};
