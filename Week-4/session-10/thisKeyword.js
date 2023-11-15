class Person {
	constructor(name, age, gender, nationality) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.nationality = nationality;
	}

	introduce() {
		return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}, nationality: ${this.nationality}`;
	}
}
  
let person1 = new Person("John Doe", 30, "Male", "US");
let person2 = new Person("Jane Doe", 33, "Female", "US");
let person3 = new Person("Deepak", 30, "Male", "India");
console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

class Student extends Person {
	constructor(name, age, gender, nationality, subject) {
		super(name, age, gender, nationality)
		this.subject = subject
	}
		
	study() {
		return `Name: ${this.name}, is studying ${this.subject}`;
	}
}

let student = new Student("Deepak", 30, "Male", "India", "Computer Science")
console.log(student.introduce())
console.log(student.study())
