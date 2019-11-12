
class Employee {
    constructor(name, id,email, title ){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    //a method that gets the employee name
    getName(name) {
        return this.name;
    }

    //a method that gets the employee id
    getId(id){
        return this.id;
    }

    //a method that gets employy email
    getEmail(email){
        return this.email;
    }

    //a method that checks and returns employee role
    getRole(title){
        return "Employee";
    }
}

module.exports = Employee;
