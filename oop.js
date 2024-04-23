//create a single Object :
// const Person1 = {
//     fname : "Arin",
//     lname : "Prajapati",
//     Gender : "Male",
//     Goal : "CM"
// };
// console.log(Person1);

//using Function :
function User(){
    var user = {};
    user.fname = "Arin";
    user.lname = "Prajapati";
    user.Gender = "Male";
    user.Goal = "CM";
    return user;
}
const Person = User();
console.log(Person);




// blue Print : 
// 1) using function :
// 2) using class :