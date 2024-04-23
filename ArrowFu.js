
//Arrow Function : 

// 1) without argument and without return type
// var Hello = ()=>console.log("Hello Everyone !!!!");
// Hello();




// 2) with argument and without return type
// var Add = n1=>console.log(n1);
// Add(12);//12,13, Argument


// var Add = n1=>{//perameter
//     console.log(n1);
// }
// Add(12);//12,13, Argument

// var Add = (n1,n2)=>{//perameter
//     console.log(n1+n2);
// }
// Add(12,13);//12,13, Argument



// 3) without argument and with return type
// var Multiply = ()=>{return 2*2;}//return type
// var ans =  Multiply();
// console.log(ans);





// 4) with argument and with return type

// var Sum =  (n1,n2)=>{ //n1,n2 Perameter
//     return n1+n2;//return type
// }
// var output = Sum(1,2);//1,2 argument
// console.log(output);
















/////////////////////////////////////////////////////////EXERCISE/////////////////////////////////////////



// function Expression  
// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. 
    
// var  Palindrome=function(string) {
//     var arrayValues = string.split('');
//     var reverseArray = arrayValues.reverse();
//     var reverseString = reverseArray.join('');
//     console.log("Enter the is:",string)
//     if(string == reverseString) {
//         console.log('It is a palindrome is string is:',reverseString);
//     }
//     else {
//         console.log('It is not a palindromeis string is:',reverseString);
//     }
// }
// let string = prompt('Enter a string: ');
// Palindrome(string);


// Function Arrow
// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g 

// var Combinations = (str) => {
//     var combinations =[ ];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length + 1; j++) {
//             combinations.push(str.slice(i, j));
//         }
//     }
//     return combinations;
// }
// console.log(Combinations(prompt("Enter the String:")));
  

// IIFE 
// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// (function sor(str) {
//     var arr = str.split(""); 
//     res = arr.sort().join(""); 
//     return res; 
//   }( str=prompt("Enter the string"),
//      console.log(sor(str))));