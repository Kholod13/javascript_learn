export default class Person{
    #firstName;
    #lastName;
    #gender;
    #birthday;

    constructor(firstName, lastName, gender, birthday) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#gender = gender;
        this.#birthday = birthday;
    }

    toString(){
        return `${this.#firstName}, ${this.#lastName} ${this.#gender} ${this.#birthday}`
    }
}