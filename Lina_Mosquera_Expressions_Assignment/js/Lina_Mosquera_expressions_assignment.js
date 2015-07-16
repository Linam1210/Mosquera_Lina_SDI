/*Lina Mosquera//
 SDI 1507
 Expressions assignment*/

// We are calculating the amount an individual should put aside for savings based on income, expenses and entertainment spending//

// declaring variables with prompts///

var monthlyIncome = Number(prompt("to calculate the monthly amount to set aside for saving in your household. \nPlease enter your monthly income"));//this variable stores the users input after he/she is asked for the total monthly income//
var commute = Number(prompt("How much you spend a month on commute:"));//this variable holds the total amount the user spends on monthly commute//
monthlyIncome -= commute; // here we subtract the amount spend on commute to the monthly income, therefore it wont be part of our expenses or entertainment variable//
var monthlyExpenses = ["utility", "mortgage", "car payment", "insurance"];//Here I created a basic array that holds the most common expenses for an individual//
monthlyExpenses[0] = Number(prompt("We also need information regarding your expenses. \nPlease enter your total monthly utility bill:"));//this variable holds the value of the index 0 on the previous array variable which is the utility index. This value is assign by prompting the user to enter the amount of their monthly utility bill//
monthlyExpenses[1] = Number(prompt("Please enter your total monthly mortgage:"));//this variable holds the value of the index 1 on the previous array variable which is the mortgage index. This value is assign by prompting the user to enter the amount of their monthly mortgage//
monthlyExpenses[2] = Number(prompt("Please enter your total monthly car payment:"));//this variable holds the value of the index 2 on the previous array variable which is the car payment index. This value is assign by prompting the user to enter the amount of their monthly car payment//
monthlyExpenses[3] = Number(prompt("Please enter your total monthly insurance bill:"));//this variable holds the value of the index 3 on the previous array variable which is the insurance index. This value is assign by prompting the user to enter the amount of their monthly insurance bill//
var monthlyEntertainment = Number(prompt("Please tell us how much monthly is spent on entertainment such as movies, restaurant, concerts, etc.:"));//I use this variable to store the amount a user spends a month on entertainment like movies and restaurants//
var totalExpensesAndEntert =  monthlyExpenses[0] + monthlyExpenses [1] + monthlyExpenses[2] + monthlyExpenses[3]
    + monthlyEntertainment;// this variable is a calculation but not the final calculation, I use this variable to determine the total amount spend between expenses and entertainment//
var totalSavings= monthlyIncome - totalExpensesAndEntert;//This variable is the first part of the final calculation. I took the monthly income and subtracted the total amount given from the previous variable
totalSavings *= 0.30;//this variable completes the final calculation by taking the totalsavings amount and multiplying by 0.30, which is the same as taking 30% out of the totalsavings amount//

console.log("your monthly income is" + " " + monthlyIncome);//store the amount of the monthly income entered by the user and it will be displayed in the console//
console.log("your spend" + " " + commute + " " + "on commute a month");//here the amount of the monthly commute is store and display in the console//
console.log("your monthly utility bill is" + " " + monthlyExpenses[0]);//the monthly utility bill amount is store here after the users enters the info. it will display in the console//
console.log("your monthly mortgage is" + " " + monthlyExpenses[1]);// total monthly mortgage amount is stored here and displayed in the console//
console.log("your monthly car payment is" + " " + monthlyExpenses[2]);//total monthly car payment entered by the user when prompted is stored here and displayed in the console//
console.log("your monthly insurance bill is" + " " + monthlyExpenses[3]);//total monthly insurance entered by the user when prompted is stored here and displayed in the console//
console.log("the total amount of monthly expenses is" + " " + (monthlyExpenses[0] + monthlyExpenses[1] + monthlyExpenses[2] + monthlyExpenses[3])); //total amount of all the expenses is added and stored here to display in the console.//
console.log("Total amount spend on entertainment is" + " " + monthlyEntertainment);//The total amount spend on entertainment a month by the user is stored here.//
console.log("Based on the information provided" + "," + " " + "The total amount spend on expenses and entertainment is" + " " + totalExpensesAndEntert);//store the total from variable totalExpensesAndEntert//
console.log("we determine that you should save 30% of the amount left after calculating your expenses and entertainment spending. Therefore, your total saving amount is" + totalSavings);//This is the final output to display the total amount the user should put aside for savings based on the total amount after subtracting commute, expenses, entertainment spending and multiplying by .30 which is 30% of that amount//