class Subject{
     s1="Physics";
     s2 = "Chemistry";
}

class Student extends Subject{
    constructor(id,name){
        super();
        this.id = id;
        this.name = name;
        this.school = "DHAKA COLLEGE";
    }
    getStudentName(){
        return this.name;
    }
    setStudentName(name){
        this.name = name;
    }
}

const st1 = new Student(1,"ABC");
console.log(st1);

console.log("NAME: "+st1.getStudentName());

st1.setStudentName("XYZ");

console.log(st1);