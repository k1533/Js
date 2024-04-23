// Generator Function (ES6)

// Syntax : 
/*
valid :
function* Hello(){
    code;
}

function *Hello(){
    code;
}

function*Hello(){
    code;
}
*/ 

function* Generator(){
    yield "Hello";
    // yield return 1;
    yield "Royal";
    yield "Techno";
}
var ans = Generator();

// console.log("First Part :",ans.next().value);
// // Generator().next();
// // console.log("Second Part :",ans.value);
// console.log("First Part :",ans.next().value);
// console.log("First Part :",ans.next().value);

// console.log("First Part :",ans.next().value);//
