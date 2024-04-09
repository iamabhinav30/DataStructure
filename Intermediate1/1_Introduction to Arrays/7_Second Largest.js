/**
 * Second Largest
 * Problem Description
You are given an integer array A. You have to find the second largest element/value in the array or report that no such element exists.


Problem Constraints
1 <= |A| <= 105

0 <= A[i] <= 109



Input Format
The first argument is an integer array A.



Output Format
Return the second largest element. If no such element exist then return -1.



Example Input
Input 1:

 A = [2, 1, 2] 
Input 2:

 A = [2]


Example Output
Output 1:

 1 
Output 2:

 -1 


Example Explanation
Explanation 1:

 First largest element = 2
 Second largest element = 1
Explanation 2:

 There is no second largest element in the array.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
 */

module.exports = {
    //param A : array of integers
    //return an integer
    solve: function (A) {
        let id = 0;
        for (let i = 0; i < A.length; i++) {
            if (A[i] > A[id]) {
                id = i;
            }
        }
        let smax = -1;
        for (let i = 0; i < A.length; i++) {
            if (i != id) {
                if (smax < A[i]) {
                    smax = A[i]
                }
            }
        }
        return smax.toString();
    }
};
