import { commands } from "./commands.js";
import readline from "readline/promises";
import { argv, stdin as input, stdout as output } from "node:process";
import { _getUsername, logDir } from "./utils.js";
import { homedir } from "node:os";

const __username = _getUsername(argv);

const createFileManager = async () => {
  process.chdir(homedir());

  console.log(`Welcome to the File Manager, ${__username}!`);
  logDir();

  const rl = readline.createInterface({ input, output });

  rl.setPrompt("Enter command: ");
  rl.prompt();

  rl.on("line", async input => {
    const [command, ...args] = input.split(" ");

    if (command === ".exit") {
      rl.close();
    }

    if (!Object.keys(commands).includes(command)) {
      console.log("Invalid command");
      logDir();
      rl.prompt();
      return;
    }

    try {
      await commands[command](args);
    } catch (error) {
      console.log("Operation failed");
      console.log(error);
    }

    logDir();
    rl.prompt();
  }).on("close", () => {
    console.log(`\nThank you for using File Manager, ${__username}, goodbye!`);
    process.exit(0);
  });
};

export { createFileManager };
