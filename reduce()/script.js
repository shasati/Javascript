// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$${total}`)

// function sum(accumulator, element) {
//     return accumulator + element;
// }

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}