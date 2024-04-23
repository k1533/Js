function User(fname,lname,gender,age,goal){
    var user = Object.create(User.prototype);
    user.fname = fname;
    user.lname = lname;
    user.Gender = gender;
    user.age = age;
    user.Goal = goal;
    return user;
}
User.prototype = {
       about : function(){
            console.log(`My name is ${this.fname} ${this.lname}.`);
        },
        is18 : function(){
           console.log( this.age>=18);
        }
}
const Person1 = User("Arin","Prajapati","Male",39,"CM");
const Person2 = User("Ariya","Prajapati","Female",36,"Worker");
console.log(Person1);
Person1.about();
console.log(Person2);
Person2.about();

