const person = {
	_name: 'John Doe',
	_age: 30,
	_email: 'john.doe@example.com',
	get name() {
		return this._name;
	},
	get email() {
		return this._email;
	},
	set age(newAge) {
		this._age = newAge;
	},
	getAge() {
		return this._age;
	},
	setAge(newAge) {
		if (typeof newAge === 'number' && newAge >= 0) {
			this._age = newAge;
		} else {
			console.log('Invalid age value');
		}
	},
};

console.log('Name:', person.name);
console.log('Email:', person.email);

person.age = 35;
console.log('Age:', person.getAge());

person.setAge(40);
console.log('New Age:', person.getAge());
person.setAge(-5);
