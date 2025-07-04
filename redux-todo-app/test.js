import {produce} from 'immer'

//* pure function

// const add = (a, b) => a + b;

// console.log(add(0, 1))
// console.log(add(1, 1))
// console.log(add(2, 1))

//* Impure function
// let total = 0
// const addToTotal = (amount) => (total = total + amount)

// console.log(addToTotal(4))


// const updateDate = () => {
//     new Date()
// }

// const randomNumber = (amount) => {
//     return amount + Math.random()
// }

// console.log(randomNumber(3))
// console.log(randomNumber(3))
// console.log(randomNumber(3))
// console.log(randomNumber(3))


//* -----------------------------------

// const employee = {
//     name: 'Mahdi',
//     address: {country: 'Bangladesh', city: 'Lakhsmipur'}
// }

// const employee2 = {
//     ...employee,
//     name: 'Hassan',
//     address: {...employee.address, city: 'Chittagong'}
// }

// console.log(employee == employee2)
// console.log(employee)
// console.log(employee2)


//* --------------------------
// const employee = {
//     name: 'Mahdi',
//     address: {country: 'Bangladesh', city: 'Lakhsmipur'}
// }

// const employee2 = produce(employee, (draft)=> {
//     draft.name = "Hassan",
//     draft.address.city = "Chittagong"
// })

// console.log(employee)
// console.log(employee2)

//* --------------------
//* Curring / Function Curry

//* Normal Function
// const add = (a, b) => a + b;

//* Curried
// const add = (a) => (b) => a + b;
// console.log(add(3)(5))


// function add(a){
//     return function (b){
//         return a + b
//     }
// }
// console.log(add(2))



function add(a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}


// const totalPrice = (amount, discount) => amount - amount * discount;
// console.log(totalPrice(100, 0.3))
// console.log(totalPrice(59, 0.3))


const totalPrice = (discount) => (amount) => amount - amount * discount
const withDiscount = totalPrice(0.3)

console.log(withDiscount(100))
console.log(withDiscount(300))
console.log(withDiscount(250))


