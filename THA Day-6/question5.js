  
function findMostFrequent(array) {
    debugger;
    const length = array.length;
    const obj = {};
    let maxValue = 0;
    let maxIndex;
    for (let i = 0; i < length; i++) {
      if (obj[array[i]]) {
        obj[array[i]] = obj[array[i]] + 1;
        if (maxValue < obj[array[i]]) {
          maxValue = obj[array[i]];
          maxIndex = i;
        }
      } else {
        obj[array[i]] = 1;
      }
    }
     debugger;
    console.log(obj);
    console.log(maxValue, array[maxIndex]);
  }
  var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  console.log(findMostFrequent(arr1));