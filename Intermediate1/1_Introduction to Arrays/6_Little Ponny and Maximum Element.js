/**
 * Little Ponny and Maximum Element

Problem Description
Little Ponny is given an array, A, of N integers. In a particular operation, he can set any element of the array equal to -1.

He wants your help in finding out the minimum number of operations required such that the maximum element of the resulting array is B. If it is not possible, then return -1.



Problem Constraints
1 <= |A| <= 105

1 <= A[i] <= 109



Input Format
The first argument of input contains an integer array, A.

The second argument of input contains an integer, B.



Output Format
Return an integer representing the answer.



Example Input
Input 1:

 A = [2, 4, 3, 1, 5]
 B = 3 
Input 2:

 A = [1, 4, 2]
 B = 3 


Example Output
Output 1:

 2 
Output 2:

 -1 


Example Explanation
Explanation 1:

 We need to remove 4 and 5 to make 3 the biggest element. 
Explanation 2:

 As 3 doesn't exist in the array, the answer is -1. 



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases


 */

module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    solve: function (A, B) {
        let count = -1;
        if (A.indexOf(B) != -1) {
            count = 0;
            for (let i = 0; i < A.length; i++) {
                if (A[i] > B) {
                    count++;
                }
            }
            return count;
        }
        return count;
    }
};
