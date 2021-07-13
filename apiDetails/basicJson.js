const user ={
    name:"ABC",
    address: "DHAKA"
}

//convert js object to JSON object
const userJSON = JSON.stringify(user);
console.log(userJSON);

//convert JSON object to js object
const userJS = JSON.parse(userJSON);
console.log(userJSON);