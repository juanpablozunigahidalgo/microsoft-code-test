//The first question I got: 

//You are given an implementation of a function:
// class Solution { public boolean solution (int[] A, int K); }
// This function, given a non-empty array A of N integers (sorted in non- decreasing order) and integer K, checks whether A contains numbers 1, 2, ..., K (every number from 1 to K at least once) and no other numbers.
// For example, given the following array A, and K = 3:
// A[0] = 1
// A[1]
// = 1
// A[2] = 2
// A[3] = 3
// A[4] = 3
// The function should return true.
// For the following array A, and K = 2:
// A[0] = 1 A[1] = 1
// A[2] = 3

// the function should return false.
// The attached code is still incorrect for some inputs. Despite the error(s), the code may produce a correct answer for the example test cases. The goal of the exercise is to find and fix the bug(s) in the implementation. You can modify at most two lines.
// Assume that:
// • N and K are integers within the range [1..300,000];
// • each element of array A is an integer within the range [0..1,000,000,000];
// • array A is sorted in non-decreasing order.
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

// The answer :

function solutionq1 (A: number[], K: number): boolean {
    let n: number = A.length;
    for (let i: number = 0; i < n; i++) { // Changed line 2
        if (A[i] + 1 < A[i + 1])
            return false;
    }
    if (A[0] !== 1 || A[n - 1] !== K) // Changed line 3
        return false;
    else
        return true;
}