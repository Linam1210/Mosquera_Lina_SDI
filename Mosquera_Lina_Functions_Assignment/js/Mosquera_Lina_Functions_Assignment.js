//Lina Mosquera
//SDI 1507
//Functions Assignment

var lottery = prompt("Please enter 1 if you would like number for the Florida Lottery or 2 if you would like number fo the Power Ball Lottery:")// this variable is to ask the user to choose which lottery they want numbers for//

function lotteryVal(lotterySelec) { //here I am setting up the first function to validate the users input//

    while (lotterySelec === "") { //By using the while loop here we make sure that the user selects one of the two lotteries//

        lotterySelec = prompt("Please choose 1 for the Florida Lottery or 2 for the Power Ball Lottery:")// asking the user to enter a selection//
    }


    return lotterySelec;// I am returning the value entered by the user//


}

function floridaLott (min, max, num) { // this function is set up for the Florida Lottery//

    if (lottery === "1") {  // if the user selects option 1 than the code below will run//


        var floridaArray = [];// this variable will store the random numbers that we need to        generate for the florida Lotteryy//

        for (var i = 0; i < num; i++) { // for loop is set up to generate random numbers            inside of the array

            var floridaRandom = Math.random() * (max - min) + min;
            floridaArray [i] = Math.round(floridaRandom)// math object here is use to
            //generate random numbers and also to have those numbers rounded to a whole                 number//

        }
        return floridaArray;// returning the random number into the array variable//
    }

}