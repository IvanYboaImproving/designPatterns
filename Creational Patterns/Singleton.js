class Offices {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;

        if (typeof Offices.instance === "object") {
            return Offices.instance;
        }

        Offices.instance = this;
        return this;
    }
};


let office1 = new Offices('Javascript', 100);
let office2 = new Offices('Java', 200);
console.log(office1);
console.log(office2);