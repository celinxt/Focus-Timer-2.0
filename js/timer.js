import { displaySwitch } from "./main.js";
import { Sounds } from "./sounds.js";

const sounds = Sounds();

export const Timer = ({ minutes, seconds, btnPlay, btnPause }) => {
  let timerTimeOut;
  const reset = () => {
    minutes.textContent = "25";
    seconds.textContent = "00";
    btnPlay.classList.remove("hide");
    btnPause.classList.add("hide");
    return;
  };

  const hold = () => {
    clearTimeout(timerTimeOut);
  };

  const countdown = () => {
    timerTimeOut = setTimeout(() => {
      let min = Number(minutes.textContent);
      let sec = Number(seconds.textContent);

      if (min <= 0 && sec <= 0) {
        displaySwitch();
        reset();
        sounds.endTimer();
        return;
      }

      if (sec <= 0) {
        sec = 60;
        minutes.textContent = String(min - 1).padStart(2, "0");
      }

      seconds.textContent = String(sec - 1).padStart(2, "0");

      countdown();
      return;
    }, 1000);
  };

  const add = () => {
    let min = Number(minutes.textContent);
    minutes.textContent = String(min + 5).padStart(2, "0");
    if (min >= 250) {
      reset();
      hold();
      return;
    }
  };

  const remove = () => {
    let min = Number(minutes.textContent);
    minutes.textContent = String(min - 5).padStart(2, "0");
    if (min <= 0) {
      reset();
      hold();
      return;
    }
  };
  return {
    reset,
    hold,
    countdown,
    add,
    remove,
  };
};
