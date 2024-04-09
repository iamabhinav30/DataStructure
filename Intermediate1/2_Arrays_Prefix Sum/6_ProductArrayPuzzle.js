/**
 * Product array puzzle
Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.


Input Format

The only argument given is the integer array A.
Output Format

Return the product array.
Constraints

2 <= length of the array <= 1000
1 <= A[i] <= 10
For Example

Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    [120, 60, 40, 30, 24]

Input 2:
    A = [5, 1, 10, 1]
Output 2:
    [10, 50, 5, 50]
Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
 */

module.exports = {
    //param A : array of integers
    //return a array of integers
    solve: function (A) {
        let mulPrefix = [];
        mulPrefix[0] = A[0]
        for (let i = 1; i < A.length; i++) {
            mulPrefix[i] = mulPrefix[i - 1] * A[i]
        }
        let output = []
        for (let i = 0; i < mulPrefix.length; i++) {
            output[i] = mulPrefix[mulPrefix.length - 1] / A[i]
        }
        return output
    }
};
