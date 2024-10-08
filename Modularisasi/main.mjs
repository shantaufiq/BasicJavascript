// import myFunction from './anotherFile.mjs';
// import { name, email, age } from './anotherFile.mjs';
import { myFunction as userFunction } from './anotherFile.mjs';
import * as variable from './anotherFile.mjs';

userFunction();
console.log(`${variable.name}, ${variable.email}, ${variable.age}`);
