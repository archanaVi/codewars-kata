
// Codewars Level 8 

// Write a function "greet" that returns "hello world!"

function greet () {
  return "hello world!";
}

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

      // KATA : Convert binary to decimal number
      function binToDec(bin){
        return parseInt(bin,2);
      }

      // KATA : Given an array of integers, return a new array with each value doubled.

      function maps(x){
        const arr = x.map(x=>x*2);
        return arr;
        }

      // KATA : Square(n) Sum - Complete the square sum function so that it squares each number passed into it and then sums the results together.

      function squareSum(numbers){
        var square = numbers.map(number => number*number);
        var callback = (acc,cur) => acc +cur;
        var sum = square.reduce(callback);
        return sum;
      }

      // KATA : Complete the square sum function so that it squares each number passed into it and then sums the results together.

      function squareSum(numbers){
        var square = numbers.map( number => number*number);
        var callback = (acc,cur) => acc +cur;
        var sum = square.reduce(callback,0);
        return sum;
      }

      //Attention - TypeError: reduce of empty array with no initial value => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value

      // KATA - Abbreviate a Two Word Name
      //Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

      function abbrevName(name){
        var arrName = name.split(" ");
        var firstName = arrName[0];
        var lastName = arrName[1];
        var initials = firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
        return initials;
        }

            //Other solution
            function abbrevName(name){
              return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
            }

      // KATA : Reversed Words : Complete the solution so that it reverses all of the words within the string passed in. reverseWords("The greatest victory is that which requires no battle") should return "battle no requires which that is victory greatest The"

      function reverseWords(str){
        reverse = str.split(" ").reverse().join(" ");
        return reverse; // reverse those words 
      }

      // KATA - Student's Final Grade : Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects. This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above); This function should return a number (final grade). There are four types of final grades:100, if a grade for the exam is more than 90 or if a number of completed projects more than 10. 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2. 0, in other cases
      
      function finalGrade (exam, projects) {
        var finGrade = 0;
        if (exam>90 || projects>10) {
          finGrade = 100;
        } else if (exam>75 && exam<=90 && projects>=5 && projects<=10) {
          finGrade = 90;   
        } else if (exam>50 && exam<=75 && projects>=2 && projects<5) {
           finGrade = 75;
        } else if (exam>50 && exam<=75 && projects>=5 && projects<=10) {
           finGrade = 75;
        } else if (exam>50 && exam<=90 && projects>=2 && projects<5) {
           finGrade = 75;
        } else {
            finGrade = 0;   
        }
        return finGrade;
      }
      
      function finalGrade (exam, projects) {
        if(exam > 90 || projects > 10) return 100;
        if(exam > 75 & projects >= 5) return 90;
        if(exam > 50 & projects >= 2) return 75;
        return 0;
      }

      //KATA - get character from ASCII Value - ex: get_char(65) # => 'A'
      function getChar(c){
        return String.fromCharCode(c);
        }

