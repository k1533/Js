// if Statement :

// var n1 = 12;
// var n2 = 13;
// if(n1>n2)
// {
//     console.log("Number 1 is smaller than Number 2");
// }


// if_Else Statement : 

// var n1 = 13;
// var n2 = 13;
// if(n1<n2)
// {
//     console.log("Number 1 is smaller than Number 2");
// }
// else{
//     console.log("Number 1 is Grater than Number 2");
// }

// else_if statement : 

// var n1 = 13;
// var n2 = 13;
// if(n1<n2)
// {
//     console.log("Number 1 is smaller than Number 2");
// }
// else if(n1==n2){
//     console.log("Both numbers are equal")
// }
// else{
//     console.log("Number 1 is Grater than Number 2");
// }

// n1,n2,n3

// nested If else  : (Ladder If Else statement)

var n1 = 3;
var n2 = 3;
var n3 = 3;

if(n1>n2)
{
    if(n1>n3){
        console.log("Number 1 is greater than both number 2 and 3");
    }
    else if(n1==n3){
        console.log("Number 3 and 1 Greater than 2");
    }
    else{
        console.log("Number 3 is greater than both number 2 and 1");
    }
}
else if(n1==n2){
    if(n1>n3){
        console.log("Number 1 and 2 Greater than 3");
    }
    else if(n1==n3){
        console.log("All are Equal ");
    }
    else{
        console.log("Number 3 is greater than both number 2 and 1");
    }
}
else{
    if(n2>n3){
        console.log("Number 2 is greater than both number 1 and 3");
    }
    else if(n2==n3){
        console.log("Number 3 and 2 Greater than 1");
    }
    else{
        console.log("Number 3 is greater than both number 2 and 1");
    }
}

/*
1) Greater Number for 4 number.
*/ 


if(n1>n2 && n1>n3)
{
    console.log("Number 1 is greater than both number 2 and 3");
}
// ---
if(n1>n2 && n1==n3)
{
    console.log("Number 1 and Number 3 are greater than  number 2.");
}
if(n1>n2 && n1<n3)
{
    console.log("Number 3 is greater than both number 2 and 1");
}
// --------------
else if(n1==n2 && n1>n3)
{
    console.log("Number 1 and Number 2 are greater than  number 3.");
}
else if(n1==n2 && n1==n3)
{
    console.log("Number 1 and Number 2 and Number 3 are Equal.");
}
else if(n1==n2 && n1<n3)
{
    console.log("Number 3 is greater than both number 2 and 1");
}
// --------------
else if(n2>n1 && n2>n3)
{
    console.log("Number 2 is greater than both number 1 and 3");
}
else if(n2>n1 && n2==n3)
{
    console.log("Number 2 and Number 3 are greater than  number 1.");
}
else if(n2>n1 && n2<n3)
{
    console.log("Number 3 is greater than both number 2 and 1");
}