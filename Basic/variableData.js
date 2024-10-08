//! Object
const user = {
    // properties
    'name': 'Taufiq',
    'country': 'Indonesia',
    age: 23 // key - value
}
const products = {name: 'sepatu', price: 250000}

user.name = 'Taufiq Shidiq'; // change value
const userName = user['name']; // get value
// const {name, country} = user; // object destructuring


console.log(userName, user['country']);