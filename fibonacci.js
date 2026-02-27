// MY ITERATIVE FIB FUNCTION
// function fibs(n) {
//     const fibArr = [];
//     for (let i = 0; i < n; i++) {
//         if (i < 2) fibArr.push(i);
//         else fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
//     }

//     return fibArr;
// }

// console.log(fibs(8)) // logs [0, 1, 1, 2, 3, 5, 8, 13]

// MY RECURSIVE FIB FUNCTION
// function fibsRec(n) {
//     let fibArr = [0, 1];
//     if (n === 1) return fibArr = [0];
//     else if (n === 2) return fibArr;
//     else {
//         const prevFib = fibsRec(n - 1);
//         fibArr = [...prevFib];
//         fibArr.push(prevFib[n - 2] + prevFib[n - 3]);
//     }
//     return fibArr;

// }

// console.log(fibsRec(8)) // logs [0, 1, 1, 2, 3, 5, 8, 13]

// STACKOVERFLOW HELP FOR RECURSIVE FIB #1
// function fibsRec2(n) {
//     if (n === 1) return [0];
//     else if (n === 2) return [0, 1];
//     else {
//         const fibArr = fibsRec2(n - 1);
//         fibArr.push(fibArr[n - 2] + fibArr[n - 3]);
//         return fibArr;
//     }

//     // return fibArr; // Doesn't work here because block scope

// }

// console.log(fibsRec2(8)) // logs [0, 1, 1, 2, 3, 5, 8, 13]

// STACKOVERFLOW HELP FOR RECURSIVE FIB #1
function fibsRec4(n) {
    if (n === 1) return [0];
    else if (n === 2) return [0, 1];
    else {
        const fibArr = fibsRec4(n - 1);
        return [...fibArr, fibArr[n - 2] + fibArr[n - 3]]
    }
}

console.log(fibsRec4(8)) // logs [0, 1, 1, 2, 3, 5, 8, 13]

// MY NOTES
// For fibs
    // fibs(8) should return [0, 1, 1, 2, 3, 5, 8, 13]

    // From wikipedia
        // F[0] = 0
        // F[1] = 1
        // F[n > 1] = F[n - 1] + F[n - 2]

// For fibsRec
    // fibsRec(8) = [fibArr[7], ...fibArr[6]]
    // fibsRec(3) = [fibsRec(2), fibArr[2]] = [0, 1, (F[n - 1] + F[n - 2])]
    // fibsRec(2) = [fibsRec(1), fibArr[1]] = [0, 1]
    // fibsRec(1) = [fibArr[0]] = [0]

// I think we can solve this similarly to factorials

// fibsRec(3) ... [0, 1] is fibArr
    // fibsRec(2) ... [0, 1]
        // fibArr.push(1) ... return [0, 1]