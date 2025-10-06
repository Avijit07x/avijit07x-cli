#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";

const name = chalk.bold.cyan("Avijit Dey");
const role = chalk.greenBright("Full Stack Developer (MERN)");
const portfolio = chalk.blueBright("https://avijit07x.vercel.app");
const github = chalk.blueBright("https://github.com/Avijit07x");
const linkedin = chalk.blueBright("https://www.linkedin.com/in/avijit07x");
const twitter = chalk.blueBright("https://twitter.com/Avijit07x");
const fiverr = chalk.blueBright("https://www.fiverr.com/avijit07x");
const email = chalk.greenBright("deyavijit134@gmail.com");
const location = chalk.yellow("west bengal, india");

const message = `
${name}
${role}

${chalk.bold.cyan("Portfolio:")} ${portfolio}
${chalk.bold.cyan("GitHub:")}    ${github}
${chalk.bold.cyan("LinkedIn:")}  ${linkedin}
${chalk.bold.cyan("Twitter:")}   ${twitter}
${chalk.bold.cyan("Fiverr:")}    ${fiverr}
${chalk.bold.cyan("Contact:")}   ${email}
${chalk.bold.cyan("Location:")}  ${location}
`;

console.log(
	boxen(message, {
		padding: 1,
		margin: 1,
		borderStyle: "round",
		borderColor: "cyan",
	})
);
