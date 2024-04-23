//Expression Function : 

// 1) without argument and without return type
var Hello = function (){
    console.log("Hello Everyone !!!!");
}
// Hello();
// 2) with argument and without return type
var Add =  function (n1,n2){//perameter
    console.log(n1+n2);
}
// Add(12,13);//12,13, Argument
// 3) without argument and with return type
var Multiply =  function (){
    
    return 2*3;//return type
}
var ans =  Multiply();
// console.log(ans);

// 4) with argument and with return type

var Sum = function (n1,n2){ //n1,n2 Perameter
    return n1+n2;//return type
}
var output = Sum(1,2);//1,2 argument
// console.log(output);