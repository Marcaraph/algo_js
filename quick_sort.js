const fs = require('fs');
const fileName = process.argv[2];

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    const parsedList = parseList(data);
    const sortedList = quickSort(parsedList);
    console.log(sortedList);
} catch (error) {
    console.error(error.message);
}

function parseList(data) {
  let parsedList = data.split(" ").map((element) => parseInt(element));
  return parsedList;
}

/* FUNCTION START */

function quickSort(arr) {
  // Vérifie si le tableau est vide ou ne contient qu'un seul élément
  if (arr.length <= 1) {
    // si oui, il est déjà trié donc return tel quel
    return arr;
  }

  // Choix du pivot, premier élément de l'array
  const pivot = arr[0];
  const left = [];
  const right = [];

  // On itère dans tout l'array
  for (let i = 1; i < arr.length; i++) {
    // si élément < pivot
    if (arr[i] < pivot) {
      // on le place dans l'array "left"
      left.push(arr[i]);
    } else {
      // sinon dans l'array right
      right.push(arr[i]);
    }
  }
  // appel récursif de quickSort sur les arrays left & right + concaténation avec le pivot entre les deux
  return [...quickSort(left), pivot, ...quickSort(right)];
}