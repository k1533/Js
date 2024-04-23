//1) Prompt   (User Input)

// var n1 = Number(prompt("Enter the Value of N1 : "));
// var n2 = +prompt("Enter the Value of N2 : ");
// console.log(n1);
// console.log(n2);

// var b1 = Boolean(prompt("Enter the Value of N1 : "));

// console.log(typeof(n1));
// console.log(typeof(n2));
// console.log("Addition is : ",n1+n2);

// console.log(typeof prompt());

//2) alert   (pop's msg Show)

//3) confirm  (Confirmation)

// var n1 = Number(prompt("Enter the Value of N1 : "));
// var n2 = +prompt("Enter the Value of N2 : ");

// if(n1>n2)
// {
//     alert("Number 1 a is Greater");
// }
// else if(n1==n2)
// {
//     alert("Equal");
// }
// else{
//     alert("Number 2 is a Greater");
// }

// var a = alert("Ok");
// console.log(a);


var ans = confirm("are you sure ?");
console.log(ans);

if(ans == true)
{
    var n1 = Number(prompt("Enter the Value of N1 : "));
    var n2 = +prompt("Enter the Value of N2 : ");
        if(n1>n2)
        {
            alert("Number 1 a is Greater");
        }
        else if(n1==n2)
        {
            alert("Equal");
        }
        else{
            alert("Number 2 is a Greater");
        }
}
else{
    alert("You Press Cancel");
}