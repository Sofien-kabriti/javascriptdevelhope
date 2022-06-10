const person = {
  firstName: 'John',
  lastName: 'Doe',
  city: 'Valencia',
  address: 'Via de la Verga 69',
  fullName: () => {
    return `${person.firstName} ${person.lastName}`
  },
};

  console.log(person.address.city); // Argh! Cannot read property 'city' of undefined
  console.log(person.fullName()); // Argh! Cannot read property 'fullName()' of undefined

