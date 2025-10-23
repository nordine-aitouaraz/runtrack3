function jourtravaille(date) {
  const joursFeries2020 = [
    "2020-01-01",
    "2020-04-13",
    "2020-05-01",
    "2020-05-08",
    "2020-05-21",
    "2020-06-01",
    "2020-07-14",
    "2020-08-15",
    "2020-11-01",
    "2020-11-11",
    "2020-12-25",
  ];

  const nomsMois = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const jour = date.getDate();
  const moisNumero = date.getMonth() + 1;
  const mois = nomsMois[date.getMonth()];
  const annee = date.getFullYear();

  const dateString = `${annee}-${String(moisNumero).padStart(2, "0")}-${String(
    jour
  ).padStart(2, "0")}`;

  if (joursFeries2020.includes(dateString)) {
    console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
    return;
  }

  const jourSemaine = date.getDay();

  if (jourSemaine === 0 || jourSemaine === 6) {
    console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
    return;
  }

  console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
}

jourtravaille(new Date(2020, 0, 1));
jourtravaille(new Date(2020, 4, 1));
jourtravaille(new Date(2020, 6, 14));
jourtravaille(new Date(2020, 4, 2));
jourtravaille(new Date(2020, 4, 3));
jourtravaille(new Date(2020, 4, 4));
