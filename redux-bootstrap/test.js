//* pure function

const add = (a, b) => a + b;

// console.log(add(0, 1))
// console.log(add(1, 1))
// console.log(add(2, 1))

//* Impure function
let total = 0
const addToTotal = (amount) => (total = total + amount)

console.log(addToTotal(4))


const updateDate = () => {
    new Date()
}

const randomNumber = (amount) => {
    return amount + Math.random()
}

console.log(randomNumber(3))
console.log(randomNumber(3))
console.log(randomNumber(3))
console.log(randomNumber(3))