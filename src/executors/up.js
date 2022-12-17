import { homedir } from "os";
import { join } from "path";

const up = () => {
  if (process.cwd() === homedir()) {
    console.log("Cannot execute up: You are in home directory");
    return;
  }
  process.chdir(join(process.cwd(), "../"));
};

export { up };
