const Person = {
    firstName : 'TOM',
    lastName : 'CAT',
    salary : 15000,
    getFullName : function(){
        return this.firstName+" "+this.lastName;
    },
    getBalance: function (amount) {
        return this.salary - amount;
    }
};

console.log(Person);

console.log(Person.getBalance(14000));