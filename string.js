
// What is a String in a JS :
// A string is a sequence of characters. It can be created using either single quotes or double quotes or backtick.
//          12345
// var str1 = "Zafar shabhaiasdfghjkloiuytfds";
// //          01234
// console.log(str1);
// var str2 = 'Royal';
// console.log(str2);
// var str3 = `Techno`;
// console.log(str3);

// console.log(typeof str1,typeof str2,typeof str3);


// console.log(str1.length);
// console.log(str1[str1.length-1]);


// var str1 = "             royal technosoft p ltd                   ";
// var str2 ="All";
// console.log("Main String :",str1);
// console.();
// Methods //property

// console.log(str1.length);

// 1) slice
//1)strting index  2)ending index(not included)
// console.log("slice : ",str1.slice(5,10));

// 2) substring
// string index,ending index     grater value always ending index
// console.log("substring :",str1.substring(5,10));

// 3) substr
//1) string point(index)    2) length 
// console.log("substr:",str1.substr(5,10));

//index
// console.log(str1.charAt(10));
//index
// console.log(str1.charCodeAt(1));//ASCII

// var x = str1+str2;
// console.log(x);

// var x = str1.concat(" Zafar ",str2," ",12);
// console.log("concatenation : ",x);

// var ans =  str1.includes("d",20);
// console.log("include 'p' ? ",ans);

// console.log(str1.indexOf("os"));
// console.log(str1.indexOf("z"));

// console.log(str1.lastIndexOf(' t'));

// console.log(str1.repeat(2));

// console.log(str1.replace("t","T"));

// console.log(str1.replaceAll("t","T"));


// console.log(str1.split(' '));

// console.log(str1.startsWith('r'));

// console.log(str1.endsWith(' '));

// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());

// var x = 12;
// console.log(x.valueOf());

// console.log( typeof(x.valueOf()));


// var str1 = ' kush ';
// console.log(str1.trim());
// console.log(str1.trimEnd());
// console.log(str1.trimStart());

// console.log(str1.valueOf());