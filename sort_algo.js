const fs = require('fs');

class SortingAlgo {
  constructor() {
    this.comparisons = 0;
  }

  resetComparisons() {
    this.comparisons = 0;
  }

  bubbleSort(arr) {
    this.resetComparisons();
    const n = arr.length;
    let swapped;
  
    do {
      this.comparisons++;
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

  insertSort(arr) {
    this.resetComparisons();
    for (let i = 1; i < arr.length; i++) {
      // élément courant
      let currentValue = arr[i];
      // élément précédent
      let j = i - 1;
  
      // tant que l'élément précédent est > élément courant
      while (j >= 0 && arr[j] > currentValue) {
        this.comparisons++;
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

  selectionSort(arr) {
    this.resetComparisons();
    let n = arr.length;
  
    // Boucle pour parcourir tout l'array
    for (let i = 0; i < n; i++) {
      // Initialise l'index min à l'index actuel
      let min = i;
  
      // Boucle pour trouver l'index minimum dans la sous-liste non traitée
      for (let j = i + 1; j < n; j++) {
        this.comparisons++;
        // si l'élément actuel est < à l'index min
        // met à jour l'index min
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
        // Si l'index du min est différent de l'index actuel
        if (min !== i) {
          // swap entre les deux
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
      }
    }
    return arr;
  }

  quickSort(arr) {
   this.resetComparisons();
   this.quickSortHelper(arr, 0, arr.length - 1);
   return arr;
  }

  quickSortHelper(arr, low, high) {
    if (low < high) {
      let pi = this.partition(arr, low, high);
      this.quickSortHelper(arr, low, pi - 1);
      this.quickSortHelper(arr, pi + 1, high);
    }
  }

  partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      this.comparisons++;
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }
}

function readAndSort(fileName) {
  const content = fs.readFileSync(fileName, 'utf-8');
  const numbers = content.trim().split(' ').map(Number);

  const sorter = new SortingAlgo();
  const bubbleSorted = sorter.bubbleSort([...numbers]);
  console.log(`Tri à bulle: ${sorter.comparisons} comparaisons - [${bubbleSorted}]`);

  const insertionSorted = sorter.insertSort([...numbers]);
  console.log(`Tri par insertion: ${sorter.comparisons} comparaisons - [${insertionSorted}]`);

  const selectionSorted = sorter.selectionSort([...numbers]);
  console.log(`Tri par sélection: ${sorter.comparisons} comparaisons - [${selectionSorted}]`);

  const quickSorted = sorter.quickSort([...numbers]);
  console.log(`Tri rapide: ${sorter.comparisons} comparaisons - [${quickSorted}]`);
}

const fileName = process.argv[2];
readAndSort(fileName);