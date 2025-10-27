const button = document.getElementById("button");

button.addEventListener("click", function () {
  fetch("expression.txt")
    .then((response) => response.text())
    .then((data) => {
      const paragraphe = document.createElement("p");
      paragraphe.textContent = data;
      document.body.appendChild(paragraphe);
    })
    .catch((error) => {
      console.error("Erreur lors du chargement du fichier:", error);
    });
});
