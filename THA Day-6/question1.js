
function checkArray(input) {
    const boolean = Array.isArray(input);
    return boolean;
  }
  
  console.log(checkArray("w3resource")); //false
  console.log(checkArray([1, 2, 3, 4]));