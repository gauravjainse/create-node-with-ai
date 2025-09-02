import chalk from "chalk";
import { cliPrompts } from "../src/prompts.js";

async function main() {
  const options = await cliPrompts();

  console.log(`${chalk.greenBright("Welcome to create-node-with-ai package")}`);
}

main();
