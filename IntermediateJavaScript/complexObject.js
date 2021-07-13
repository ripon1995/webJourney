const person={
    firstName: "AL AMIN",
    lastName: "RIPON",
    age: 25,
    address: "39/5/2 Mirhajirbag",
    cell: "01791015207",
    occupation: "Computer service",
    friends:[
        "abc",
        "def",
        "ghi",
        "jkl"
    ]
}

console.log(person.firstName +" " +person.lastName);

const {cell,lastName} = person;

console.log(cell, lastName);

const{friends} = person;

console.log(friends);

const FirstObject={
    name:"Ripon",
    contact:{
        mobile:"01791015207",
        phone:"7440303"
    }
}

const {phone} = FirstObject.contact;
console.log(FirstObject.name+" "+phone);