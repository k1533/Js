// const Arr = [1,2,3,4,5,"Royal"];
// console.log(Arr);
//1) push (last index ) add

// Arr.push(6,7,8,9,"Royal");
// console.log(Arr);

//2) pop  (last index) remove
// var ans = Arr.pop();
// Arr.pop();
// console.log(typeof ans);


//3) unshift  (start index ) add
// Arr.unshift("unshift",4,true);
// console.log(Arr);

//4) shift   (starting index) remove
// var ans = Arr.shift();
// Arr.shift();
// console.log(ans);

/////////////////////////
//5) sort 
// const Arr = [5,4,3,2,1,7,3];

const Arr = [1,1001,111,10011,11111,100001,11,1000000001];
console.log("Array : ",Arr);
// Arr.sort(
//     function (a,b){
//         return b-a;
// });
// console.log("Sorting Array : ",Arr);

// var temp ;
// for (let i = 0; i < Arr.length; i++) {
//     for (let j = 0; j < Arr.length; j++) {
//         if(Arr[i]<Arr[j])
//         {
//             temp = Arr[i];
//             Arr[i]= Arr[j];
//             Arr[j]= temp;
//         }
        
//     }
    
// }
// console.log("Sorting Array : ",Arr);

//  [1,1001,111,10011,11111,100001,11,1000000001];

// Arin :  1,11,111,1001,10011,11111,100001,1000000001
// Kushal :1,11,1001,111,10011,11111,100001,1000000001
// Rudra : 1,11,111,1001,1001,10011,11111,100001,100000000
// Kathan : 1, 11,111,1001,10011,11111,100001,1000000001
// S_B_Patel :1,1001,10011,100001,1000000001,11,111,11111

//output//[1, 1000000001, 100001, 1001, 10011, 11, 111, 11111]


// int Add(n1,n2){
//     return n1+n2;
    // if(a>b)
    // {
    //     a
    // }
// }


// Add(1,2);




//Practice task : 

//1) Create an empty array called myArray.
// const arr=[];
// console.log(arr);
// 2) Add the numbers 1, 2, and 3 to myArray using the push() method.
// const arr=['a',1,"string",`b`];
// console.log(arr);
// arr.push(1,2,3);
// console.log(arr);
// 3) Remove the last element from myArray using the pop() method.
// const arr=['a',1,"string",`b`];
// console.log(arr);
// arr.pop();
// arr.pop();
// console.log(arr);
// 4) Add the number 4 to the beginning of myArray using the unshift() method.
// const arr=['a',1,"string",`b`];
// console.log(arr);
// arr.unshift(1,2,3,4);
// console.log(arr);
// 5) Remove the first element from myArray using the shift() method.
// const arr=[10,'a',1,"string",`b`];
// console.log(arr);
// arr.shift();
// console.log(arr);
// 6) Sort the elements of myArray in ascending order using the sort() method.
// const arr=[2,99.1,0,3333,1,99.100,1];
// console.log(arr);
// arr.sort();
// console.log("Sorted array: ",arr);
// 7) Check the length of myArray using the length property.
// const arr=[2,99.1,0,3333,1,99.100,1];
// console.log(arr);
// arr.sort(function (a,b){
//             return a-b;
//     });
// console.log("Sorted array length: ",arr.length);