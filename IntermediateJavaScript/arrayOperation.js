const oddNumbers =[1,3,5,7];
const evenNumbers = [2,4,6,8];

console.log(oddNumbers);
console.log(evenNumbers);

//using concat
const numbers = oddNumbers.concat(evenNumbers);
console.log(numbers);
//
const allNum = [...oddNumbers, ...evenNumbers];
console.log(allNum);