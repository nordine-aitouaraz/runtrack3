function addone() {
  const compteur = document.getElementById("compteur");
  let valeurActuelle = parseInt(compteur.textContent);
  valeurActuelle++;
  compteur.textContent = valeurActuelle;
}

const button = document.getElementById("button");
if (button) {
  button.addEventListener("click", addone);
}
