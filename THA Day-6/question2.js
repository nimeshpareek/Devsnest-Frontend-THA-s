  
function arrayClone(array) {
    return [...array];
  }
  
  console.log(arrayClone([1, 2, 4, 0]));
  console.log(arrayClone([1, 2, [4, 0]]));