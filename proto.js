const obj1 = {
    key1 : "value1",
    key2 : "value2"
};
//1) object Literal
// const obj2 = {
//     key3 : "value3"
// };
console.log(obj1);
// console.log(obj2);
// console.log(obj2.key3);


// 2) Empty Object
// const obj2 = {};
// obj2.key3 = "value3";
// console.log(obj2.key2); #error

// 3) using Object.create();

const obj2 = Object.create(obj1);
obj2.key3 = "value3";
// obj2.key2 = "New";
console.log(obj2.key2);
console.log("Object2 Proto : ",obj2.__proto__);


//object : proto empty space 
//refference 
// __proto__ === [[prototype]] (proto)