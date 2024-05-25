console.log("Good Morning!!!")
//ABOUT VARIABLES
//BY USING VAR WE CAN REDECLARE EXISTING VARIABLE WE CAN UPDATE EXISTING VARIABLE VALUE AND IT HAS GLOBAL SCOPE
/*var age=18;
console.log(age);
var age=20;
console.log(age);
age=28;
console.log(age);
{
    var age=18;
    console.log(age);
}
console.log(age);*/
 
//BY USING let WE CANNOT REDECLARE EXISTING VARIABLE BUT  WE CAN UPDATE EXISTING VARIABLE VALUE AND IT HAS BLOCK SCOPE

/*let age=18;
console.log(age);
age=28;
console.log(age);
{
    let a="apple";
    console.log(a)
}*/
//ReferenceError: a is not defined
/*console.log(a);*/

//SyntaxError: Identifier 'age' has already been 
/*let age=20;
console.log(age);*/

//BY USING const WE CANNOT REDECLARE EXISTING VARIABLE ANS ALSO WE CANNOT UPDATE EXISTING VARIABLE VALUE AND IT HAS BLOCK SCOPE

/*const age=18;
console.log(age);
{
    const a="apple";
    console.log(a)
}*/
//ReferenceError: a is not defined
/*console.log(a);*/

// TypeError: Assignment to constant variable.
/*age=28;
console.log(age)*/

//SyntaxError: Identifier 'age' has already been 
/*const age=19;
console.log(age);*/