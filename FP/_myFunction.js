/* Functional Programming : paradigma pemrograman yang didasarkan pada fungsi matematika murni, 
yakni fungsi harus menghindari perubahan data sehingga selalu menghasilkan nilai sama ketika diberikan argumen sama. Konsep utama dalam FP meliputi pure function, high-order function, recursion, dan immutability*/


//! imperatif : menulis instruksi yang sifatnya langkah demi langkah
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark1 = [];
for(let i = 0; i < names.length; i++) {
    newNamesWithExcMark1.push(`${names[i]}!`);
}
// console.log(newNamesWithExcMark1); 

//! deklaratif : mengimplementasikan paradigma FP
const newNamesWithExcMark2 = names.map((name) => `${name}!`);

// console.log(newNamesWithExcMark2); 