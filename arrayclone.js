// // 1) primitive  datatype: 
// var n1 = 12;
// var n2 = n1;

// console.log("Number 1 is : ",n1);
// console.log("Number 2 is : ",n2);

// n1++;//number 1 increment
// console.log("Number 1 is after the Increment: ",n1);
// console.log("Number 2 is  after the Increment: ",n2);



// 2) refference datatype : 

// var Arr1 = [1,2,3];
// var Arr2 = Arr1;

// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);

// Arr1.push(100);
// Arr2.push(1000);
// console.log("Array1 after Pushing Value: ",Arr1);
// console.log("Array2 after Pushing Value: ",Arr2);

// #####################################################
//Array Clone
// const Arr1 = [1,2,3,4,5];
// const Arr2 = [];

// // 1) Using Loop 
// for (const value in Arr1) {
//     Arr2.push(Arr1[value]);
// }

// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);
// Arr1.push(100);

// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);

//2) concat Mathod 

// const Arr1 = [1,2,3,4,5];
// const Arr2 = Arr1.concat("zafar");
// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);
// Arr1.push(100);

// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);

// 3) slice
// const Arr1 = [1,2,3,4,5];

// const Arr2 = Arr1.slice();
// const Arr2 = Arr1.slice(1,4);

// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);
// Arr1.push(100);

// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);


// var Arr = [1,2,3,5].concat("zafar");
// console.log(Arr)


// 4) spread Operator "..."
// const Arr1 = [1,2,3,4,5];
// const Arr2 = [...Arr1];
// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);
// Arr1.push(100);

// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);


    // var Arr = [...1234567890];
    // console.log(Arr);


// Array //string  
// for (const iterator of oj) {
//     console.log(iterator)
// }



