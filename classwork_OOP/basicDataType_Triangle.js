//basic dataType in OOP

class Triangle {
    a;
    b;
    #c; //private

    //methods(functions)

    constructor(a,b,c) {
       this.a = a;
       this.b = b;
       this.#c = c; //private
    }

    length() { return this.a + this.b + this.#c; }

    area() { return this.a * this.b * this.#c; }

}
//create object with using our dataType
const triangle1 = new Triangle(4, 8, 10);

console.log(triangle1.length());
console.log(triangle1.area());