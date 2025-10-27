const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let konamiIndex = 0;

document.addEventListener("keydown", function (event) {
  if (event.key === konamiCode[konamiIndex]) {
    konamiIndex++;

    if (konamiIndex === konamiCode.length) {
      activerStyleLaPlateforme();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activerStyleLaPlateforme() {
  document.body.style.backgroundColor = "#0062ff";
  document.body.style.color = "white";
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.minHeight = "100vh";
  document.body.style.margin = "0";

  document.body.innerHTML =
    '<h1 style="font-size: 3rem; text-align: center;">La Plateforme_</h1>';
}
