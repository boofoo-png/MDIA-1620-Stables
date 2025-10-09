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
// This is a template for your labs and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each lab!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

// Declare variables with values for the following:
// - the name of the horse at the stable
// - the age of the horse
// - whether the horse is inside or outside
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//

let horseName = "The Rock";
let horseNickname = "Rocky";
let horseAge = 5;
let isHorseInside = true;
let monthlyCost = 300;
let latePaymentFee = monthlyCost * 1.2;
let visitorsMessage =
    "Welcome to Phillip's Stable! Meet " +
    horseNickname +
    "! It will cost " +
    monthlyCost +
    " to ride " +
    horseName +
    " per month!";

console.log(horseName);
console.log(horseNickname);
console.log(horseAge);
console.log(isHorseInside);
console.log(visitorsMessage);

let latePaymentFeeMessage =
    "Hello! Unfortunately you have missed a payment! Please pay " +
    latePaymentFee +
    " or else....";

console.log(latePaymentFeeMessage);
console.log(latePaymentFee);

// Create a variable and use it to store a message for visitors to the stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing.
// Include the name of your horse in the message.

//------------------------- First day (Lab #2, Week 4) -------------------------//

// Using an object, add at least 3 horses to your stables.

let horseObject = {
    name: "The Rock",
    nickname: "Rocky",
    favTreat: "Pebbles",
    age: 6,
    monthlyRent: 300,
    isHorseInside: true,
    overall: 95,
    Finisher:
};

let horseTwoObject = {
    name: "Stone Cold",
    nickname: "Texas Rattlesnake",
    favTreat: "Mice",
    age: 5,
    monthlyRent: 400,
    isHorseInside: false,
    overall: 95,
    Finisher: Stunner,
};

let horseThreeObject = {
    name: "Cody",
    nickname: "Nightmare",
    favTreat: "Bananas",
    age: 3,
    monthlyRent: 150,
    isHorseInside: true,
    overall: 93,
    Finisher: CrossRhodes,
};
let horseFourObject = {
    name: "Seth",
    nickname: "Visionary",
    favTreat: "Gold",
    age: 4,
    monthlyRent: 700,
    isHorseInside: true,
    overall: 92,
    Finisher: CurbStomp,
};

let horses = [horseObject, horseTwoObject, horseThreeObject, horseFourObject];

console.log(horses);


horseObject.isHungry = true;
horseTwoObject.isHungry = false;
horseThreeObject.isHungry = true;
horseFourObject.isHungry = false;

//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" variable.
// Keep your old horse info from week one for now.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

//
//
// let horseNames = ["Rocky", "Stone Cold", "Seth"];
// console.log(
//     "My horses are called " +
//     horseNames [0]+
//     ", " + horseNames [1] +
//     ", and " + horseNames [2]
// );

// console.log("My horses are called " + horseNames);
// console.log("My horses are named " + horsesname.join());

function squareThisNumber(number) {
    console.log(number * number);
}

squareThisNumber(3);
squareThisNumber(11);

function addTheseTwoThings(firstThingToAdd, secondThingToAdd) {
    console.log(
        "When you add " +
            firstThingToAdd +
            " and " +
            secondThingToAdd +
            ", you get a total of " +
            (firstThingToAdd + secondThingToAdd)
    );
}

let firstNumber = 2;
let secondNumber = 22;
let arrayOfNumbers = [3, 9, 17, 42];

addTheseTwoThings(3, 7);
addTheseTwoThings(24, 37);
addTheseTwoThings(firstNumber, secondNumber);
addTheseTwoThings(arrayOfNumbers[0], arrayOfNumbers[1]);
