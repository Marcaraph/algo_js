const fs = require('fs');
const fileName = process.argv[2];

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    const parsedList = parseList(data);
    const sortedList = insertSort(parsedList);
    console.log(sortedList);
} catch (error) {
    console.error(error.message);
}

function parseList(data) {
  let parsedList = data.split(" ").map((element) => parseInt(element));
  return parsedList;
}

/* FUNCTION START */

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // élément courant
    let currentValue = arr[i];
    // élément précédent
    let j = i - 1;

    // tant que l'élément précédent est > élément courant
    while (j >= 0 && arr[j] > currentValue) {
      // déplace l'élément vers la droite
      arr[j + 1] = arr[j];
      // décrémente pour comparer à l'index précédent
      j--;
    }
    // insère la valeur à la bonne position
    arr[j + 1] = currentValue;
  }

  return arr;
}