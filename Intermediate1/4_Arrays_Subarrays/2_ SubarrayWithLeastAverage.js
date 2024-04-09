/**
 * Problem Description
Given an array A of size N, find the subarray of size B with the least average.



Problem Constraints
1 <= B <= N <= 105
-105 <= A[i] <= 105


Input Format
First argument contains an array A of integers of size N.
Second argument contains integer B.


Output Format
Return the index of the first element of the subarray of size B that has least average.
Array indexing starts from 0.


Example Input
Input 1:
A = [3, 7, 90, 20, 10, 50, 40]
B = 3
Input 2:

A = [3, 7, 5, 20, -10, 0, 12]
B = 2


Example Output
Output 1:
3
Output 2:

4


Example Explanation
Explanation 1:
Subarray between indexes 3 and 5
The subarray {20, 10, 50} has the least average 
among all subarrays of size 3.
Explanation 2:

 Subarray between [4, 5] has minimum average



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
 */

module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    solve: function (A, B) {
        let n = A.length
        let ans = 0;
        let sum = 0;
        let data = 0;
        let min = A[0]
        if (B === 1) {
            for (let k = 0; k < n; k++) {
                if (A[k] < min) {
                    data = k
                    min = A[k]
                }
            }
            return data
        }
        for (let i = 0; i <= B - 1; i++) {
            sum += A[i]
        }
        ans = sum
        for (let j = 1; j <= n - B; j++) {
            sum = sum + A[j + B - 1] - A[j - 1]
            if (sum < ans) {
                data = j
                ans = sum
            }
        }
        return data
    }
};
