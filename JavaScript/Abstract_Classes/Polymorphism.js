class Employee {
    constructor(){
        if(new.target === Employee) {
            throw new Error("Cannot instantiate abstract class Employee directly.");
        }
    }
    getSalary(){
        throw new Error("Abstract method 'getSalary()' must be implemented in subclass.");
    }
}

class FullTimeEmployee extends Employee {
    getSalary(){
        console.log("Salary for full time is 1000$");
    }
}
class PartTimeEmployee extends Employee {
    getSalary(){
        console.log("Salary for part time is 500$");
    }
}
class Freelancer extends Employee {
    getSalary(){
        console.log("Salary for Freelancer is 700$");
    } 
}

let employees = [new FullTimeEmployee(),new PartTimeEmployee(),new Freelancer()];

for (let emp of employees){
    emp.getSalary();
}
// Salary for full time is 1000$
// Salary for part time is 500$
// Salary for Freelancer is 700$