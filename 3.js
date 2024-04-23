//how to create multiple object using function
const All_methods = {
    about : function(){
         console.log(`My name is ${this.fname} ${this.lname}.`);
     },
     is18 : function(){
        console.log( this.age>=18);
     },
     Hello : function(){
         console.log(`Hello ${this.about()}`);
     }
 }
 function User(fname,lname,gender,age,goal){
     var user = Object.create(All_methods);
     user.fname = fname;
     user.lname = lname;
     user.Gender = gender;
     user.age = age;
     user.Goal = goal;
     user.about = All_methods.about;
     user.is18 = All_methods.is18;
     return user;
 }
 const Person1 = User("Arin","Prajapati","Male",39,"CM");
 const Person2 = User("Ariya","Prajapati","Female",36,"Worker");
 console.log(Person1);
 Person1.about();
 console.log(Person2);
 Person2.about();
 Person1.Hello();