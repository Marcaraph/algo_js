const fs = require('fs');
const { parse } = require('path');
const fileName = process.argv[2];
let data;

// Read the data file
try {
    data = fs.readFileSync(fileName, 'utf8');
    // console.log(data);
} catch (error) {
    console.error(error.message);
}

// Define the parsing function to turn the string into an array of integers
let parseData = (data) => {
    let parsedData = data.split(" ").map((element) => parseInt(element));
    return parsedData;
};

let parsedData = parseData(data)


let comparaison = 0;

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let middleIndex = Math.floor(array.length / 2); 
  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex);

  const fusion = (left, right) => {
    let result = []; // initialize empty result array
    let leftIndex = 0; 
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) { // check if we reach the end of one of the arrays
      comparaison++;
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex)); // the concatenate includes the remaining elements which have not been overviewed
  };

  return fusion(mergeSort(leftArray), mergeSort(rightArray));
  
}

console.log(`Notre array trié : ${mergeSort(parsedData)} en ${comparaison} comparaisons ! SEULEMENT`);