#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Balance Of The Account;
let myBalance: number = 25000; // Dollars
// ATM Pin Number Generate;
const myPin = await inquirer.prompt([{
    message: chalk.yellowBright("Generate Your Pin For Accessing ATM Account ---------------"),
    type: "number",
    name: "mypin"
}]);
// Flag Concept For Practice 
let match: boolean = false;
let check: boolean = false;
while (true) {
    // For Taking Pin From User
    const pinAns = await inquirer.prompt([{
        message: chalk.blue("Enter Your Pin That You Have Generated --------------- "),
        name: "pin",
        type: "number"
    }]);

    // Checking Pin If Corrects User Withdraw Or Checks The Money In Account
    // If Wrong User Need To Input Pin Again Because Of Loop
    if (pinAns.pin === myPin.mypin) {
        const opearationAns = await inquirer.prompt([{
            name: "opearation",
            message: chalk.blue("Please Select One Of The Following Option ---------------"),
            type: "list",
            choices: ["Deposite", "Withdraw", "Check Balance"]
        }]);
        // Checking The Condition That User Wants Withdraw Or Check The Balance 
        // If User is Checking The Balance Then This Code Shows User Balance Otherwise 
        // Money Will Be Withdrawn As User Choice Or From The Given Option
        if (opearationAns.opearation == "Withdraw") {
            const amountAns = await inquirer.prompt([{
                name: "amount",
                message: chalk.blue("Enter Your Amount For Withdraw Money ---------------"),
                type: "list",
                choices: [1000, 2000, 5000, 10000, "Enter Amount Of Your Choice"]
            }]);

            // Custom Code For User Want To Withdraw Money As Him/Her Wish;
            if (amountAns.amount === "Enter Amount Of Your Choice") {
                const amount = await inquirer.prompt([{
                    message: chalk.blue("Enter Your Amount"),
                    name: "amounts",
                    type: "number"
                }]);
                // Checking User Want To Withdraw Money That is Correct Or Not
                // Money Will Be Greater Then 0 And Less Then Balance
                if (amount.amounts >= 0 && amount.amounts <= myBalance) {
                    myBalance -= amount.amounts;
                    console.log(chalk.green(`${amount.amounts}$ Withdrawn Successfully\nYour Remaining Balance is ${myBalance}$`));
                    break;
                } else {
                    // I Used Flag Method Because Of Loop If User Input Invalid Amount Then User
                    // need To Enter The Money Again
                    console.log(chalk.red("Insufficiant Balance, Please Enter A Valid Amount"));
                    match = true;
                    break;
                }
            } else {
                myBalance -= amountAns.amount;
                console.log(chalk.green(`${amountAns.amount}$ Withdrawn Successfully\nYour Remaining Balance is ${myBalance}$`));
                break;
            }
        } else if (opearationAns.opearation === "Deposite") {
            const amountAns = await inquirer.prompt([{
                name: "amount",
                message: chalk.blue("Enter Your Amount For Deposite Money ---------------"),
                type: "list",
                choices: [1000, 2000, 5000, 10000, "Enter Amount Of Your Choice"]
            }]);

            // Custom Code For User Want To Withdraw Money As Him/Her Wish;
            if (amountAns.amount === "Enter Amount Of Your Choice") {
                const amount = await inquirer.prompt([{
                    message: chalk.blue("Enter Your Amount"),
                    name: "amounts",
                    type: "number"
                }]);
                // Checking User Want To Withdraw Money That is Correct Or Not
                // Money Will Be Greater Then 0 And Less Then Balance
                if (amount.amounts >= 0 && amount.amounts <= 25000) {
                    myBalance += amount.amounts;
                    console.log(chalk.green(`${amount.amounts}$ Deposited Successfully\nYour Remaining Balance is ${myBalance}$`));
                    break;
                } else {
                    // I Used Flag Method Because Of Loop If User Input Invalid Amount Then User
                    // need To Enter The Money Again
                    console.log(chalk.red("Your Deposite Limit is 25000$"));
                    check = true;
                    break;
                }
            } else {
                myBalance += amountAns.amount;
                console.log(chalk.green(`${amountAns.amount}$ Deposited Successfully\nYour Remaining Balance is ${myBalance}$`));
                break;
            }
        } else {
            console.log(chalk.green(`Your Current Balance is ${myBalance}$`));
            break;
        }
    } else {
        console.log(chalk.red("Incorrect Pin, Please Retry"));
    };
}
// For Valid And Invalid Money:
while (true) {
    if (match == true) {
        const amount = await inquirer.prompt([{
            message: chalk.cyanBright("Enter Your Amount"),
            name: "amounts",
            type: "number"
        }]);
        if (amount.amounts >= 0 && amount.amounts <= myBalance) {
            myBalance -= amount.amounts;
            console.log(chalk.green(`${amount.amounts}$ Withdrawn Successfully\nYour Remaining Balance is ${myBalance}$`));
            break;
        } else {
            console.log(chalk.red("Insufficiant Balance, Please Enter A Valid Amount"));
        }
    } else {
        break;
    }
}
while (true) {
    if (check == true) {
        const amount = await inquirer.prompt([{
            message: chalk.cyanBright("Enter Your Amount"),
            name: "amounts",
            type: "number"
        }]);
        if (amount.amounts >= 0 && amount.amounts <= 25000) {
            myBalance += amount.amounts;
            console.log(chalk.green(`${amount.amounts}$ Deposited Successfully\nYour Remaining Balance is ${myBalance}$`));
            break;
        } else {
            console.log(chalk.red("Your Deposite Limit is 25000$"));
        }
    } else {
        break;
    }
}
console.log(chalk.cyanBright("\t \t \t \t \t Coded By Hafiz Muhammad Umar Farooq"));
// The End