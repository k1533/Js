// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

// var arr1=[-3, 8, 7, 6, 5, -4, 3, 2, 1]

// var arr2=arr1.sort(
//     (a,b)=>{ return a-b })

// console.log("Ouput:",arr2);

// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// var max=1;
// var count=0;
// var item;

// for(let i=0;i<arr1.length;i++){
//     for(var j=0;j<arr1.length;j++){
//         if(arr1[i]==arr1[j])
//         count++;
//     if(max<count){
//         max=count;
//         item=arr1[i];
//     }
//     }
//     count=0;
// }
// console.log(item+"("+max+" Times)");


// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

// function swap(String) {
//     let result = '';
  
//     for (let i = 0; i < String.length; i++) {
//       const Char = String.charAt(i);
  

//       if (Char == Char.toUpperCase()) {
//         result += Char.toLowerCase();
//       } else {
//         result += Char.toUpperCase();
//       }
//     }
  
//     return result;
//   }
  
//   const String = prompt('Enter the String :');
//   const swappedString = swap(String);
//   console.log(swappedString);



// Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (let i=0;i<a.length;i++) {
//    console.log("row ", i);   
//    for (let j=0;j<a.length;j++) {
//       console.log(a[i][j]);
//    }
// }




// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

// var Arr = [...'asdfghjkjhgfdsa'];
// console.log("Array : ",Arr);
// var mySet= new Set(Arr);
// console.log(Array(...mySet));



// Write a JavaScript function to check whether an input is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true


// let string = prompt("Enter Character or Number: "); 

// if (typeof string == 'string') {
//     ans=confirm(typeof string=='string');
//     console.log("ENTER IS STRING:",string," ",ans);
//     console.log('Input is a string.');
// } else {
//     ans=confirm(typeof string=='string');
//     console.log("ENTER IS NOT STRING:",string," ",ans);
//     console.log('Input is not a string.');
// }


// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]


function array1(array) {
    return [...array];
}

array=[1,2,5,0,7,6]
  console.log(array1(array));   
  array1(array).push=[3,4,54] 
  console.log(array1(array));    
  
        //    or

  function array1(array2) {
      return array2.slice(0);
    }
    
    array2=[1,2,5,0,7,6]
  console.log(array1(array2));   
  array1(array2).push=('3','4','54') 
  console.log(array1(array2));   


        //   or

  array3=[1,2,5,0,7,6]
  console.log(array3);   
  let array4 = Array.from(array3) 
  console.log(array4);   





//   Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

