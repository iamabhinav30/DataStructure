/**
 * Reverse the Array
 * Problem Description
You are given a constant array A.

You are required to return another array which is the reversed form of the input array.



Problem Constraints
1 <= A.size() <= 10000

1 <= A[i] <= 10000



Input Format
First argument is a constant array A.



Output Format
Return an integer array.



Example Input
Input 1:

A = [1,2,3,2,1]
Input 2:

A = [1,1,10]


Example Output
Output 1:

 [1,2,3,2,1] 
Output 2:

 [10,1,1] 


Example Explanation
Explanation 1:

Reversed form of input array is same as original array
Explanation 2:

Clearly, Reverse of [1,1,10] is [10,1,1]



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
 */

module.exports = { 
    //param A : array of integers
    //return a array of integers
       solve : function(A){
           let start = 0;
           let end = A.length-1;
           while(start<end){
               [A[start], A[end]]=[A[end], A[start]];
               start++;
               end--;
           }
           return A;
       //   let newArr = [];
       //   for(let i=A.length-1; i>=0 ; i--){
       //       newArr.push(A[i]);
       //   }
       //   return newArr;
       }
   };
   