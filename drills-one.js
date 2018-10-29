function getYearOfBirth(age){
    if (age < 0) {
        throw new Error("Age can not be negative");
    }
    const yearOfBirth = 2018 - age;
    return yearOfBirth;
}
function createGreeting(name,age) {
    if (name === undefined || age === undefined ) {
        throw new Error('Usage: createGreeting(name, age)');
    }
    if (typeof name !== 'string' || typeof age !== 'number' ) {
        throw new Error('Please enter a valid name and use numbers for age');
    }
    let yob;
    try {
        yob = getYearOfBirth(age);
    } catch (e) {
        console.log(e); 
    }
    return `Hi, my name is ${name} and I'm ${age} years old\nI was born in ${yob}.`;
}
try {
console.log(createGreeting('sam',30));
} catch (e) {
    console.log(e);
}