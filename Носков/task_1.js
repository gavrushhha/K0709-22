function isInArray(array, value) {
    for (let j of array) {
      if (value == j) {
          return true;
      }
    }
    return false;
  }
  
  
  
  function getUniqueValues(array) {
      var answer = []
      for (let i of array) {
          if (! isInArray(answer, i)) {
              answer.push(i);
          }
      }
      return answer;
  }
  
  
  console.log(getUniqueValues([1, 2, 3, 3, 4]));
  