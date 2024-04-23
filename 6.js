function User(fname,lname,gender,age,goal){
    this.fname = fname;
    this.lname = lname;
    this.Gender = gender;
    this.age = age;
    this.Goal = goal;
}
User.prototype = {
       about : function(){
            console.log(`My name is ${this.fname} ${this.lname}.`);
        },
        is18 : function(){
           console.log( this.age>=18);
        }
}
const Person1 =new User("Arin","Prajapati","Male",39,"CM");
const Person2 =new User("Ariya","Prajapati","Female",36,"Worker");
console.log(Person1);
Person1.about();
console.log(Person2);
Person2.about();