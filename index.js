#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function question() {
    const answers = await inquirer.prompt({
        name: "question",
        type: "list",
        message: "you pass your child's room",
        choices: ["walk by, ignoring it", "say a cordial hello"],
    });
    return answers.question;
}

async function welcome() {
    const answer1 = await question();
    console.log(chalk.bold("hi mom"));
    await sleep();
    console.log(answer1 === "say a cordial hello" ? "hello." : "...");
    await sleep();
    console.log(
        chalk.italic(
            answer1 === "say a cordial hello"
                ? "thank you mother for saying hi"
                : "bye mom"
        )
    );
    await sleep();
    console.log("🥹");
    await sleep();
    console.log("😭");
}

await welcome();
