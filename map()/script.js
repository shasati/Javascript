// const numbers = [1, 2, 3, 4, 5]

// const squares = numbers.map(square);

// console.log(squares)

// function square(element) {
//     return Math.pow(element, 2);
// }

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

// const studentsUpper = students.map(UpperCase);

// const studentsLower = students.map(LowerCase);

// console.log(studentsUpper);
// console.log(studentsLower);

// function UpperCase(element) {
//     return element.toUpperCase();
// }

// function LowerCase(element) {
//     return element.toLowerCase();
// }

const dates = ["2024-1-10", "2025-9-12", "2024-4-11"];

const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}