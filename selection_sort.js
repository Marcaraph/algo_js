const fs = require('fs');
const fileName = process.argv[2];

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    const parsedList = parseList(data);
    const sortedList = selectionSort(parsedList);
    console.log(sortedList);
} catch (error) {
    console.error(error.message);
}

function parseList(data) {
  let parsedList = data.split(" ").map((element) => parseInt(element));
  return parsedList;
}

/* FUNCTION START */

function selectionSort(arr) {
  let n = arr.length;

  // Boucle pour parcourir tout l'array
  for (let i = 0; i < n; i++) {
    // Initialise l'index min à l'index actuel
    let min = i;

    // Boucle pour trouver l'index minimum dans la sous-liste non traitée
    for (let j = i + 1; j < n; j++) {
      // si l'élément actuel est < à l'index min
      // met à jour l'index min
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
      // Si l'index du min est différent de l'index actuel
      if (min != i) {
        // swap entre les deux
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
  }
  return arr;
}