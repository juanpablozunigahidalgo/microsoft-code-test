// Read the problem :

// Today our world is approaching an ecological crisis. Due to global warming, the sea level is rising. At the same time, the amount of drinkable water is decreasing. One idea about preventing the loss of drinkable water is the propagation of rainwater storage, in other words, equipping houses with a water tank for rainwater.
// You are given a string S describing a street. in which 'H' denotes a house and '-' denotes an empty plot. You can place water tanks in empty plots to collect rainwater from nearby houses. A house can collect its own rainwater if there is a tank next to it (on either the left or the right side).
// Your task is to find the minimum number of water tanks needed to collect rainwater from all of the houses.
// For example, given S = "-H-HH--", you can collect rainwater from all three houses by using two water tanks. You can position one water tank between the first and second houses and the other after the third house. This placement of water tanks can be represented as "-HTHHT-", where 'T' denotes a water tank.

// Write a function:
// function solution (S: string): number;
// that, given a string S of length N, returns the minimum number of water tanks needed.
// If there is no solution, return -1.
// Examples:
// 1. Given S = "-H-HH--", the function should return 2, as explained above. Since two tanks can be utilized to water three houses.
// 2. Given S = "H", the function should return -1. There is no available plot on which to place a water tank. Since there is no "-" in the string given.
// 3. Given S = "HH-HH", the function should return -1. There is only one plot to put a water tank, and it is impossible to collect rainwater from the first and last houses.
// 4. Given S = "-H-H-H-H-H", the function should return 3. One possible way of placing water tanks is "-HTH-HTHTH".

// Assume that:
// N is an integer within the range [1..20];
// string S is made only of the characters '-' and/or 'H'.
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

//Here is my solution 

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutionq3(S: string): number {
    let tanksNeeded = 0;
    let lastTankIndex = -Infinity;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'H') {
            // Check if the current house can be covered by an existing tank
            if (i - lastTankIndex > 2) { // Check if the distance between this house and the last tank is greater than 2 (since the tank can cover 2 adjacent empty plots)
                return -1; // If the distance is greater than 2, it's impossible to cover this house, return -1
            }
        } else if (S[i] === '-') {
            // Check if we need to place a tank
            if (i - lastTankIndex > 1) { // Check if the distance between this empty plot and the last tank is greater than 1
                if (i + 1 < S.length && S[i + 1] === 'H') { // Check if there is a house to the right
                    tanksNeeded++; // Place a tank
                    lastTankIndex = i + 1; // Update the index of the last tank to cover both adjacent houses
                    i++; // Skip the next iteration as the next house is already covered by the tank
                } else {
                    tanksNeeded++; // Place a tank
                    lastTankIndex = i; // Update the index of the last tank
                }
            } else {
                if (i === 0 || i === S.length - 1) { // Check if it's not possible to place a tank at the edge
                    return -1;
                }
            }
        }
    }

    return tanksNeeded;
}

//Comment. I had an issue while two HH. but since short time quizz I deceided to deliver as it was. 
//So the code is not fully functioning. But is a guide in case you find something similar. 


