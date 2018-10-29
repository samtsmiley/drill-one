function createGreeting(name,age) {
    const yearOfBirth = 2018 - age;
    return `Hi, my name is ${name} and I'm ${age} years old
    I was born in ${yearOfBirth}.`;   
}

console.log(createGreeting('sam',30));
