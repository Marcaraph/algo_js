const fs = require('fs');
const fileName = process.argv[2];

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    const parsedList = parseList(data);
    const sortedList = bubbleSort(parsedList);
    console.log(sortedList);
} catch (error) {
    console.error(error.message);
}

function parseList(data) {
  let parsedList = data.split(" ").map((element) => parseInt(element));
  return parsedList;
}

/* FUNCTION START */

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
