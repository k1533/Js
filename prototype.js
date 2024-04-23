// object : reference
// proto [[prototype]] 


//function
// prototype 

// prototype != [[prototype]]

function User(){
    console.log("Hello Everyone");
}

User.about = "inner calling";
User();
console.log(User.about);


console.log(User.prototype);


const person = {
    lname : "shah"
};
person.fname = "Raj";
console.log(person);


// function 
// function + object (property)
// prototype : {}  empty object
//