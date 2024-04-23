//What is an  Object in a JS  : 
//An object is a user-defined data structure that consists of key - value pairs. It can be used to store related information, such as attributes

//An object is a collection of properties and methods. It can be thought of as a container for related data and functionality. In JavaScript, objects

// syntax  
/*
variable_type = var,let,const
ObjectName = any name  you want to give your object.
key1 = any identity
value1 = value associated with the key

variable_type ObjectName = {
    key1 : value1,
    key2: value2,
}
*/ 

// var Student1 = {
//     //key         // value            = property
//     first_name : 'Raj',
//     "last name" : "Sharma",
//     age : 20,
//     gender : true
//        1   : false
//       true :  1         
    //    kushal patel : 'Male'
    //    "kushal patel" : 'male'
        // kushal_patel : 'male'
// }


// console.log("My Object  :",Student1);

                        //    key
//      we can not write kushal patel : male
//      we can write "Kushal patel " or kushal_patel :male
// console.log(student1.kushal)
// console.log(student1['kushal'])
// ########################################
//How to  access Property value : 

//1) dot Notation 
// console.log("Student name (using dot notation ) : ",Student1.first_name);

//2) bracket Notation
// console.log("Student name (using Bracket notation ) : ",Student1["first_name"]);



//How to  access Property with key and value : 

// for (const key in Student1) {
//     // console.log(key);
// }

// for (const key in Student1) {
//     // console.log(typeof(key));

//                 key        // value
//     console.log(key,":",Student1[key]);//key = "'first_name'"
// }

// ########################################
// var Student1 = {
//     first_name : 'Raj',
//     "last name" : "Sharma",
//     age : 20,
//     gender : "male",
// }

// How to add new Property in a Object :

// 1) dot notation 
// Student1.number = 987654321;
// console.log("After adding number property using dot notation : ",Student1);

// 2) bracket notation

// Student1['keys'] = "values";
// console.log("After Adding keys as a property using bracket notation : ",Student1);

// ###############################################

// How to remove Property  from an object:
// console.log("Obje : ",Student1);

// // 1) dot Notation
// delete Student1.gender;
// console.log("After deleting the Gender property using delete keyword : ",Student1);

// // 2) bracket Notation
// delete Student1["last name"];
// console.log("After deleting last name property using bracket notation : ",Student1);

//////////////////////////////////////////////////

// How to Modify Property value  of existing key :
// var Student1 = {
//     first_name : 'Raj',
//     "last name" : "Sharma",
//     age : 20,
//     gender : "male",
// }

// 1) dot Notation 
// Student1.age = 21;
// console.log("Obj : ",Student1);
// Student1.Age = 10;   // Age is not present so it will create
// console.log("Obj : ",Student1);

// delete Student1; //error//not workable
// console.log(Student1);

