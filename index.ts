//Q1: setup environment
//Q2: 
var personName = 'Dawood';
console.log("\nHello" + " " + personName + ", " + "would you like to learn some python today?\n");

//Q3:
personName = personName.toLowerCase();
console.log("\nlowercase name: " + personName);

personName = personName.toUpperCase();
console.log("\nuppercase name: " + personName);

personName = personName.charAt(0).toUpperCase() + personName[0].slice(1);
console.log("\ntitlecase name: " + personName); 

//Q4:
var quote = "\nAlbert Einstein once said, \"A person who never made a mistake never tried anything new.\"\n";
console.log(quote);

//Q5:
var famous_person = "Albert Einstein";
var quoteMessage = famous_person + " once said,\" A person who never made a mistake never tried anything new.\"\n";
console.log(quoteMessage);

//Q6:
console.log("\tDawood\nDawood");

//Q7 - Q8:
console.log(2+6);
console.log(10-2);
console.log(2*4);
console.log(64/8);

//Q9:
var favNum = 8;
console.log("My favourite number is: " + favNum + " and it\'s an even number.");

//Q11:
const array: string[] = ["dawood" , "suleman", "ahmad"];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//Q12:
console.log(array[0] + " is me.");
console.log(array[1] + " is my brother.");
console.log(array[2] + " is our friend.");

//Q13: 
const vehicles: string [] = ["Yamaha MT 07", "Corvete c8"];
console.log("\nI would love to own " + vehicles[0] + ", \nand " + "my favourite car that is " + vehicles[1] + " :)");

//Q14:
const dinnerGuests: string [] = ["Ahmad", "Suleman", "Omer"];
console.log("\nI would like to invite my friends: " + dinnerGuests[0] + ", " + dinnerGuests[1] + " and " + dinnerGuests[2] + " to a dinner at my home.\n");

//Q15:
console.log("\nJust came to know that " + dinnerGuests[0] + " cannot attend the dinner.\n");
dinnerGuests[0] = "Asad";
console.log("\nAm inviting " + dinnerGuests[0] + " to the dinner at my home, along with " + dinnerGuests[1] + " and " + dinnerGuests[2] + ".");

//Q16:
dinnerGuests.unshift("Hunzla");
dinnerGuests.push("Hamad");
dinnerGuests.splice(2, 0, "Subhan", "Arfa");
console.log("\nI have found a bigger dinning table so am inviting other friends as follow:\n");
console.log(dinnerGuests[0] + "\n" + dinnerGuests[1] + "\n" + dinnerGuests[2] + "\n" + dinnerGuests[3] + "\n" + dinnerGuests[4] + "\n" + dinnerGuests[5] + "\n" + dinnerGuests[6] + ".");

//Q17:
console.log("\nAs my dinner table is late so,\n");
var guest1 = dinnerGuests.shift();  //to delete first index elemet
console.log("Sorry, " + guest1 + " I cannot invite you to dinner.\n");
guest1 = dinnerGuests.shift();
console.log("Sorry, " + guest1 + " I cannot invite you to dinner.\n");
guest1 = dinnerGuests.pop();    //to delete last index element
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

//Q18:
const placesToVisit: string[] = ["London", "Grand Canyon", "Sydney", "Rome", "Tokyo"];
console.log("\nPlaces to visit Array in original form: " + placesToVisit);

const alphabeticalArray = placesToVisit.slice();    //creats shallow copy
alphabeticalArray.sort();
console.log("Array in alphabetical order: " + alphabeticalArray);
console.log("Array in its original form: " + placesToVisit);

const reverseArray = placesToVisit.slice();
reverseArray.sort((a,b) => b.localeCompare(a));
console.log("\nArray in reverse order: " + reverseArray);
console.log("Array in its original form: " + placesToVisit);

const placesToVisitCopy = placesToVisit.slice();

placesToVisit.sort((a,b) => b.localeCompare(a));   //original array in alphabetical order using sort()
console.log("Original array in reverse: " + placesToVisit);


console.log("Original order of Array (copy): " + placesToVisitCopy);

placesToVisit.sort();
console.log("Original Array in alphabetical order: " + placesToVisit);

//Q19:
console.log("\nTotal guests at dinner are: " + totalDinnerGuests);
    
//Q20:
const languages: string[] = ["Urdu", "Saraiki", "English", "Arabic", "Gesture Language"];
for(let lang of languages){
    console.log("\nI want to learn: " + lang);
}

//Q21:
const shoppingProducts = {
    products: 
    [
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
console.log(dinnerGuests[3]);  //as 3rd index doesn't exists
    //OUTPUT:  undefined

//Q23:
let car: string = "subaru";
let bike: string = "yamaha";

if ( car == "subaru")
    console.log("true the string matched");
else console.log("string didnot match");

if (bike == "mt07") console.log("true the string matched");
else console.log("string didnot match");

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
} else {
  console.log("Player earned 10 points for shooting the yellow alien.");
}
//Q27:
// Alien Colors #3
var alienColor = "red";

if (alienColor === "green") {
  console.log("Player earned 5 points for shooting the green alien.");
} else if (alienColor === "yellow") {
  console.log("Player earned 10 points for shooting the yellow alien.");
} else {
  console.log("Player earned 15 points for shooting the red alien.");
}

//Q28:
const age = 2;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

//Q29:
const favFruits: Array<string> = ["banana", "mango", "strawberry"];     //generic array type declaration
if ("banana" in favFruits) console.log("I like bananas.\n");
else if ("strawberry" in favFruits) console.log("I like strawberry\n");
else if ("watermelon" in favFruits) console.log("I like watermelon");
else if ("mango" in favFruits) console.log("I like mangos");
else if ("melon" in favFruits) console.log("I like melon");

//Q30:
const greetArray: string[] = ["Eric", "Sam", "Admin", "Sailor", "Raymond"];
for(let i = 0; i <= greetArray.length; i++ ){
    if ("Admin" == greetArray[i]){
        console.log(`Hello ${greetArray[i]}, would you like to see status report?\n`);
    }
    else { console.log(`Hello ${greetArray[i]}, Thank You for logging again.`); }
}

//Q31:
if (greetArray.length == 0) console.log("We need to find some users\n");

else {
    greetArray.length = 0;
    console.log("We need to find some User.");
}

//Q32:
const currentUsers: string[] = ["johndoe", "janedoe", "peter", "mary", "admin"];
const newUsers: string[] = ["johndoe", "JOHNDOE", "peter", "mary", "newuser"];

for (const newUser of newUsers) {
  const isUsernameAvailable = currentUsers.findIndex((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()) === -1;

  if (!isUsernameAvailable) {
    console.log(`The username ${newUser} is not available.`);
  } else {
    console.log(`The username ${newUser} is available.`);
  }
}

//Q33:
const ordinalNo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for ( let i = 0; i <= ordinalNo.length; i++ ){

    if (ordinalNo[i] == 1) console.log(ordinalNo[i] + "st\n");
    else if (ordinalNo[i] == 2) console.log(ordinalNo[i] + "nd\n");
    else if (ordinalNo[i] == 3) console.log(ordinalNo[i] + "rd\n");
    else if (ordinalNo[i] >= 4) console.log(ordinalNo[i] + "th\n");
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
function make_shirt(tMessage: string , size: string){
  console.log(tMessage + "\tSize: " + size + "\n");
}
make_shirt('My T-Shirt' , 'XL');

const tSizeArray: string[] = ["S", "M", "L", "XL", "Custom"];
const tMessageArray: string[] = ["I love TypeScript ", "I love C++", "I love Apex", "I love Python", "I love Games"];
//Q37:
for (let i = 0; i< tSizeArray.length; i++){
  make_shirt( tMessageArray[i] , tSizeArray[i])
}

//Q38:
function describe_city(city: string , country: string = 'Pakistan'){
  console.log(`${city} is in ${country} \n`)
}

describe_city('Islamabad');
describe_city('Lahore');
describe_city('San Francisco' , 'USA');

//Q39:
function city_Country(city: string , country: string) : string {
  return `${city} , ${country}`;
}

//2D array has same number of columns but a jagged array has different number of columns
const cityCountryPair: string [][] = [
  ["Islamabad" , "Pakistan"],
  ["London" , "England"],
  ["Tokyo" , "Japan"]
]

for(const [city , country] of cityCountryPair){
  console.log(city_Country( city , country ));
}

//Q40:
let trackCount: number = 0;
const make_Album = function(artist: string , title: string , trackNo: number = trackCount ): Record<string , unknown> {
  return {
    artist,
    title,
    trackNo,
  };
}

const album1 = make_Album("Atif Aslam" , "Aadat" );
const album2 = make_Album("Adele" , "Hello" , ++trackCount);
const album3 = make_Album("NFAK" , "Sadgi to hamari zra dekhye" , ++trackCount);

console.log(album1);
console.log(album2);
console.log(album3);

//Q41:
const magicianArray: string[] = ["Roger Lapin" , "David Copperfield" , "Paul Daniels" , "David Blaine" , "Derren Brown"];

function showMagicians(mNames: string[]){
  console.log(mNames);
}

showMagicians(magicianArray);

//Q42:
  const greatMagicianArray = magicianArray.map((names) => {
    return `The Great ${names}`
  });

showMagicians(greatMagicianArray);

//Q43:
showMagicians(magicianArray);
showMagicians(greatMagicianArray);

//Q44:
function make_Sandwich(...itemsOfSandwich: string[]){
  console.log("Your Sandwich has following items:\n");
  for(const item of itemsOfSandwich){
    console.log(`# ${item}`);
  }
}

make_Sandwich("Wheat Bread" , "Olives" , "Tandori Chicken" , "Corn" , "Sauces");
make_Sandwich("Brown Bread" , "Chicken" , "Corn" , "Sauces");
make_Sandwich("Plain Bread" , "Lettuce" , "Patty");

//Q45:
function make_Car(manufacturer: string , model: string , ...options: [string , any][]) {
  const car: any = {
    manufacturer,
    model
  };

  for(const [key , value] of options){
    car[key] = value;
  }
  return car;
}

const car1 = make_Car("Chevrolet" , "Corvette C8" , ["Color" , "Yellow"] , ["TopSpeed" , "194mph"]);
console.log(car1);