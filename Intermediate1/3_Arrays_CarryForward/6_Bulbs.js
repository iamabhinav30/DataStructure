/**
 * Bulbs
 * 
 * Problem Description
A wire connects N light bulbs.

Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.

Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.

You can press the same switch multiple times.

Note: 0 represents the bulb is off and 1 represents the bulb is on.



Problem Constraints
0 <= N <= 5×105
0 <= A[i] <= 1



Input Format
The first and the only argument contains an integer array A, of size N.



Output Format
Return an integer representing the minimum number of switches required.



Example Input
Input 1:

 A = [0, 1, 0, 1]
Input 2:

 A = [1, 1, 1, 1]


Example Output
Output 1:

 4
Output 2:

 0


Example Explanation
Explanation 1:

 press switch 0 : [1 0 1 0]
 press switch 1 : [1 1 0 1]
 press switch 2 : [1 1 1 0]
 press switch 3 : [1 1 1 1]
Explanation 2:

 There is no need to turn any switches as all the bulbs are already on.



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
 */
module.exports = {
    //param A : array of integers
    //return an integer
    bulbs: function (A) {
        // let index = 0;
        // for(let i=0 ; i<A.length ; i++){
        //     if(A[i] ===  0){
        //         index = i;
        //         break;
        //     }
        // }  
        // return index;
        let count = 0
        let bool = 0
        for (let i = 0; i < A.length; i++) {
            if (A[i] == bool) {
                count++;
                bool = bool ^ 1;
            }
        }
        return count

    }
};
