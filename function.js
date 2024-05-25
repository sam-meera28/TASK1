/*function fun(){
    console.log("Exploring Functions in JavaScript");
}
fun();
fun();*/
//PERFORMING ADDITION USING FUNCTION
/*Important Note Regarding Function
1.PASSING INPUT TO FUNCTION IS CALLED PARAMETER
2.PASSING VALUES IN FUNCTION CALL ARE CALLED ARGUMENTS
3.RETURN STATEMENT RETURN ONE VALUE
4.AFTER RETURN STATEMENT IF WE WRITE ANYTHING THAT WILL BE NOT EXECUTE
5.PARAMETERS ARE LOCAL VARIABLES AND IT HAVE BLOCK SCOPE.
*/

/*function sum(a,b){
    let add=a+b;
    console.log(`sum of ${a} and ${b} is ${add}`);
    return add;
}
let result=sum(10,9);
console.log(result);*/
//console.log(a);// ReferenceError: a is not defined
//ARROW FUNCTION

/*let arrow=()=>{
    console.log("Learning Arrow Function...");
}
console.log(arrow);
console.log(arrow());
let arrow1=()=> console.log("Learning Arrow Function...");
console.log(arrow1);
console.log(arrow1());*/

/*let sum=(a,b)=>{
    let s=a+b;
    console.log(s);
    console.log(a,b);
    return a+b;
}
let result=sum(11,5);
console.log(result);
console.log(sum(5,4));*/
//CREATE A FUNCTION USING THE "function" KEYWORD THAT TAKES A STRING AS AN ARGUMENT & RETURNS THE NUMBER OF VOWELS IN THE STRING.
/*function vowel(str){
    let count=0;
    for(let val of str){
        if(val==="A"||val==="E"||val==="I"||val==="O"||val==="U"||val==="a"||val==="e"||val==="i"||val==="o"||val==="u")
            {
                count++;  
            }
          
    }
    console.log(`${count} vowels are present in given ${str}`);
}
vowel("Aeroplane");*/
//CREATE AN arrow function TO PERFORM THE TASK.
/*let count=0;
let vowel=(str)=>{
    //let count=0;
    for(let val of str){
        if(val==="A"||val==="E"||val==="I"||val==="O"||val==="U"||val==="a"||val==="e"||val==="i"||val==="o"||val==="u")
            {
                count++;  
            }

    }
    return count;
   // console.log(count);
}
//vowel("aeroplanee");
console.log(vowel("air"));*/

//forEach function
let arr=[1,2,3,4,5];
/*arr.forEach(function a(val,i,ar){
    console.log(val,i,ar);
});*/

/*arr.forEach((val,i,ar)=>{
    console.log(val,i,ar);
});*/
//FOR A GIVEN ARRAY OF NUMBERS,PRINT THE SQUARE OF EACH VALUE USING THE forEach LOOP
/*arr.forEach(function square(val){
     let  value=val**2;
     console.log(value);
 });

 arr.forEach((val)=>{
    let sq=val**2;
    console.log(sq);
 });*/
 /*let a1=[9,8,7,6,5];
 function square(num){
    console.log(num*num);
 }
 let sq=(val)=>{
    console.log(val*val);
 }
 a1.forEach(square);
 console.log("************************************")
 a1.forEach(sq);*/

 //map
 /*let a1=[1,2,3,4];
 let a2=a1.map((val)=>{
    return val*2;
 });
console.log(a2);
let a3=a1.map(function double(val){
    return val*2;
 });
 console.log(a3);*/

 /*let city=["delhi","pune"];
 function change(value){
    return value.toUpperCase();
 }
 let c=city.map(change);
 console.log(c);*/

 let a=[5,10,15,20,25];
 /*function summ(){
    let sum=0;
    for(let val of a){
        sum=sum+val;
    }
    return sum;
 }
console.log(summ());*/

/*let ar=()=>{
    let sum=0;
    for(let val of a){
        sum=sum+val;
    }
   console.log(sum);
   //return sum;

}
ar();
//console.log(ar());*/

/*a.forEach((val,i)=>{
    console.log(val*2,i);
});
let m=a.map(function square(val){
    return val**2;
});
console.log(m);
let  n=a.filter(function even(val){
    return val % 2==0;
});
console.log(n);*/
/*let  p=a.reduce(function avg(){
    let sum=0,avg=0;
    for(let v of a){
        sum=sum+v;
    }
    avg=sum/2;
    return avg;
});
console.log(p);*/

/*function print(a,b){
    console.log(`value of a is ${a}`);
    return a+b;
    
}
 let c=print(5,8);
 console.log(c);*/

// let an=[1,2,3,4,5];
 /*an.forEach((val)=>{
    console.log(val*2);
 });
 let double=an.reduce((prev,cur)=>{
    return prev>cur?prev:cur;
 });
 console.log(double);*/

 //WE ARE GIVEN ARRAY OF MARKS OF STUDENTS.FILTER OUT OF THE MARKS OF STUDENTS THAT SCORED 90+.
/*let marks=[82,93,64,99,86];
let m=marks.filter((val)=>{
    return val>=90;
});
console.log(m);*/

//TAKE A NUMBER N AS INPUT FROM USER.CREATE AN ARRAY PF NNUMBERS FROM 1 TO N.
/*n=parseInt(prompt("Enter N value:"));
let a8=[];
for(let i=1;i<=n;i++){
    a8.push(i);
}
console.log(a8);
//USE THE REDUCE METHOD TO CALCULATE THE SUM OF ALL NUMBERS IN THE ARRAY
let sum=a8.reduce((prev,cur)=>{
    return prev+cur;
});
console.log("Sum of all numbers in the array are",sum);
//USE THE REDUCE METHOD TO CALCULATE PRODUCT OF ALL NUMBERS IN THE ARRAY.
let product=a8.reduce((prev,cur)=>{
    return prev*cur;
});
console.log("The product of all numbers in the given array are:",product);
*/
