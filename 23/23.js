const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
// Print values of person using Object.keys
console.log(`${Object.keys(person)[0]}: ${Object.values(person)[0]}`);
console.log(`${Object.keys(person)[1]}: ${Object.values(person)[1]}`);
console.log(`${Object.keys(person)[2]}: ${Object.values(person)[2]}`);
//inizialmente ho consegnato con Object.entries(person) però stampa firstName,Mario
//poi la consegna specifica di usare obj keys ciao erik ;) 
