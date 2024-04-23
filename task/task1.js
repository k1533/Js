// 1. Write a JavaScript program that displays the largest integer among two integers.
  
// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2 (user define)
// Output : The sign is -
// 3+2+(-7) =-2
  
// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
  
// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
  
// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------
  

// 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A
  
// 7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
  
// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or
// it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.
  
// 9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
  
// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.

// *
// * *
// * * *
// * * * *
// * * * * *
  
// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
  
// 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.




///////////////////////////////////////////////////1////////////////////////////////////////////////////

// var num1, num2;

// num1 = +prompt("Input the First integer: " );
// num2 = +prompt("Input the second integer: " );
// if (num1 > num2) {
//   console.log("NUM 1 IS BIGGER!!");  
//  } else if (num2 > num1) {
//     console.log("NUM 2 IS BIGGER!!");
    
//   } else {
//     console.log("NUM 1 AND NUM 2 ARE SAME!!");
//   }


//////////////////////////////////////////////////2//////////////////////////////////////////////////////

// var num1, num2,num3,num4;

// num1 = (+prompt("Input the First integer: " ));
// num2 = (+prompt("Input the second integer: " ));
// num3 = (+prompt("Input the Third integer: " ));
// num4=num1*num2*num3;
// console.log("1 NO:",num1);
// console.log("2 NO:",num2);
// console.log("3 NO:",num3);
// if(num4>0){
//   alert("Number Is Positive!! ");
// }
// else{
//   alert("Number Is Negative!! ");
// }



//////////////////////////////////////////////////3//////////////////////////////////////////////////////

// var num1, num2,num3,num4;

// num1 = (+prompt("Input the First integer: " ));
// num2 = (+prompt("Input the second integer: " ));
// num3 = (+prompt("Input the Third integer: " ));

// console.log("1 NO:",num1);
// console.log("2 NO:",num2);
// console.log("3 NO:",num3);

// if(num1>=num2 && num1>=num3){

//   if(num2>=num3){
//     console.log("NUMBER ARE:",num1 , num2 , num3);
//     alert("NUMBER ARE:",num1 , num2 , num3);
//   }
//   else{
//     console.log("NUMBER ARE:",num1 , num3 , num2);
//     alert("NUMBER ARE:",num1 , num3 , num2);
//   }
// }
// else if(num2>=num1 && num2>=num3){
//   if(num1>=num3){
//     console.log("NUMBER ARE:",num2 , num1 , num3);
//     alert("NUMBER ARE:",num2 , num1 , num3);
//   }else{
//     console.log("NUMBER ARE:",num2 , num3,  num1);
//     alert("NUMBER ARE:",num2 , num3,  num1);
//   }
// }

// else if(num3>=num1 && num3>=num2){
//   if(num1>=num2){
//     console.log("NUMBER ARE:",num3 , num1 , num2);
//     alert("NUMBER ARE:",num3 , num2,  num1);
//   }else{
//     console.log("NUMBER ARE:",num3 , num2,  num1);
//     alert("NUMBER ARE:",num3 , num2,  num1);
//   }
// }



//////////////////////////////////////////////////4//////////////////////////////////////////////////////


// var num1,num2,num3,num4,num5;

//   num1 = (+prompt("Input the First integer: " ));
//   num2 = (+prompt("Input the second integer: " ));
//   num3 = (+prompt("Input the Third integer: " ));
//   num4 = (+prompt("Input the Fourth integer: " ));
//   num5 = (+prompt("Input the Fiveth integer: " ));

//   console.log("1 NO:",num1);
//   console.log("2 NO:",num2);
//   console.log("3 NO:",num3);
//   console.log("4 NO:",num4);
//   console.log("5 NO:",num5);

// if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
//     console.log("Larger No is : ",num1);
//     alert("Larger No is : ",num1);
// } else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
//   console.log("Larger No is : ",num2);
//   alert("Larger No is : ",num2);
// } else if  (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5){
//   console.log("Larger No is : ",num3);
//   alert("Larger No is : ",num3);
// } else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5){
//   console.log("Larger No is : ",num4);
//   alert("Larger No is : ",num4);
// } else {
//   console.log("Larger No is : ",num5);
//   alert("Larger No is : ",num5);
// } 

//////////////////////////////////////////////////5//////////////////////////////////////////////////////

// var  x;
// x = (+prompt("Enter The Range: " ));

// for (let i = 0; i <= x; i++) {
//   if (i %2==0) {
//       console.log( "Even No is:",i);
//   }
//   else if (i% 2 != 0) {
//       console.log("Odd No is:",i);
//   }
// }


//////////////////////////////////////////////////7//////////////////////////////////////////////////////

// var  x;
// x = (+prompt("Enter The Range: " ));
// for (var i = 1; i <= x; i++) {
  
//   if (i % 3 == 0 && i % 5 == 0) {
//       console.log(" FizzBuzz",i);
//   }
//   else if (i % 3 == 0) {
//       console.log(" Fizz",i);
//   }
//   // Check if the number is divisible by 5
//   else if (i % 5 == 0) {
//       console.log(" Buzz",i);
//   }
//   else {
//       console.log(i);
//   }
// }


//////////////////////////////////////////////////9//////////////////////////////////////////////////////

// var num,original=0,rev;
// num1 = (+prompt("Input the First integer: " ));
// console.log(" NO:",num1);
// 	original=num;
// 	while(num!=0)
// 	{
// 	rev=(rev*10)+(num%10);
// 	num/=10;
// 	}
// 	if(original==rev){
// 	cout<<"\nREVERSE NO IS:"<<rev; }
// 	else{
// 	cout<<"\nREVERSE NO IS:"<<rev;}


//////////////////////////////////////////////////9//////////////////////////////////////////////////////

// var row,i,j;

// row = (+prompt("Enter The Row: " ));
// console.log(" row:",row);

// for (let i = 0; i < row; i++) {
//     var s = "";
//     for (let j = 0; j <= i; j++) {
//         s+="* ";
//     }
//     console.log(s);
// }


//////////////////////////////////////////////////pattern1//////////////////////////////////////////////////////

// var row,i,j;

// row = (+prompt("Enter The Row: " ));
// console.log(" row:",row);

// for (let i = 1; i <= row; i++) {
//     var s = " ";
//     for (let j = 1; j <= i; j++) {
//         s+=j;
//     }
//     console.log(s);
// }


//////////////////////////////////////////////////pattern2//////////////////////////////////////////////////////

// var row,i,j;

// row = prompt("Enter The Row : " );
// console.log(" row:",row);

// for (let i =65; i <=row; i++) {
//     var s = " ";
//     for (let j = 65; j <= i; j++) {
//         s+=j;
//     }
//     console.log(s);
// }


//////////////////////////////////////////////////pattern3//////////////////////////////////////////////////////


// var row, i, j;

// row = prompt("Enter The Row: ");
// console.log("row:", row);

// for (let i =65; i <=row; i++) {
//   var s = " ";
//   for (let j = 65; j <= i; j++) {
//       s+=charCodeAt j;
//   }
//   console.log(s);
// }


/*    *
    * * *
  * * * * *
* * * * * * *
* *       * *
* *       * *
*/

// var n = 4;
// var str = "";
// var str2;
// for (let i = 0; i < n; i++) {
//     //                4 - 0  
// console.log("\n");
//     str = "";
//     for (let j = 0; j <n-i-1; j++) {
//         str+="    ";
//     }
//     for (let j = 0; j <=i; j++) {
//         str+="*   ";
//     }
//     for (let j = 1; j <=i; j++) {
//         str+="*   ";
//     }
//     console.log(str);
// }
// for (let i = 0; i < n-2; i++) {
//     str2="";
//     console.log("\n");
//        for (let j = 0; j<n-2; j++) {
//         str2+="*   ";
//     }
//     for (let j = 0; j <3; j++) {
//         str2+="    ";
//     }
//     for (let j = 0; j<n-2; j++) {
//         str2+="*   ";
//     }
//      console.log(str2);
// }