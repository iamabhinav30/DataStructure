/**
 *  Problem Description

Take input an array A of size N and write a program to print maximum and minimum elements of the input. The only line of the input would contain a single integer N that represents the length of the array followed by the N elements of the input array A.

Problem constraints

1 <= N <= 1000

1 <= A <= 1000


Input Format

The first line contains a single integer N representing the length of the array A followed by N elements of the array A.


Output Format

A single line output containing two space-separated integers.
The first integer is the maximum value of the array.
The second integer is the minimum value of the array.


Example Input

Input 1:
5 1 2 3 4 5
Input 2:
4 10 50 40 80

Example Output

Output 1:
5 1
Output 2:
80 10
Note: There is no space after the minimum value in the output format. There is only a single space between the maximum and minimum value.




Write a program to print maximum and minimum elements of the input


 */

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function main() {
     let str = inputString[0]; // Assuming inputString is defined somewhere
    let arr = str.split(' ').map(Number); // Convert the string array directly to an array of numbers
    let arrLength = arr.shift(); // Remove the first element and use it as arrLength

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arrLength; i++) { // Start loop from 1 since max and min are initialized to arr[0]
        if (arr[i] > max) max = arr[i]; // Find max
        if (arr[i] < min) min = arr[i]; // Find min
    }

    console.log(max + ' ' + min); // Output the result
    
    // Write your code here
    // let str = inputString[0];
    // let arr = str.split(' ');
    // let arrLength = parseInt(arr.shift());
    // let max = arr[0]
    // let min = arr[0]
    // for (let i = 0; i < arrLength; i++) {
    //     arr[i] = parseInt(arr[i])
    //     max = Math.max(max, arr[i])
    //     min = Math.min(min, arr[i])
    // }

    // console.log(max + ' ' + min)
    // Use console.log to output the result

}