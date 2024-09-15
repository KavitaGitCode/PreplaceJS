//show pass by value ...primitives
function incrementAge(age){ 
    return age = age + 1
}

let myAge = 10;
console.log(incrementAge(myAge)) //11
console.log(myAge) //10

//show by referncence...non-primitives
function incrementAgewithObj(obj){
    return obj.age = obj.age + 1
}

let user = {age: 10}

console.log(incrementAgewithObj(user));
console.log(user)



let a = [1];
let b = [1];
//
console.log(a === b, "even if they look same but they are different objects in memory ");

//primitive values copy by value
let ab = 1;
let ba = ab;

ab = 10;
console.log(ab, 'ab vlaue change' , ba, 'ba value is not change');

let company = {name: "Wipro"};

let anotherCompany = company;

console.log(company, anotherCompany); //{ name: 'Wipro' } { name: 'Wipro' }

company.name = "JIO";

console.log(company, anotherCompany); //{ name: 'JIO' } { name: 'JIO' }

company = {name: "IBM"}

console.log(company, anotherCompany); //{ name: 'IBM' } { name: 'JIO' }




