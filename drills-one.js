function getYearOfBirth(age){
    const yearOfBirth = 2018 - age;
    return yearOfBirth;
}
function createGreeting(name,age) {
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old
    I was born in ${yob}.`; 
      
}
console.log(createGreeting('sam',30));
