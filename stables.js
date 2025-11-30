// // Welcome!
// //
// //                                                  #    #
// //                                             %%% ##   ##
// //                                          %%%%% ###%🎀###
// //                                         %%%%% ### %%% #
// //                                       %%%%%% ### %%% ###
// //                                        %%%% ## %% #######
// //                                       %%%%% # %% #@#####
// //                                     %%%%%% # % #########
// //                                    %%%%% ##### #########
// //                          ###        %% ####### #########
// //                 %%% ############    ########### ########
// //              %%%% ############################### #######
// //            %%%%% ################################## ######
// //          %%%%%% #################################### #C###
// //         %%%🌸%% #####################################  ###
// //         %%%%% #######################################
// //        %%%%%% ############### BEANS ##################
// //     % %%%%%%% ############### BEANS ##################
// //      %%%%%%%%% ############## BEANS ##################
// //     %%%%%%%%%% ########################################
// //  %%% %%%%%%%%   ###### ################################
// //    %%%%%%%%      ###### #################### ##########
// // % %%%🌸%%%%        ####### ########### ###### ##########
// //  %%%%%%%%%         #######  ########### ###### ########
// // %%%%%%%%%%          ##### ###  ######### ####### ######
// //  %%%%%%%%%%          #### ##               ####### ####
// //  %🌸%%%%%%%%%           ## #                  ##### ###
// //   %%  %% % %%         # ##                      ## ###
// //     %   %    %        # ###                      # ###
// //                        # ###                     ## ###
// //                        # ###                     ## ###
// //                        # ####                   #### ##
// //                       ### ###                  ##### ###
// //                      ####  ###                 ####   ##
// //                     #####   ###                 ##    ##
// //                    #####    ####                      ###
// //                     ##        ###                     ###
// //                                ####                     ##
// //                                 ####                    ###
// //                                                         ####
// //                                                          ##
// //
// // This is a template for your labs and final project. You'll be setting up a stable and making
// // sure it runs smoothly.
// //
// // Please do not create a new file for each lab!
// // Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// // comments. (Your own comments, where necessary, are acceptable.)
// //
// // NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// // NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

// //------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

// // Declare variables with values for the following:
// // - the name of the horse at the stable
// // - the age of the horse
// // - whether the horse is inside or outside
// // - the cost to board the horse monthly
// // - the fee for a late payment (monthly rate + 20%)
// //

// let horseName = "The Rock";
// let horseNickname = "Rocky";
// let horseAge = 5;
// let isHorseInside = true;
// let monthlyCost = 300;
// let latePaymentFee = monthlyCost * 1.2;
// let visitorsMessage =
//     "Welcome to Phillip's Stable! Meet " +
//     horseNickname +
//     "! It will cost " +
//     monthlyCost +
//     " to ride " +
//     horseName +
//     " per month!";

// console.log(horseName);
// console.log(horseNickname);
// console.log(horseAge);
// console.log(isHorseInside);
// console.log(visitorsMessage);

// let latePaymentFeeMessage =
//     "Hello! Unfortunately you have missed a payment! Please pay " +
//     latePaymentFee +
//     " or else....";

// console.log(latePaymentFeeMessage);
// console.log(latePaymentFee);

// // Create a variable and use it to store a message for visitors to the stable.
// // Create a variable and use it to store a message that monthly payment is late, and the amount owing.
// // Include the name of your horse in the message.

// //------------------------- First day (Lab #2, Week 4) -------------------------//

// // Using an object, add at least 3 horses to your stables.

// let horseObject = {
//     name: "The Rock",
//     nickname: "Rocky",
//     favTreat: "Pebbles",
//     age: 6,
//     monthlyRent: 300,
//     isHorseInside: true,
//     overall: 95,
//     Finisher: "Rock Bottom",
// };

// let horseTwoObject = {
//     name: "Stone Cold",
//     nickname: "Texas Rattlesnake",
//     favTreat: "Mice",
//     age: 5,
//     monthlyRent: 400,
//     isHorseInside: false,
//     overall: 95,
//     Finisher: "Stone Cold Stunner",
// };

// let horseThreeObject = {
//     name: "Cody",
//     nickname: "Nightmare",
//     favTreat: "Bananas",
//     age: 3,
//     monthlyRent: 150,
//     isHorseInside: true,
//     overall: 93,
//     Finisher: "Cross Rhodes",
// };
// let horseFourObject = {
//     name: "Seth",
//     nickname: "Visionary",
//     favTreat: "Gold",
//     age: 4,
//     monthlyRent: 700,
//     isHorseInside: true,
//     overall: 92,
//     Finisher: "Curb Stomp",
// };

// let horses = [horseObject, horseTwoObject, horseThreeObject, horseFourObject];

// console.log(horses);

// horseObject.isHungry = true;
// horseTwoObject.isHungry = false;
// horseThreeObject.isHungry = true;
// horseFourObject.isHungry = false;

// let changer = "Hello World";
// changer = "BYE WORLD";

// const MONTHLY_RENT = 300;
// MONTHLY_RENT = 400;

// function payMe(rent = MONTHLY_RENT) {
//     let message = "You owe me " + rent + " dollars!";
// }
// //
// // The horses should have the following properties:
// // - name, nickname, favorite treat (string)
// // - age, monthly rent (number)
// // - location (boolean inside/outside)
// // - two unique properties of your choice (use any primitive)

// // Store the horses you've just created in a "horses" variable.
// // Keep your old horse info from week one for now.

// // Fancy! Another horse wants to be stabled! Create a variable that stores an object
// // literal of your new horse, and add it to your "horses" variable.

// // Initialize new property to your horses: a boolean that allows you to check if your horse
// // is hungry or not. Use dot notation.

// //
// //
// // let horseNames = ["Rocky", "Stone Cold", "Seth"];
// // console.log(
// //     "My horses are called " +
// //     horseNames [0]+
// //     ", " + horseNames [1] +
// //     ", and " + horseNames [2]
// // );

// // console.log("My horses are called " + horseNames);
// // console.log("My horses are named " + horsesname.join());

// function squareThisNumber(number) {
//     console.log(number * number);
// }

// squareThisNumber(3);
// squareThisNumber(11);

// function addTheseTwoThings(firstThingToAdd, secondThingToAdd) {
//     console.log(
//         "When you add " +
//             firstThingToAdd +
//             " and " +
//             secondThingToAdd +
//             ", you get a total of " +
//             (firstThingToAdd + secondThingToAdd)
//     );
// }

// let firstNumber = 2;
// let secondNumber = 22;
// let arrayOfNumbers = [3, 9, 17, 42];

// addTheseTwoThings(3, 7);
// addTheseTwoThings(24, 37);
// addTheseTwoThings(firstNumber, secondNumber);
// addTheseTwoThings(arrayOfNumbers[0], arrayOfNumbers[1]);

// //------------------------- Growing our business (Lab #2, Week 6) -------------------------//

// // Create a variable that stores your total number of stalls.
// // Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// // Create a function that logs out how much will an individual horse will owe if rent is
// // paid late. Invoke the function.

// // Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// // the return value outside of the function.

// let numberOfStalls = 4;

// function horseStalls (horseInside, horseNotInside) {
//     console.log(
//         "When you minus " +
//             horseInside + " and " +
//             horseNotInside + ", you get a total of " +
//             (horseInside - horseNotInside)
//         );
// }

// let horseLateFee = rent + lateFee;
// function horseLateFee(rent, horseObject, lateFee);{
// console.log ("Your payment is super late, please pay " + horseLateFee + "or else...")
// };

// horseLateFee(horseTwoObject, monthlyRent, horseLateFee);

// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.

let horses = [];

// Create a variable and use it to store a message that welcomes visitors to the stable.

let message = "Howdy! Welcome to my stables";

// Create a variable and use it to store the cost of a late payment fee.

let latePaymentFee = 100;

// Create a variable and use it to store the number of available stalls in the stable.

let stallsAvailable = 8;

//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.

let Horse = function (
    name,
    nickname,
    favouriteTreat,
    age,
    monthlyRent,
    location,
    Champion,
    strength
) {
    this.name = name;
    this.nickname = nickname;
    this.favouriteTreat = favouriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.location = location;
    this.Champion = Champion;
    this.strength = strength;

    this.introduction = function () {
        let message =
            "This horse is named: " +
            this.name +
            " it is " +
            this.age +
            " years old, and likes" +
            this.favouriteTreat +
            "!";
        console.log(message);
    };

    this.printStrength = function () {
        console.log(this.strength);
    };
};

let horse1 = new Horse("Rocky", "The Rock", "Pebbles", 47, 200, true, true, 95);
let horse2 = new Horse(
    "John Cena",
    "Champ",
    "Cheese",
    45,
    800,
    false,
    true,
    96
);
let horse3 = new Horse(
    "Randy Orton",
    "Viper",
    "Legends",
    42,
    400,
    false,
    false,
    94
);

horses.push(horse1);
horses.push(horse2);
horses.push(horse3);

let horse4 = {
    name: "Iyo Sky",
    nickname: "Genius of the Sky",
    favouriteTreat: "Sushi",
    age: 32,
    monthlyRent: 250,
    location: true,
    isChampion: false,
    strength: 90,

    introduction: function () {
        let message =
            "This horse is named: " +
            this.name +
            " it is " +
            this.age +
            " years old, and likes" +
            this.favouriteTreat +
            "!";
        console.log(message);
    },

    printStrength: function () {
        console.log(this.strength);
    },
};

horses.push(horse4);

horses[0].isHungry = true;
horses[1].isHungry = true;
horses[2].isHungry = false;
horses[3].isHungry = true;

//
// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique pgit checkoroperties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice

// Store the horses you've just created in your "horses" variable.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// new value is = 8 - 4
stallsAvailable = stallsAvailable - horses.length;

if (stallsAvailable < 2) {
    console.log("We need to build more stalls");
} else {
    console.log("We have " + stallsAvailable + " available!");
}

function costIfRentLate(horse, lateFee) {
    let total = horse.monthlyRent + lateFee;
    console.log("Late! You owe: $" + total + ".");
}

costIfRentLate(horse1, latePaymentFee);

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

for (let i = 0; i < horses.length; i++) {
    if (horses[i].favouriteTreat !== "Pebbles") {
        console.log("Horse does not like it");
    } else {
        console.log("YAY");
        break;
    }
}

function getHorseNickname(horse) {
    return horse.nickname;
}

let coolNickname = getHorseNickname(horses[2]);

console.log(coolNickname);

//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

function isHorseStrong(horse) {
    if (horse.strength > 98) {
        console.log("This horse is so strong");
    } else {
        console.log("Weak Ass Horse");
    }
}

isHorseStrong(horses[0]);

function moveHorsesOutside(stable) {
    for (let i = 0; i < stable.length; i++) {
        //check if horse is inside
        if (stable[i].location === true) {
            console.log("GO OUTSIDE");
            stable[i].location = false;
        }
    }
}
//goes through all the horses inside the array
for (let i = 0; i < horses.length; i++) {
    horses[i].flipLocation = function () {
        //take the current boolean and make it the opposite
        // false will turn into true
        // true will turn into false
        this.location = !this.location;
    };
}

console.log(horse1.location);

horse1.flipLocation();
console.log(horse1.locaton);

// () paranthesis
// [] square bracket
// {} curly bracket

function feedHorses(horses) {
    // goes through all the horses in horses
    for (let i = 0; i < horses.length; i++) {
        // check if horse is outside
        //meaning location is false (horse is not inside)
        if (horses[i].location === false) {
            //move inside
            horses[i].flipLocation();
            //this is us feeding the horses
        }
        // no matter what, the horse has to be fed
        console.log("Come inside to eat!");
    }
}

feedHorses(horses);

function moveHorsesOutsideV2(stable, isGettingDark) {
    for (let i = 0; i < stable.length; i++) {
        //check if horse is inside
        if (stable[i].location === true && isGettingDark === false) {
            console.log("GO OUTSIDE");
            stable[i].location = false;
        }
        //if the horse is currently outside AND its getting dark do stuff
        // && both the left and right have to be true
        // || only one side has to be true
        if (horses[i].location === false && isGettingDark === true) {
            horses[i].flipLocation();
            console.log("IT'S LATE COME IN");
        }
    }
}

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.


/*
NOTES
I want to write a function that adds two numbers together
Functions should be able to operate independently of anything happening outside of them
You should't expose global scope/state to the inside of a function
What does this function need to do? 
    if I change the input, does the output change? (usually, the answer to this should be yes)
What should the input be?

let a = 3;
let b = 5;

function dangerouslyAddNumbers(firstNumber, secondNumber){
    let sum = a + b;
    return sum;
}

dangerouslyAddNumbers(3,4)
=> 8 (because we wrote it on LINE 602/603 - We wrote let a/let b =3/5)




The correct verison of it will be 


let a = 3;
let b = 5;

function dangerouslyAddNumbers(firstNumber, secondNumber){
//When i test this, i want to add 3 + 5, so firstNumber can be the placeholder for 3
// and secondNumber can be the placeholder for 4
let sum = firstNumber + secondNumber;
    return sum;
}


let horse = {
    name: "Rocky",
    treat: "Pebbles",
    nickname: "The Rock",
    age: 53,
    intro() {
        console.log("Welcome to " + this.name + "'s stable!");
        },
};

let anotherHorse = {
    name: "Cody",
    treat: "Banana",
    nickname: "Nightmare",
    age: 38,
    intro() {
        console.log("Welcome to " + this.name + "'s stable!");
        }
};

let yetAnotherHorse = {
    name: "Seth",
    treat: "Cement",
    nickname: "Visionary",
    age: 32,
    intro() {
        console.log("Welcome to " + this.name + "'s stable!");
        }
};

console.log("Here is my object before I added a new property");
console.log(yetAnotherHorse);

yetAnotherHorse.monthlyRent = 300;

console.log("Here is my object after I added a new property");
console.log(yetAnotherHorse);


A function that creates an object has a special name in JS =. "Constructor Function"
These functions always starts with a capital letter, and use the keyword "new"
It starts with a capital letter to differentiate it's a constructor
Declaring a constant, it's always in UPPER_CASE


function Horse(name,nickname,age,treat){
    this.name = name;
    this.nickname = nickname;
    this.age = age;
    this.treat = treat;
    this.rent = 300
    this.lateFee = this.rent*.25;
    this.isInside = true;
    this.intro = function() {
    console.log("Welcome to " + this.name + "'s stables!");
    }
}

let stillAnotherHorse = new Horse("Pickles", "Dill", 4, "Cucumbers");

console.log("Here is a horse built with an object constructor function");
console.log(stillAnotherHorse);

let myFinalHorse = new Horse("Star", "Starzy", 100000, "Galaxies");
console.log(myFinalHorse);

function addTwoNumbers () {}