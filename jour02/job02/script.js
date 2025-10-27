let articleRef = null;

function showhide() {
  if (!articleRef) {
    articleRef = document.createElement("article");
    articleRef.textContent =
      "L'important n'est pas la chute, mais l'atterrissage.";
    document.body.appendChild(articleRef);
    return;
  }

  if (articleRef.isConnected) {
    articleRef.remove();
  } else {
    document.body.appendChild(articleRef);
  }
}

const button = document.getElementById("button");
if (button) {
  button.addEventListener("click", showhide);
}
