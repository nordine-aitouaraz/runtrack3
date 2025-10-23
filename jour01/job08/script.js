function estNombrePremier(nombre) {
  if (nombre <= 1) return false;
  if (nombre <= 3) return true;
  if (nombre % 2 === 0 || nombre % 3 === 0) return false;

  for (let i = 5; i * i <= nombre; i += 6) {
    if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
  }

  return true;
}

function sommenombrespremiers(a, b) {
  if (estNombrePremier(a) && estNombrePremier(b)) {
    return a + b;
  }
  return false;
}

console.log(sommenombrespremiers(2, 3));
console.log(sommenombrespremiers(5, 7));
console.log(sommenombrespremiers(4, 7));
console.log(sommenombrespremiers(10, 15));
console.log(sommenombrespremiers(11, 13));
