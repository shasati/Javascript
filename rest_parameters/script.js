// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result;
// }

// function average(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = sum(1, 2, 3, 4, 5);
// console.log(total);

// const avg = average(1, 3, 5, 7, 8);
// console.log(avg);

function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr", "SpongeBob", "SquarePants", "III");
console.log(fullName);