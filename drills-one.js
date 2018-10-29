function getYearOfBirth(age){
    if (age < 0) {
        throw new Error("Age can not be negative");
    }
    const yearOfBirth = 2018 - age;
    return yearOfBirth;
}
function createGreeting(name,age) {
    let yob;
    try {
        yob = getYearOfBirth(age);
    } catch (e) {
        console.log(e); 
    }
    return `Hi, my name is ${name} and I'm ${age} years old
    I was born in ${yob}.`;
}
console.log(createGreeting('sam',-1));
