
// Codewars Level 8 

// Return Negative - Solution :

  function makeNegative(num) {
    if ( num > 0 ) {
          return -num;
      }
      else if {
          return num;
      } else {
          return 0}
  }

// String repeat

function repeatStr (n, s) {
    return s.repeat(n);
    }

// Even or Odd
function even_or_odd(number) {
    if (number % 2) {
    return "Odd";} else {
    return "Even";}
    }
  
    //or

 function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  // Sum [1+2+3....+100] var = 100

  function sum (x) {
    var start;
    var result=0;
    for (start = 1; start<=x;start++) {
      result = start+result;
    }
    return result;
  }
  
  console.log (sum (1000));

  // Remove duplicates ([8,8,3,3,5]) > [8,3,5]

  function removeDup (array) {
    let result= [];
    for (var i=0;i<array.length;i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
  }

  const arr = removeDup([1,2,3,3,5,5,5]);
  console.log(arr);

    //or

    let array_with_duplicates = ['DELHI','NEWYORK','DELHI','GOA','MUMBAI','CALIFORNIA','GOA']

    function removeDuplicates(arr){
        let unique_array = []
        for(let i = 0;i < arr.length; i++){
            if(unique_array.indexOf(arr[i]) == -1){
                unique_array.push(arr[i])
            }
        }
        return unique_array
    }
    
    console.log(removeDuplicates(array_with_duplcates)); // [ 'DELHI', 'NEWYORK', 'GOA', 'MUMBAI', 'CALIFORNIA' ]

    //Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

    function sumMix(x){
        const newArray = x.map(element => parseInt(element));
        const sum = newArray.reduce((sum,element)=>sum+element);
        return sum;
        }; 

    //solutions:
    function sumMix(x){
        return x.map(a => +a).reduce((a, b) => a + b);
      }
