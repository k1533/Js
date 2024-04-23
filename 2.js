//how to create multiple object using function
function User(fname,lname,gender,age,goal){
    var user = {};
    user.fname = fname;
    user.lname = lname;
    user.Gender = gender;
    user.age = age;
    user.Goal = goal;
    user.about = function(){
        console.log(`My name is ${user.fname} ${user.lname}.`);
    };
    user.is18 = function(){
       console.log( user.age>=18);
    }
    return user;
}
const Person1 = User("Arin","Prajapati","Male",39,"CM");
const Person2 = User("Ariya","Prajapati","Female",36,"Worker");
console.log(Person1);
Person1.about();
Person1.is18();
console.log(Person2);
Person2.about();