//CREATING ARRAY
/*let marks;
marks=[8,9,7,9,8];
let marks2=[8,9,7,9,8];
console.log(marks);
console.log(marks2);
console.log(typeof(marks));*/

//ACCESSING ARRAY ELEMENTS BY USING INDEX

//console.log(marks[1]);

//CHANGING ARRAY ELEMENTS BY USING INDEX
/*marks[4]=9;
console.log(marks);*/

//TRAVERSAL ARRAY ELEMENTS USING LOOP
/*for(let i=0;i<marks.length;i++){
    console.log("element present at index",i,"is:",marks[i]);
}

for(let val of marks){
    console.log(val);
}

for(let key in marks2){
    console.log(key,":",marks2[key]);
}*/

//CALCULATING AVERAGE MARKS STORED IN AN ARRAY

/*let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log("Avg Marks is",avg);*/

/*let prices=[250,645,300,900,50];
console.log("BEFORE APPLYING OFFER PRICES ARE:");
console.log(prices);
for(let i=0;i<prices.length;i++){
   let offer=prices[i]*10/100;
    prices[i]=prices[i]-offer;
}
console.log("AFTER APPLYING OFFER PRICES ARE:");
console.log(prices);*/

/*let fruits=["apple","banana","custard apple","guava"];
fruits.push("jackfruit","melon");
console.log(fruits);
let fruit=["lemon","Mango"];
fruits.push(fruit);
console.log(fruits);
//console.log(fruit.pop());
let x=fruit.pop()
console.log(x);
console.log(fruit);

fruit.unshift("papaya","pine apple");
console.log(fruit);
console.log(fruit.shift());
console.log(fruit);
fru=fruit.toString();
console.log(fru);

let item=["pencil","pen","scale"];
let item1=["Eraser","Sharperner"];
item=item.concat("gum");
console.log(item);
//SLICE() DOES NOT MODIFY EXISTING ARRAY
let l=[1,2,3,4,5];
let l1=l.slice();
console.log(l1);
//SPLICE MODIFY EXISTING ARRAY
l.splice(2,1,101);
console.log(l);
l.splice(2,0,101);
console.log(l);
l.splice(3);  // FROM INDEX 3 ONWARDS IT REMOVE ALL ELEMENTS
console.log(l); 
l.splice(); //DO NOTHING
console.log(l);*/