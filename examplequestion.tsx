// I got a microsft technical interview on 27-03-2024. 
// Where I had to make a technical assesment in less than 24 hours. 
// Here is a example question .

// In react typescript :

// This is a demo task.
// Write a function:
// function solution (A: number[]): number;
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [-1, -3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range [1..100,000];
// • each element of array A is an integer within the range [-1,000,000..1,000,000].


function solution(A: number[]): number {
    const positiveNumbersSet = new Set<number>();

    // Filter out positive numbers and store them in a set
    for (const num of A) {
        if (num > 0) {
            positiveNumbersSet.add(num);
        }
    }

    // Find the smallest positive integer that does not occur in A
    let smallestPositive = 1;
    while (positiveNumbersSet.has(smallestPositive)) {
        smallestPositive++;
    }

    return smallestPositive;
}

// Test cases
console.log(solution([1, 3, 6, 4, 1, 2])); // Output: 5
console.log(solution([1, 2, 3])); // Output: 4
console.log(solution([-1, -3])); // Output: 1
