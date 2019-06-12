//var arr = [-5, 13, 4, 9, -1, 13];

function coupleOfElements(arr,s) {
  //arr = arr.sort((a,b)=>a-b);
  //var result=0;
  
  for (i=0; i<arr.length;i++) {
    for (j=i+1;j<arr.length;j++) {
      if (arr[i]+arr[j]===s) {
        return [i,j];
      }
    }
  }
}

console.log(coupleOfElements([-5, 13, 4, 9, -1, 13],8));
