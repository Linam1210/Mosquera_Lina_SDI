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
monthlyExpenses[2] = Number(prompt("Please enter your total monthly car payment:"));//this variable holds the value of the index 2 on the previous array variable which is the car payment index. This value is assign by prompting the user to enter the amount of their monthly car paymemt//
monthlyExpenses[3] = Number(prompt("Please enter your total monthly insurance bill:"));//this variable holds the value of the index 3 on the previous array variable which is the insurance index. This value is assign by prompting the user to enter the amount of their monthly insurance bill//
var monthlyEntertainment = Number(prompt("Please tell us how much monthly is spent on entertainment such as movies, restaurant, concerts, etc.:"));//I use this variable to store the amount a user spends a month on entertainment like movies and restaurants//