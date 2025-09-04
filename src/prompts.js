/**
 * CLI Questions (Prompts)
 *
 * Purpose:
 *   - Defines interactive questions asked to the user.
 *   - Collects project name, API type, language, and install choice.
 *
 * How it helps:
 *   - Keeps prompts centralized and reusable.
 *   - Easy to extend (e.g., add new options later).
 */

import inquirer from "inquirer";

const cliPrompts = async () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Project Name:",
      default: "my-app",
      validate: (v) => (v.trim() ? true : "Project name is required"),
    },
    {
      type: "list",
      name: "projectLang",
      message: "Select Language",
      choices: [
        { name: "JavaScript", value: "js" },
        { name: "TypeScript", value: "ts" },
      ],
      default: 0,
    },
    {
      type: "list",
      name: "projectType",
      message: "Select project type:",
      choices: [
        { name: "Boilerplate", value: "boilerplate" },
        { name: "Ecommerce", value: "ecommerce" },
        { name: "Blog", value: "blog" },
      ],
      default: 1,
    },
    {
      type: "confirm",
      name: "dependencyInstall",
      message: "Install dependencies now?",
      default: true,
    },
  ]);
};

export { cliPrompts };
