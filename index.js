#!/usr/bin/env node
import inquirer from "inquirer";
const converstion = {
    USD: {
        USD: 1,
        AED: 3.67,
        PKR: 228.03,
    },
    AED: {
        USD: 0.27,
        AED: 1,
        PKR: 62.08,
    },
    PKR: {
        USD: 0.0044,
        AED: 0.016,
        PKR: 1,
    },
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["USD", "AED", "PKR"],
        message: "Select your currency: ",
    },
    {
        type: "list",
        name: "to",
        choices: ["USD", "AED", "PKR"],
        message: "Select your convertion currency: ",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
    },
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    const result = converstion[from][to] * amount;
    console.log(result);
}
else {
    console.log("Invalid input");
}
