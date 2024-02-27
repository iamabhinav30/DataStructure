/**
 * Rotation Game
 * Problem Description
Given an integer array A of size N and an integer B, you have to print the same array after rotating it B times towards the right.

Problem Constraints
1 <= N <= 106
1 <= A[i] <=108
1 <= B <= 109


Input Format
There are 2 lines in the input

Line 1: The first number is the size N of the array A. Then N numbers follow which indicate the elements in the array A.

Line 2: A single integer B.


Output Format
Print array A after rotating it B times towards the right.


Example Input
Input 1 :
4 1 2 3 4
2


Example Output
Output 1 :
3 4 1 2


Example Explanation
Example 1 :

N = 4, A = [1, 2, 3, 4] and B = 2.

Rotate towards the right 2 times - [1, 2, 3, 4] => [4, 1, 2, 3] => [3, 4, 1, 2]

Final array = [3, 4, 1, 2]
 */

// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();    
});

function readline() {
    return inputString[currentLine++];
}
// Main function that performs the rotation and prints the result
function main() {
    // Split the input string into an array, remove the first element (the original array's length),
    // and use it in calculating the effective rotation (handling cases where rotation >= array length)
    let arr = inputString[0].split(' '), 
        rotation = parseInt(inputString[1]) % parseInt(arr.shift()); // Calculate rotation with modulo
  
    // If rotation is needed (not 0), perform the rotation
    if(rotation) {
      // Step 1: Reverse the entire array
      reverse(arr, 0, arr.length - 1);
      // Step 2: Reverse the first part of the array (up to the rotation point)
      reverse(arr, 0, rotation - 1);
      // Step 3: Reverse the remaining part of the array
      reverse(arr, rotation, arr.length - 1);
    }
  
    // Join the array back into a string and print it, adding a trailing space
    console.log(arr.join(' ') + ' ');
  }
  
  // Function to reverse a portion of the array in place
  function reverse(arr, start, end) {
    // Loop to swap elements from start to end
    while(start < end) {
      // Swap elements at positions start and end using array destructuring
      [arr[start], arr[end]] = [arr[end], arr[start]];
      // Move towards the middle of the portion to be reversed
      start++;
      end--;
    }
  }
  