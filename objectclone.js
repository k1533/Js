// const myobj1 = {
//     fname : "Nupur",
//     lname : "Thakkar",
//     age : 21
// };


// const myobj2 = myobj1;

// console.log("Obj1  : ",myobj1);
// console.log("Obj2  : ",myobj2);

// myobj2.gender = "female";

// console.log("Obj1  : ",myobj1);
// console.log("Obj2  : ",myobj2);


// spread Operator

// clone Object 
// const myobj2 = {...myobj1};
// console.log("Obj1  : ",myobj1);
// console.log("Obj2  : ",myobj2);

// myobj2.gender = "female";

// console.log("Obj1  : ",myobj1);
// console.log("Obj2  : ",myobj2);

// var Firstname = "Royal";

// const myobj1 = {
//     fname : "Nupur",
//     lname : "Thakkar",
//     age : 21
// };


// // console.log(myobj1.fname);


// var {fname:Firstname,age} = myobj1;

// console.log(Firstname);
// // console.log(age);
// // // console.log(fname);
// // Firstname = "N"
// // console.log(Firstname);

// console.log(myobj1)




// const Arr = ["item1","item2","item3"];
// console.log(Arr);


// var [v1,,,royal2] = Arr;


// console.log(v1);
// console.log(royal2);






// const myobj1 = {
//     fname : "Nupur",
//     lname : "Thakkar",
//     age : 21,
//     gender : "Female",
//     contact : 987654321,
//     Add : "Royal"
// };

// console.log(myobj1);

// const {fname:Firstname,age,...NewObj} = myobj1;
// console.log(Firstname);
// console.log(age);

// console.log(NewObj);


const Arr = ["item1","item2","item3","item4","item5"];
console.log(Arr);


var [,,...newArr] = Arr;



console.log(newArr);        