let parsedData = [10, 15, 3, 7];
// let parsedData = [1, 8, 10, 21];

// EXERCICE 1

const checkSum = (array, k) => {
    // parcourir la liste deux a deux
    // faire somme des elements et comparer a k
    // si somme == k alors on retourne true

    for (let i=0; i < array.length; i++) {
        
        for (let j=i+1; j < array.length; j++) {


            let sum = array[i] + array[j]
            console.log(`Summing ${array[i]} with ${array[j]} equals ${sum}`)

            if (sum === k) {
                return true;
            }
        }
    }

    return false;

}

// console.log(checkSum(parsedData, 150));

// EXERCICE 3 


const checkSumNComplexity = (array, k) => {
    let alreadyChecked = new Set();
    
    for(let i= 0; i < array.length; i++) {
        const complement = k - array[i];
        if(alreadyChecked.has(complement)){
            return true
        }
        alreadyChecked.add(array[i]);
    }
    return false;
}

console.log(checkSumNComplexity(parsedData, 0));