/**
 * Closest MinMax
 * 
 * Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints
1 <= |A| <= 2000



Input Format
First and only argument is vector A



Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input
Input 1:

A = [1, 3, 2]
Input 2:

A = [2, 6, 1, 6, 9]


Example Output
Output 1:

 2
Output 2:

 3


Example Explanation
Explanation 1:

 Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:

 Take the last 3 elements of the array.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
 */

module.exports = {
    //param A : array of integers
    //return an integer
    solve: function (A) {
        let minA = Math.min(...A);
        let maxA = Math.max(...A);
        let minId = -1;
        let maxId = -1;
        let N = A.length;
        let ans = N;
        for (let i = N - 1; i >= 0; i--) {
            if (A[i] == minA) {
                minId = i;
                if (maxId !== -1) {
                    ans = Math.min(ans, maxId - minId + 1);
                }
            }
            if (A[i] == maxA) {
                maxId = i;
                if (minId !== -1) {
                    ans = Math.min(ans, minId - maxId + 1)
                }
            }
        }
        return ans;
    }
};
