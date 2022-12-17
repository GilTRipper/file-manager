import { commands } from "./commands.js";
import readline from "readline/promises";
import { argv, stdin as input, stdout as output } from "node:process";
import { _getUsername } from "./utils.js";
import { homedir } from "node:os";

const __username = _getUsername(argv);

const createFileManager = async () => {
  // Set default directory as home
  process.chdir(homedir());
  // Start message
  console.log(`Welcome to the File Manager, ${__username}!`);
  console.log(`You are currently in ${process.cwd()}`);

  const rl = readline.createInterface({ input, output });

  // Setting prompt for each command
  rl.setPrompt("Enter command: ");
  rl.prompt();

  // Watching for entered command
  rl.on("line", async input => {
    const [command, ...args] = input.split(" ");

    if (command === ".exit") {
      rl.close();
    }

    if (!Object.keys(commands).includes(command)) {
      console.log("Invalid command");
      console.log(`You are currently in ${process.cwd()}`);
      rl.prompt();
      return;
    }

    //Executing a command and print current working directory
    try {
      await commands[command](args);
    } catch (error) {
      console.log("Operation failed");
    }

    console.log(`You are currently in ${process.cwd()}`);
    rl.prompt();
  }).on("close", () => {
    // Handle process exit
    console.log(`\nThank you for using File Manager, ${__username}, goodbye!`);
    process.exit(0);
  });
};

export { createFileManager };
