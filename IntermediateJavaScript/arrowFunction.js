function addition(num1,num2){
    return num1+num2;
}

console.log("First method: "+addition(10,20));

//single parameter arrow function
const doubleIt = num1 => num1*2;

console.log("Single parameter arrow function: "+doubleIt(10));

//multiple parameter arrow function
const add = (num1,num2)=> num1+num2;

console.log("Double parameter arrow function: "+add(10,20));

//multiline arrow function

const calculate =(num1,num2) =>{
    const add = num1+num2;
    const sub = num2 - num1;
    const result = add*sub;
    return result;
}

console.log(calculate(10,20));