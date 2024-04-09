/**
 * Special Index
Problem Description
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Problem Constraints
1 <= N <= 105
-105 <= A[i] <= 105
Sum of all elements of A <= 109


Input Format
First argument contains an array A of integers of size N


Output Format
Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Example Input
Input 1:
A = [2, 1, 6, 4]
Input 2:

A = [1, 1, 1]


Example Output
Output 1:
1
Output 2:

3


Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
 */

module.exports = {
    //param A : array of integers
    //return an integer
    solve: function (A) {
        let nums = A
        let prevEven = 0;
        let prevOdd = 0;
        let nextEven = 0;
        let nextOdd = 0;

        for (let index = 0; index < nums.length; index++) {
            if (index % 2 === 0) {
                nextEven += nums[index];
            } else {
                nextOdd += nums[index];
            }
        }


        let indexToRemove = 0;

        for (let index = 0; index < nums.length; index++) {
            if (index % 2 === 0) {
                nextEven -= nums[index];
            } else {
                nextOdd -= nums[index];
            }

            if (prevEven + nextOdd === prevOdd + nextEven) {
                indexToRemove++;
            }

            if (index % 2 === 0) {
                prevEven += nums[index];
            } else {
                prevOdd += nums[index];
            }
        }

        return indexToRemove;
    }
};
