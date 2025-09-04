import chalk from "chalk";
import { cliPrompts } from "../src/prompts.js";
import path from "path";
import fs, { readdirSync } from "fs";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { copyDir } from "../src/utils/copyDir.js";
import { renderTokens } from "../src/utils/render.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  try {
    const answers = await cliPrompts();

    const { projectName, projectType, dependencyInstall, projectLang } =
      answers;

    const templateRoot = path.join(
      __dirname,
      "..",
      "src",
      "templates",
      projectType,
      projectLang,
      "project"
    );

    if (!fs.existsSync(templateRoot)) {
      console.error("Template not found:", templateRoot);
      process.exit(1);
    }

    const targetedDir = path.resolve(process.cwd(), projectName);

    if (fs.existsSync(targetedDir) && readdirSync(targetedDir).length > 0) {
      console.log(`Targeted directory ${projectName} is not empty.`);
      process.exit(1);
    }

    copyDir(templateRoot, targetedDir);

    answers.install
      ? console.log(`${chalk.greenBright("⚙️ Installing dependencies..")}`)
      : process.exit(1);

    console.log(
      `${chalk.greenBright("🚀 setting up the project, please wait..")}`
    );
  } catch (error) {
    console.log("Error", error.message);
    process.exit(1);
  }
}

main();
