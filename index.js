"use strict";
/*//Q1: setup environment
//Q2:
var personName = 'Dawood';
console.log("\nHello" + " " + personName + ", " + "would you like to learn some python today?\n");

    //OUTPUT: Hello Dawood Muhammad, would you like to learn some python today?

//Q3:
personName = personName.toLowerCase();
console.log("\nlowercase name: " + personName);

personName = personName.toUpperCase();
console.log("\nuppercase name: " + personName);
//...
personName = personName.charAt(0).toUpperCase() + personName[0].slice(1);
console.log("\ntitlecase name: " + personName);

    //OUTPUT: lowercase name: dawood
    //OUTPUT: uppercase name: DAWOOD
    //OUTPUT:


//Q4:
var quote = "\nAlbert Einstein once said, \"A person who never made a mistake never tried anything new.\"\n";
console.log(quote);

    //OUTPUT: Albert Einstein once said, "A person who never made a mistake never tried anything new."

//Q5:
var famous_person = "Albert Einstein";
var quoteMessage = famous_person + " once said,\" A person who never made a mistake never tried anything new.\"\n";
console.log(quoteMessage);

    //OUTPUT: Albert Einstein once said, "A person who never made a mistake never tried anything new."

//Q6:
console.log("\tDawood\nDawood");
    //OUTPUT:         Dawood
    //OUTPUT: Dawood

//Q7 - Q8:
console.log(2+6);
console.log(10-2);
console.log(2*4);
console.log(64/8);

    //OUTPUT: 8
    //OUTPUT: 8
    //OUTPUT: 8
    //OUTPUT: 8

//Q9:
var favNum = 8;
console.log("My favourite number is: " + favNum + " and it\'s an even number.");
    //OUTPUT: My favourite number is: 8 and it's an even number.

//Q10:
// this is a single line comment
/* this is a
    multiline comment*/
//Q11:
const array = ["dawood", "suleman", "ahmad"];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
//OUTPUT: dawood
//OUTPUT: suleman
//OUTPUT: ahmad
//Q12:
console.log(array[0] + " is me.");
console.log(array[1] + " is my brother.");
console.log(array[2] + " is our friend.");
//OUTPUT: dawood is me.
//OUTPUT: suleman is my brother.
//OUTPUT: ahmad is our friend.
//Q13: 
const vehicles = ["Yamaha MT 07", "Corvete c8"];
console.log("\nI would love to own " + vehicles[0] + ", \nand " + "my favourite car that is " + vehicles[1] + " :)");
//OUTPUT:
// I would love to own Yamaha MT 07,
// and my favourite car that is Corvete c8 :)
//Q14:
const dinnerGuests = ["Ahmad", "Suleman", "Omer"];
console.log("\nI would like to invite my friends: " + dinnerGuests[0] + ", " + dinnerGuests[1] + " and " + dinnerGuests[2] + " to a dinner at my home.\n");
//Q15:
console.log("\nJust came to know that " + dinnerGuests[0] + " cannot attend the dinner.\n");
dinnerGuests[0] = "Asad";
console.log("\nAm inviting " + dinnerGuests[0] + " to the dinner at my home, along with " + dinnerGuests[1] + " and " + dinnerGuests[2] + ".");
//OUTPUT Q14 - 15:
// I would like to invite my friends: Ahmad, Suleman and Omer to a dinner at my home.
// Just came to know that Ahmad cannot attend the dinner.
// Am inviting Asad to the dinner at my home, along with Suleman and Omer.
//Q16:
dinnerGuests.unshift("Hunzla");
dinnerGuests.push("Hamad");
dinnerGuests.splice(2, 0, "Subhan", "Arfa");
console.log("\nI have found a bigger dinning table so am inviting other friends as follow:\n");
console.log(dinnerGuests[0] + "\n" + dinnerGuests[1] + "\n" + dinnerGuests[2] + "\n" + dinnerGuests[3] + "\n" + dinnerGuests[4] + "\n" + dinnerGuests[5] + "\n" + dinnerGuests[6] + ".");
//OUTPUT:
// I have found a bigger dinning table so am inviting other friends as follow:
// Hunzla
// Asad
// Subhan
// Arfa
// Suleman
// Omer
// Hamad.
//Q17:
console.log("\nAs my dinner table is late so,\n");
var guest1 = dinnerGuests.shift(); //to delete first index elemet
console.log("Sorry, " + guest1 + " I cannot invite you to dinner.\n");
guest1 = dinnerGuests.shift();
console.log("Sorry, " + guest1 + " I cannot invite you to dinner.\n");
guest1 = dinnerGuests.pop(); //to delete last index element
console.log("Sorry, " + guest1 + " I cannot invite you to dinner.\n");
guest1 = dinnerGuests.pop();
console.log("Sorry, " + guest1 + " I cannot invite you to dinner.\n");
guest1 = dinnerGuests.pop();
console.log("Sorry, " + guest1 + " I cannot invite you to dinner.\n");
let totalDinnerGuests = dinnerGuests.length;
console.log("\nNow only " + dinnerGuests[0] + " and " + dinnerGuests[1] + " are invited.\n");
dinnerGuests.shift();
dinnerGuests.shift();
console.log("\nreturning empty array of guests:  ");
console.log(dinnerGuests);
//OUTPUT:
// As my dinner table is late so,
// Sorry, Hunzla I cannot invite you to dinner.
// Sorry, Asad I cannot invite you to dinner.
// Sorry, Hamad I cannot invite you to dinner.
// Sorry, Omer I cannot invite you to dinner.
// Sorry, Suleman I cannot invite you to dinner.
// Now only Subhan and Arfa are invited.
// returning empty array of guests:
// []
//Q18:
const placesToVisit = ["London", "Grand Canyon", "Sydney", "Rome", "Tokyo"];
console.log("\nPlaces to visit Array in original form: " + placesToVisit);
const alphabeticalArray = placesToVisit.slice(); //creats shallow copy
alphabeticalArray.sort();
console.log("Array in alphabetical order: " + alphabeticalArray);
console.log("Array in its original form: " + placesToVisit);
const reverseArray = placesToVisit.slice();
reverseArray.sort((a, b) => b.localeCompare(a));
console.log("\nArray in reverse order: " + reverseArray);
console.log("Array in its original form: " + placesToVisit);
const placesToVisitCopy = placesToVisit.slice();
placesToVisit.sort((a, b) => b.localeCompare(a)); //original array in alphabetical order using sort()
console.log("Original array in reverse: " + placesToVisit);
console.log("Original order of Array (copy): " + placesToVisitCopy);
placesToVisit.sort();
console.log("Original Array in alphabetical order: " + placesToVisit);
//OUTPUT:
// Places to visit Array in original form: London,Grand Canyon,Sydney,Rome,Tokyo
// Array in alphabetical order: Grand Canyon,London,Rome,Sydney,Tokyo
// Array in its original form: London,Grand Canyon,Sydney,Rome,Tokyo
// Array in reverse order: Tokyo,Sydney,Rome,London,Grand Canyon
// Array in its original form: London,Grand Canyon,Sydney,Rome,Tokyo
// Original array in reverse: Tokyo,Sydney,Rome,London,Grand Canyon
// Original order of Array (copy): London,Grand Canyon,Sydney,Rome,Tokyo
// Original Array in alphabetical order: Grand Canyon,London,Rome,Sydney,Tokyo
//Q19:
console.log("\nTotal guests at dinner are: " + totalDinnerGuests);
//OUTPUT:
// Total guests at dinner are: 2
//Q20:
const languages = ["Urdu", "Saraiki", "English", "Arabic", "Gesture Language"];
for (let lang of languages) {
    console.log("\nI want to learn: " + lang);
}
//OUTPUT:
// I want to learn: Urdu
// I want to learn: Saraiki
// I want to learn: English
// I want to learn: Arabic
// I want to learn: Gesture Language
//Q21:
const shoppingProducts = {
    products: [
        {
            name: "iPhone 15 Pro",
            id: 1,
            price: 990,
            description: "Coming Soon"
        },
        {
            name: "Samsung S23",
            id: 2,
            price: 850,
            description: "Coming Soon"
        }
    ],
};
//Q22:
console.log(dinnerGuests[3]); //as 3rd index doesn't exists
//OUTPUT:  undefined
//Q23:
let car = "subaru";
let bike = "yamaha";
if (car == "subaru")
    console.log("true the string matched");
else
    console.log("string didnot match");
if (bike == "mt07")
    console.log("true the string matched");
else
    console.log("string didnot match");
//Q24:
// Tests for equality and inequality with strings
const string1 = "hello";
const string2 = "world";
// Tests using the lower case function
const lowerCaseString1 = string1.toLowerCase();
const lowerCaseString2 = string2.toLowerCase();
console.log(lowerCaseString1 === lowerCaseString2); // true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const number1 = 10;
const number2 = 20;
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
// Tests using "and" and "or" operators
const condition1 = number1 === 10;
const condition2 = number2 === 20;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
// Test whether an item is in a array
const arrayIn = ["hello", "world"];
console.log("hello" in arrayIn);
console.log("world" in arrayIn);
console.log("goodbye" in arrayIn);
// Test whether an item is not in a array
console.log("goodbye" in arrayIn);
//Q25:
// Alien Colors #1
var alienColor = "green";
if (alienColor === "green") {
    console.log("Player earned 5 points for shooting the green alien.");
}
//Q26:
// Alien Colors #2
var alienColor = "yellow";
if (alienColor === "green") {
    console.log("Player earned 5 points for shooting the green alien.");
}
else {
    console.log("Player earned 10 points for shooting the yellow alien.");
}
//Q27:
// Alien Colors #3
var alienColor = "red";
if (alienColor === "green") {
    console.log("Player earned 5 points for shooting the green alien.");
}
else if (alienColor === "yellow") {
    console.log("Player earned 10 points for shooting the yellow alien.");
}
else {
    console.log("Player earned 15 points for shooting the red alien.");
}
//Q28:
const age = 2;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Q29:
const favFruits = ["banana", "mango", "strawberry"]; //generic array type declaration
if ("banana" in favFruits)
    console.log("I like bananas.\n");
else if ("strawberry" in favFruits)
    console.log("I like strawberry\n");
else if ("watermelon" in favFruits)
    console.log("I like watermelon");
else if ("mango" in favFruits)
    console.log("I like mangos");
else if ("melon" in favFruits)
    console.log("I like melon");
//Q30:
const greetArray = ["Eric", "Sam", "Admin", "Sailor", "Raymond"];
for (let i = 0; i <= greetArray.length; i++) {
    if ("Admin" == greetArray[i]) {
        console.log(`Hello ${greetArray[i]}, would you like to see status report?\n`);
    }
    else {
        console.log(`Hello ${greetArray[i]}, Thank You for logging again.`);
    }
}
//Q31:
if (greetArray.length == 0)
    console.log("We need to find some users\n");
else {
    greetArray.length = 0;
    console.log("We need to find some User.");
}
//Q32:
const currentUsers = ["johndoe", "janedoe", "peter", "mary", "admin"];
const newUsers = ["johndoe", "JOHNDOE", "peter", "mary", "newuser"];
for (const newUser of newUsers) {
    const isUsernameAvailable = currentUsers.findIndex((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()) === -1;
    if (!isUsernameAvailable) {
        console.log(`The username ${newUser} is not available.`);
    }
    else {
        console.log(`The username ${newUser} is available.`);
    }
}
//Q33:
const ordinalNo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= ordinalNo.length; i++) {
    if (ordinalNo[i] == 1)
        console.log(ordinalNo[i] + "st\n");
    else if (ordinalNo[i] == 2)
        console.log(ordinalNo[i] + "nd\n");
    else if (ordinalNo[i] == 3)
        console.log(ordinalNo[i] + "rd\n");
    else if (ordinalNo[i] >= 4)
        console.log(ordinalNo[i] + "th\n");
}
//Q34:
const favoritePizzas = ["pepperoni", "cheese", "sausage"];
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log(`I really love pizza!`);
//Q35:
const animals = ["dog", "cat", "fish"];
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet!`);
}
console.log(`Any of these animals would make a great pet!`);
//Q36:
// let inviteArray = ["Dawood" , "Suleman" , "Ahmad" , "Umer"];
// console.log(inviteArray.length);
// let notinvited = inviteArray.shift();
// console.log(notinvited);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newFruitsArray = fruits.sort();
// console.log(fruits);
// console.log(newFruitsArray);
// const arr = ["home", "alpha", "banana"];
// const arrSorted = arr.sort();
// console.log(arr); //[2, 1, 3]
// console.log(arrSorted); //[1, 2, 3]
/*
class Employee {
    name: string;
    id: number;
    address: string;

    constructor(name: string, id: number, address: string){
        this.name = name;
        this.id = id;
        this.address = address;
    }

    getNameWithAddress(){

        console.log(`${this.name} lives in ${this.address}`);
    }
}

let Einfo = new Employee("Dawood", 608 , "Islamabad");

console.log(Einfo);
Einfo.getNameWithAddress();
*/
