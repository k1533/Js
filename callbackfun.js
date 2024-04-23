// function Add(n1,n2){
//     return n1+n2;
// }
// function sub(n1,n2){
//     return n1-n2;
// }
// function mul(n1,n2){
//     return n1*n2;
// }


// function All(a,b,choice){
    // switch(choice){
    //     case '+' : return Add(a,b);
    //     case '-' : return sub(a,b);
    //     case '*' : return mul(a,b);                  
    // }
    
// }
// var ans = All(12,13,'-');
// console.log(ans);



/*
// user input 5 values 
    1) user choice 
        - number
        - string
        - array


        number : 
                 Enter 4 numbers   n1,n2....
        string : 
                 Enter 4 strings   str1,str2....
        array : 
            1) number array 
            2) string array

            1 - 4 number  store -arr[]
            2 - 4 string  store -arr[]


            number : add,sub,mul 
            string : concat


            Array : 1) number square + addtion
*/ 







function All(){
    console.log("Enter 1) for  Number!!1");
    console.log("Enter 2) for  String1");
    console.log("Enter 3) for  Array1");
    var choice =prompt("Enter Your Choice!!");
    switch(choice){
        case '1' : return num();
        case '2' : return str();
        case '3' : return arr();                  
    }
    
}
All()
function num(){
    console.log("You Enter Number!!!")
    let num1=+prompt("Enter The Number 1:");
    let num2=+prompt("Enter The Number 2:");
    let num3=+prompt("Enter The Number 3:");
    let num4=+prompt("Enter The Number 4:");
    console.log("1) Add");
    console.log("2) Sub");
    console.log("3) Mul");
    console.log("3) Div");
    var choice2=+prompt("Enter your Choice :")
    switch(choice2){
     case 1 : return Add(num1,num2,num3,num4);
     case 2 : return sub(num1,num2,num3,num4);
     case 3 : return mul(num1,num2,num3,num4);
     case 4 : return div(num1,num2,num3,num4);                  
 }
    
}

function Add(num1,num2,num3,num4){
 console.log("Sum of num1="+num1 ,"num2="+num2 ,"num3="+num3 ,"num4="+num4,":" ,num1+num2+num3+num4); 
}
function sub(num1,num2,num3,num4){
 console.log("Sub of num1="+num1 ,"num2="+num2 ,"num3="+num3 ,"num4="+num4,":" ,num1-num2-num3-num4);
}
function mul(num1,num2,num3,num4){
 console.log("Mult of num1="+num1 ,"num2="+num2 ,"num3="+num3 ,"num4="+num4,":" ,num1*num2*num3*num4);
}
function mul(num1,num2,num3,num4){
    
    console.log("Div of num1="+num1 ,"num2="+num2 ,"num3="+num3 ,"num4="+num4,":" , num1/num2/num3/num4);
   }
function str(){
    console.log("You Enter String!!!")
    let num1=prompt("Enter The String 1:");
    let num2=prompt("Enter The String 2:");
    let num3=prompt("Enter The String 3:");
    let num4=prompt("Enter The String 4:");

    console.log("Div of num1="+num1 ,"num2="+num2 ,"num3="+num3 ,"num4="+num4,":"+num1+num2+num3+num4);
} 


function arr(){

}
//TODO: Update note text when  
