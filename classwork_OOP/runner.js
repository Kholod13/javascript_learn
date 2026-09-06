import Employee from './Employee.js';

//create objects (Person -> Employee -> object)
const emp_1 = new Employee("John", "Rambo", "M", "1946-01-01", 5000);
const emp_2 = new Employee("Jack", "Dou", "M", "1966-01-01", 3600);

//use methods
 console.log(emp_1.toString());
 console.log(emp_2.toString());