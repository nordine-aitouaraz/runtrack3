const btn = document.getElementById("update");
const tbody = document.getElementById("users-body");
const statusEl = document.getElementById("status");

function setStatus(text, isError = false) {
  statusEl.textContent = text || "";
  statusEl.style.color = isError ? "#c53030" : "#4a5568";
}

function renderRows(users) {
  if (!users || users.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="4" class="empty">Aucun utilisateur trouvé.</td></tr>';
    return;
  }
  const rows = users
    .map(
      (u) =>
        `<tr>
          <td>${u.id}</td>
          <td>${u.nom ?? ""}</td>
          <td>${u.prenom ?? ""}</td>
          <td>${u.email ?? ""}</td>
        </tr>`
    )
    .join("");
  tbody.innerHTML = rows;
}

async function updateUsers() {
  setStatus("Chargement…");
  try {
    const res = await fetch("users.php", { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const json = await res.json();
    if (!json.ok) throw new Error(json.message || "Erreur API");
    renderRows(json.data);
    setStatus(`${json.count} utilisateur(s) chargés.`);
  } catch (err) {
    console.error(err);
    setStatus("Erreur de chargement. Vérifiez la BDD et users.php.", true);
  }
}

btn?.addEventListener("click", updateUsers);
