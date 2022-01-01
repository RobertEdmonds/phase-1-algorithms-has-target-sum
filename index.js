function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      if((array[i]+array[j])===target)
        return true
    }
  }return false
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here
  initializing through the array
  adding the numbers to each other two at a time
  checking to see if it equals to the target
*/

/*
  Add written explanation of your solution here
  loop through the array adding one to another and checking to see if it is equal to the target
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

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 9, 17, 32], 12));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 5, 12, 11], 14));
}

module.exports = hasTargetSum;
