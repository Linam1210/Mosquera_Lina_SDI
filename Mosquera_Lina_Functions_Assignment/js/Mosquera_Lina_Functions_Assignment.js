//Lina Mosquera
//SDI 1507
//Functions Assignment

var lottery = prompt("Please enter 1 if you would like number for the Florida Lottery or 2                if you would like number fo the Power Ball Lottery:"); // this variable is to               ask the user to choose which lottery they want numbers for//

function lotteryVal(lotterySelec) { //here I am setting up the first function to validate the users input//

    while (lotterySelec === "") { //By using the while loop here we make sure that the user     selects one of the two lotteries//

        lotterySelec = prompt("Please choose 1 for the Florida Lottery or 2 for the Power           Ball Lottery:"); // asking the user to enter a selection//
    }


    return lotterySelec;// I am returning the value entered by the user//


}

function floridaLott (min, max, num) { // this function is set up for the Florida Lottery//

    if (lottery === "1") {  // if the user selects option 1 than the code below will run//


        var floridaArray = [];// this variable will store the random numbers that we need to        generate for the florida Lotteryy//

        for (var i = 0; i < num; i++) { // for loop is set up to generate random numbers            inside of the array

            var floridaRandom = Math.random() * (max - min) + min;
            floridaArray [i] = Math.round(floridaRandom); // math object here is use to
            //generate random numbers and also to have those numbers rounded to a whole                 number//

        }
        return floridaArray; // returning the random number into the array variable//
    }

}

function powerBallLott (min, max, num){ //function shet up for the Power Ball Lottery//

    if (lottery === "2"){ // conditional set if the user selects option 2 for the Power Ball    Lottery//

        var powerBArray = []; // Array variable is to hold the random numbers for the Power         Ball Lottery//

        for (var i = 0; i < num; i++){ // for loop is set up to generate random numbers            inside of the array
            var powerBRandom = Math.random() * (max - min) + min;
            powerBArray [i] = Math.round(powerBRandom); // math object here is use to
            //generate random numbers and also to have those numbers rounded to a whole                 number//
        }

        return powerBArray; // returning the random number into the array variable//

    }

}

lottery = lotteryVal(lottery) // here we are calling the first function where we ask the user to select between the two lotteries//
console.log("you selected option" + " " + lottery )// prints selection of lottery to the console//

floridaNums = floridaLott(1 ,53 ,6)// We are calling the florida lottery function and set up parameters and arguments//
console.log("Here is your Florida Lottery numbers" + " " + floridaNums + ".") // A set of 6 random numbers between 1 and 53 are printing to the console//

powerBallNums = powerBallLott(1,59,5)// We are calling the Power Ball lottery function and set up parameters and arguments//

powerBall = powerBallLott(1,35,1)//We are calling the PB function and set up parameters and arguments//
console.log("Here is your Power Ball Lottery Numbers" + " " + powerBallNums + " " + "with PB" + " " + powerBall + ".")// A set of 5 random number between 1 and 59 are printing to the console as well as the PB number which is 1 random number between 1 and 35//