import Person from './Person.js';

export default class Employee extends Person { //inheritance
    #salary;
    constructor(firstName, lastName, gender, birthday, salary) {
        super(firstName, lastName, gender, birthday);
        this.#salary = salary;
    }

    salary() {
        return this.#salary;
    }

    toString() {
        return `${super.toString()} ${this.salary()}`;
    }
}

//extends - for  inheritance different class
//we need declare(обьявить) all properties in constructor
//super - for declaring properties from inheritance class (parent class)\
//super - also for using properties parent class in everywhere