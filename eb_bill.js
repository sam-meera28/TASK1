let units=parseInt(prompt("Enter units:"));
function calculateBill(units){
    let bill=0;
    if(units<=100){
        bill=units*10;
    }else if(units<=200){
        bill=100*10+(units-100)*15;
    }else if(units<=300){
        bill=100*10+100*15+(units-200)*20;
    }else if(units>300){
        bill=100*10+100*15+100*20+(units-300)*25;
    }
    return bill;
}
let amount=calculateBill(units);
console.log(`The EB bill fot ${units} is: ${amount}`);