const footer = document.getElementById("footer");

function updateProgressBar() {
  const hauteurTotale =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollActuel = window.scrollY;
  const pourcentage = (scrollActuel / hauteurTotale) * 100;

  const rouge = Math.round(255 - pourcentage * 2.55);
  const vert = Math.round(pourcentage * 2.55);
  const bleu = Math.round(255 - pourcentage * 2.55);

  footer.style.backgroundColor = `rgb(${rouge}, ${vert}, ${bleu})`;
}

window.addEventListener("scroll", updateProgressBar);
updateProgressBar();
