/**
 * Maximum Subarray Easy
 * Problem Description
You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
But the sum must not exceed B.


Problem Constraints
1 <= A <= 103
1 <= B <= 109
1 <= C[i] <= 106


Input Format
The first argument is the integer A.
The second argument is the integer B.
The third argument is the integer array C.


Output Format
Return a single integer which denotes the maximum sum.


Example Input
Input 1:
A = 5
B = 12
C = [2, 1, 3, 4, 5]
Input 2:

A = 3
B = 1
C = [2, 2, 2]


Example Output
Output 1:
12
Output 2:

0


Example Explanation
Explanation 1:
We can select {3,4,5} which sums up to 12 which is the maximum possible sum.
Explanation 2:

All elements are greater than B, which means we cannot select any subarray.
Hence, the answer is 0.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
 */

module.exports = {
    //param A : integer
    //param B : integer
    //param C : array of integers
    //return an integer
    maxSubarray: function (A, B, C) {
        let sum = BigInt(0), max = BigInt(0);
        const N = C.length;
        if (N == 1) {
            return Number(C[0]);
        }
        let j = 0;
        for (let i = 0; i < N; i++) {
            sum += C[i];
            if (max <= sum && sum <= B) {
                max = sum;
            }
            while (sum > B) {
                sum -= C[j];
                if (max <= sum && sum <= B) {
                    max = sum;
                }
                j++;
            }
        }

        return Number(max);
        // let ans = 0;
        // for (let i = 0; i < A; i++) {
        //     let sumA = 0;
        //     for (let j = i; j < A; j++) {
        //         sumA += C[j];
        //         if (sumA <= B) {
        //         ans = Math.max(ans, sumA)
        //     } else {
        //         break;
        //     }
        //     }


        // }
        // return ans;
        // ans = 0
        // for i in range(0, A):
        //     sumA = 0
        // for j in range(i, A):
        //     sumA = sumA + C[j]
        //         # print(sumA)
        // if (sumA <= B):
        //     ans = max(ans, sumA)
        // else:
        // break
        // return ans


    }
};
