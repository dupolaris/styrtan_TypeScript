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
