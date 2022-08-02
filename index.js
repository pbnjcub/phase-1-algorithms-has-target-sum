function isSmallEnough(int) {
  return int <= target
}

function findNum(resultArray, target) {
  let filtResultArray = resultArray.filter(int => int <= target)
  let start = 0
  let end = filtResultArray.length
  console.log(filtResultArray)
  while (start <= end) {
    let midNum = Math.floor((start + end) / 2)
    if (filtResultArray[midNum] === target) {
      return true
    } else if (filtResultArray[midNum] < target) {
      start = midNum + 1
    } else {
      end = midNum - 1
    } 
  }
}

function hasTargetSum(array, target) {
  // Write your algorithm here
  // ->create a new array that orders from least to greatest
  // ->cut off all of the elements that are greater than or equal to the target number
  let sortedFilteredArray = array.sort((a, b) => a - b)
  // 
  let sumInt = []
  // ->iterate through the remaining numbers
  for (let i = 0; i < sortedFilteredArray.length; i++) {
    for (let j = i + 1; j < sortedFilteredArray.length; j++) {
      // ->find sums
      sumInt.push(sortedFilteredArray[i] + sortedFilteredArray[j])
    }
  }
  if (findNum(sumInt, target) === true) {
    return true
  }
  if (findNum(sumInt, target) === undefined){
    return false
  }
}


/* 
  Write the Big O time complexity of your function here
  O(n^2 + n)
*/
// The function should return true if any pair of numbers in the array adds up to
// the target number.
/* 
  Add your pseudocode here
  create a function with two inputs, array and target.
    ->create a new array that orders from least to greatest
    ->cut off all of the elements that are greater than or equal to the target number
    ->iterate through the remaining numbers
    /*
[3, 4, 7, 8]   for i = 0, jstart 1, until j + 2
 i  j           7
[3, 4, 7, 8]  
 i     j        10
[3, 4, 7, 8]
 i        j     11
 
[3, 4, 7, 8]   for i = 1, jstart 2, until j + 1
    i  j
[3, 4, 7, 8]
    i     j
    
[3, 4, 7, 8]   for i = 2, jstart 3, until j + 0
       i  j
 
*/
/*
[10, 23, 26, 34, 25, 28, 36, 41, 49, 52] target 10
[-7, 4, 8, 10]

    //   ->find any sum that adds up to ten
    // -> if there is no sum return false
    // -> if there is a sum return true


/*
  Add written explanation of your solution here
   function takes an array of integers and a target integer that should equal the sum of two integers in the array. The function should return true if it finds a sum of two numbers equal to the target and it should return false if it doesn'
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

// Write a function called `hasTargetSum` that receives two arguments:
// - an `array` of integers
// - a `target` integer



// The function should return true if any pair of numbers in the array adds up to
// the target number.


// Here are a few examples:

// ```js
// hasTargetSum([3, 8, 12, 4, 11, 7], 10);
// // returns true, since 3 and 7 add up to 10

// hasTargetSum([22, 19, 4, 6, 30], 25);
// // returns true, since 19 and 6 add up to 25

// hasTargetSum([1, 2, 5], 4);
// // returns false, since no pair of numbers adds up to 4
// ```

// This is a challenging problem, but you have the tools to come up with a
// solution! It's ok if your initial solution isn't optimal from a runtime
// perspective; it's totally fine to brute force your way to a solution and get
// something working before trying to optimize.