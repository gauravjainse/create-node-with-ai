import inquirer from "inquirer";

const cliPrompts = async () => {
  return inquirer.prompt([
    {
      type: "text",
      name: "name",
      message: "Project Name:",
      initial: "my-app",
      validate: (v) => (v.trim() ? true : "Project name is required"),
    },
    {
      type: "select",
      name: "lang",
      message: "Select language",
      choices: [
        {
          title: "JavaScript",
          value: "js",
        },
        {
          title: "TypeScript",
          value: "ts",
        },
      ],
      initial: 0,
    },
  ]);

  if (!answers.name || !answers.lang) {
    console.log("Cancelled");
    process.exit(1);
  }
};

export { cliPrompts };
