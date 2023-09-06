function solveMeFirst(a, b) {
 
     
    return a+b
  }
  //time complexity is 0(1)

  function simpleArraySum(ar) {
    // Write your code here
    
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
//time complexity is 0(n)
  
function compareTriplets(a, b) {
    let alicePoints = 0;
   let bobPoints = 0;
 
   for (let i = 0; i < 3; i++) {
     if (a[i] > b[i]) {
       alicePoints++;
     } else if (a[i] < b[i]) {
       bobPoints++;
     }
   }
 
   return [alicePoints, bobPoints];
 
 }
//time complexity is 0(1)

function aVeryBigSum(ar) {
    // Write your code here
 let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
//time complexity is 0(n)

function aVeryBigSum(ar) {
    // Write your code here
 let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
//time complexity is 0(n)