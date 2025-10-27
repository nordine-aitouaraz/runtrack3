const keylogger = document.getElementById("keylogger");

document.addEventListener("keypress", function (event) {
  const key = event.key.toLowerCase();

  if (key >= "a" && key <= "z") {
    if (document.activeElement === keylogger) {
      keylogger.value += key + key;
    } else {
      keylogger.value += key;
    }
  }
});
