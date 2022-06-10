const person = {
  get first() {
    return `${this.name}`;
  },

  get last() {
    return `${this.surname}`;
  },

  set first(first) {
    this.name = first;
  },
  
  set last(last) {
    this.surname = last;
  },

  fullName: function  () {
    return `${this.name} ${this.surname}`;
  },
};

const john = Object.create(person);
john.name = 'Jonh';
john.surname = 'Doe';

const simon = Object.create(person);
simon.name = "Simon"
simon.surname = "Collins"

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
