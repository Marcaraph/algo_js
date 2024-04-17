array = [3, 7, 8, 3, 6, 1];
// array = [1, 4, 5, 8];

// EXERCICE 2

let countWestOrientatedNComplexity = (array) => {
    let buildingCount = 1;
    let biggestBuilding = array.slice(-1)
    
    for (let i=array.length-2; i >= 0; i--) {

        if(biggestBuilding < array[i]) {
            biggestBuilding = array[i]
            buildingCount++;
        }
    }
    
    return buildingCount;
}

console.log(`With N complexity: The number of buildings with a view on the West is ${countWestOrientatedNComplexity(array)}`);

// EXERCICE 4

let countWestOrientatedN2Complexity = (array) => {
    let noViewBuildingCount = 0;

    for (let i=array.length-2; i >= 0; i--) { // take one building from the initial array
        // premier tour de boucle, i = 2 donc => valeur = 5

        for (let j=i+1; j < array.length; j++) { // check one by one the buildings on its right (those further to the west)
            // 1er tour j vaut 3 donc valeur = 8
            if (array[i] < array[j]) { // if a building on the west is higher than our building, then we break the loop since our building doesn't have a view on the west
                noViewBuildingCount++
                break;
            }
        }
        // otherwise, all the buildings further to the west are smaller than our building
    }
    
    return (array.length - noViewBuildingCount); // return the number of buildins with a view on west
}

console.log(`With N2 complexity: The number of buildings with a view on the West is ${countWestOrientatedN2Complexity(array)}`);