const filtrerButton = document.getElementById("filtrer");
const resultsDiv = document.getElementById("results");

filtrerButton.addEventListener("click", function () {
  const idInput = document.getElementById("id").value.trim();
  const nomInput = document.getElementById("nom").value.trim().toLowerCase();
  const typeInput = document.getElementById("type").value;

  fetch("pokemon.json")
    .then((response) => response.json())
    .then((data) => {
      let filteredData = data;

      if (idInput !== "") {
        filteredData = filteredData.filter(
          (pokemon) => pokemon.id === parseInt(idInput)
        );
      }

      if (nomInput !== "") {
        filteredData = filteredData.filter(
          (pokemon) =>
            pokemon.name.english.toLowerCase().includes(nomInput) ||
            pokemon.name.french.toLowerCase().includes(nomInput)
        );
      }

      if (typeInput !== "") {
        filteredData = filteredData.filter((pokemon) =>
          pokemon.type.includes(typeInput)
        );
      }

      afficherResultats(filteredData);
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des données:", error);
    });
});

function afficherResultats(pokemons) {
  resultsDiv.innerHTML = "";

  if (pokemons.length === 0) {
    resultsDiv.innerHTML =
      '<div style="grid-column: 1/-1; text-align: center; color: white; font-size: 1.2rem; padding: 2rem;">Aucun Pokémon trouvé.</div>';
    return;
  }

  pokemons.forEach((pokemon) => {
    const pokemonDiv = document.createElement("div");

    pokemonDiv.innerHTML = `
            <h3>#${pokemon.id} - ${pokemon.name.french}</h3>
            <p style="color: #999; font-size: 0.9rem; margin-bottom: 1rem;">${
              pokemon.name.english
            }</p>
            <p><strong>Type(s):</strong> ${pokemon.type.join(", ")}</p>
            <p><strong>Stats:</strong></p>
            <ul>
                <li>HP: ${pokemon.base.HP}</li>
                <li>Attack: ${pokemon.base.Attack}</li>
                <li>Defense: ${pokemon.base.Defense}</li>
                <li>Sp. Attack: ${pokemon.base["Sp. Attack"]}</li>
                <li>Sp. Defense: ${pokemon.base["Sp. Defense"]}</li>
                <li>Speed: ${pokemon.base.Speed}</li>
            </ul>
        `;

    resultsDiv.appendChild(pokemonDiv);
  });
}
