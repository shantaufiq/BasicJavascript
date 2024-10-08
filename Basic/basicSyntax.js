
//! Expression dan Statement
const age = 23; // nama => statement | isi defaultnya => expression
const name = 'taufiq';
// console.log(`Nama ${name}, umur saya: ${age} tahun.`);

//! Mengubah nilai variable
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

//! Function
// struktur penulisan => function_keyworld + Identifier()
function ChangeStrValue(){ 
    console.log(strNumber); // output: "123"
}

// parameter 
function IncreaseValue(paramA, paramB){
    // return value (expression)
    return paramA + paramB;
}
// function expression 
const functIncrease = IncreaseValue(1,2); // declaration 

//! Arrow Function
const CombineName = (firstName, LastName) => {
    return `the name is ${firstName} ${LastName}`
}
