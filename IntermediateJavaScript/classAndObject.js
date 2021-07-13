class Student{
    constructor(id,name){
        this.id = id;
        this.name = name;
        this.school = "DHAKA COLLEGE";
    }
}

const st1 =new Student(1,"ABC");
const st2 =new Student(2,"XYZ");

console.log(st1);
console.log(st2);

console.log("NAME: "+st1.name);