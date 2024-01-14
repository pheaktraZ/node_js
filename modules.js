// * 
// const a = require('./people'); // can ues this call any file

// console.log(a);
// console.log(a.people, a.ages);
// ** we require like this
const {people, ages} = require('./people')

console.log(people, ages);


// we can require from os = operating system 
const os = require('os'); // no need file 

console.log(os.platform(), os.homedir()); // log platform and home dir