function tri(numbers, order) {
  return numbers.sort(function (a, b) {
    if (order === "asc") {
      return a - b;
    } else if (order === "desc") {
      return b - a;
    }
  });
}

const tableau1 = [5, 2, 9, 1, 7, 3];
console.log("Tableau original:", tableau1);
console.log("Tri ascendant:", tri([...tableau1], "asc"));
console.log("Tri descendant:", tri([...tableau1], "desc"));

const tableau2 = [42, 15, 8, 23, 4, 16];
console.log("\nTableau original:", tableau2);
console.log("Tri ascendant:", tri([...tableau2], "asc"));
console.log("Tri descendant:", tri([...tableau2], "desc"));
