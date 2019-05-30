
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

    // KATA - Remove first and last character
    // Instructions : It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

    function removeChar(str){
        var arr = str.slice(1);
        var fin = arr.slice(0,-1);
        return fin;
        };


    // KATA - Football game with scores such as ["3:2", "0-2", "1-1"]
    //Count the sum of points knowing that if x>y=3pts / x=y 1pt / x<y 0pt

    //Solution 1:
    function points(games) {
        return games.reduce((output,current)=>{
        let x = parseInt(current[0]);
        let y = parseInt(current[2]);
        let value= x>y ? 3 : x===y ? 1 : 0;
        return output+value;
         },0)
        }

    //Solution 2:
    function points(games) {
        let total = 0;
        games.map(game => {
          if (game[0] === game[2]) {
            total += 1;
          } else if (game[0] > game[2]) {
            total += 3;
          }
        });
        return total;
      }

    //Solution 3

    function points(games) {
        var sum=0;
        for (var i=0; i<games.length; ++i)
        {
          if (games[i][0]>games[i][2])
            sum+=3;
          if (games[i][0]==games[i][2])
            sum+=1;
        }
        return sum;
      }

      // KATA : Simple, remove the spaces from the string, then return the resultant string.
        function noSpace(x){
            x = x.replace(/\s/g, '');
            return x;
       }

       // KATA : Convert a Number to a String!

       function numberToString(num) {
        var str = num.toString();
        return str;
      }

      //KATA : Convert string into number

      var stringToNumber = function(str){
        var string = parseInt(str);
        return string;
      }

