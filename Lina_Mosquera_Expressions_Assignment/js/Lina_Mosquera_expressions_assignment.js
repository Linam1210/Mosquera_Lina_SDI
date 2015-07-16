/*Lina Mosquera//
 SDI 1507
 Expressions assignment*/

// We are calculating the amount an individual should put aside for savings based on income, expenses and entertainment spending//

// declaring variables with prompts///

var monthlyIncome = Number(prompt("to calculate the monthly amount to set aside for saving in your household. \nPlease enter your monthly income"));//this variable stores the users input after he/she is asked for the total monthly income//
var commute = Number(prompt("How much you spend a month on commute:"));//this variable holds the total amount the user spends on monthly commute//
monthlyIncome -= commute; // here we subtract the amount spend on commute to the monthly income, therefore it wont be part of our expenses or entertainment variable//