/*Lina Mosquera
SDI 1507
Expressions Worsheet
 */


//dog years//

var sparkyAge = 4; //This variable holds the value for sparky's age which we are assuming is 4//
var humanYears = sparkyAge * 7; // This variable calculates sparky's age in human years//

console.log("Sparky is" + " " + humanYears + " " + "human years old which is" + " " + sparkyAge + " " + "in dog years."); //this will display the result of the calculation using the two above variables//

//Slice of pie Part 1//

var numberStudents = 45;//number of students//
var numberPizzaOrdered = 6;//number of pizza ordered//
var slicesPizza = 10;//slices per pizza//

var slicePerStudent = numberPizzaOrdered * slicesPizza / numberStudents; //this variable multiples the number of pizza times the slices per pizza then divides it by the number of students to find the total number of slices each students can have//

console.log("Each person ate" + " " + slicePerStudent + " " + "slices of pizza at the party");

//Slice of pizza Part 2//

var numberPeople = 35; //number of people at the party//
var numberPizzaOrdered = 8; //number of pizza ordered//
var slicesPizza = 7; //number of slices per pizza//

var sparkyGets = (numberPizzaOrdered * slicesPizza) % numberPeople//here we used the remainder module to determine how many slices sparky gets to eat//

console.log(sparkyGets)//display the total result of slices left after they were evenly divided among the guests//

//average shopping bill//

var shoppingBills = [230,150,230,80,176]; //this array holds 5 values for 5 diffirent shopping bills//

var total = shoppingBills[0] + shoppingBills[1] + shoppingBills[2] + shoppingBills[3] + shoppingBills[4]; //this variable adds all 5 values store on the above array for the total amount spend in shopping//
var average = (shoppingBills[0] + shoppingBills[1] + shoppingBills[2] + shoppingBills[3] + shoppingBills[4]) /5;//this variable calculates the avarage by adding the 5 shopping bills and dividing them by the size which is 5//

console.log(total); // provides the total amount for all 5 shopping bill//
console.log(average); // displays the average amount for all 5 bills//

//Discount//

//I was unable to find a solution to this problem//
