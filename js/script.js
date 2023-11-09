"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const message = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //Si el input está vacío

  if (!guess) {
    message("⛔️ No number!");
  }

  //Si acierta el número
  else if (guess === secretNumber) {
    message("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor =
      "#60b347"; /*Nombre del elemento que se quiere seleccionar, style y la propiedad que se quiere modificar. El valor se pone en forma de string.*/
    document.querySelector(".number").style.width = "30rem";

    //Para los puntos

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //Si no es correcto
  else if (guess !== secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Reset game

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message("Start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});
