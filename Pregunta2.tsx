//This is the question I got:

// You are given a string S of length N which encodes a non-negative number V in a binary form. Two types of operations may be performed on it to modify its value:
// if V is odd, subtract 1 from it;
// if V is even, divide it by 2.
// These operations are performed until the value of V becomes 0.
// For example, if string S = "011100", its value V initially is 28. The value of V would change as follows:
// V = 28, which is even: divide by 2 to obtain 14; V = 14, which is even: divide by 2 to obtain 7; • V = 7, which is odd: subtract 1 to obtain 6; • V = 6, which is even: divide by 2 to obtain 3; • V = 3, which is odd: subtract 1 to obtain 2; • V = 2, which is even: divide by 2 to obtain 1; • V = 1, which is odd: subtract 1 to obtain 0.
// Seven operations were required to reduce the value of V to 0. Write a function:
// function solution (S: string): number;
// that, given a string S consisting of N characters containing a binary representation of the initial value V, returns the number of operations after which its value will become 0.
// Examples:
// 1. Given S = "011100", the function should return 7. String S represents the number 28, which becomes 0 after seven operations, as explained above.
// 2. Given S = "111", the function should return 5. String S encodes the number V = 7. Its value will change over the following five operations:
// • V = 7, which is odd: subtract 1 to obtain 6; • V = 6, which is even: divide by 2 to obtain 3; • V = 3, which is odd: subtract 1 to obtain 2; • V = 2, which is even: divide by 2 to obtain 1;
// • V = 1, which is odd: subtract 1 to obtain 0.
// 3. Given S = "1111010101111", the function should return 22.
// 4. Given string S consisting of "1" repeated 400,000 times, the function should return 799,999.
// Write an efficient algorithm for the following assumptions:
// Notice.string S is made only of the characters '0' and/or '1'; • N, which is the length of string S, is an integer within the range [1..1,000,000];
// Notice. the binary representation is big-endian, i.e. the first
// character of string S corresponds to the most significant bit;
// the binary representation may contain leading zeros.

//Here is the answer: 

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutionq2(S: string): number {
    // Aqui convertimos el codigo binario a un valor V en funcion de      exponenciales. Entonces, "011100" se puede interpretar como: 0 * 2^5 + 1 * 2^4 + 1 * 2^3 + 1 * 2^2 + 0 * 2^1 + 0 * 2^0
    //Evaluando esta expresión: 0 + 16 + 8 + 4 + 0 + 0 = 28
        let V = parseInt(S, 2);
        
        //Creamos un contador de pasos
        let contadorOperaciones = 0;
        
        // Hacer operaciones hasta que el valor V se vuelve 0.
        while (V !== 0) {
            if (V % 2 === 0) {
                //Si V es par, divídalo por 2.
                V /= 2;
            } else {
                //Si V es nopar, divídalo por 2.
                V -= 1;
            }
            // sumar las operaciones.
            contadorOperaciones++;
        }
        
        // Retornar el contador que entrega la funcion como resultado.
        return contadorOperaciones;
    }

    //Comments. The presented code worked well . however it was NOT efficient. Mathematically speaking it crashed while 
    //larget binarian numbers. However. I did not have enought time. And I deceided to focus in quantity rather than quality 
    //since short term assgiment. 