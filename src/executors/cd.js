import { up } from "./up.js";

const changeDirectory = data => {
  const [dir] = data;
  if (dir === "..") {
    up();
    return;
  }
  process.chdir(dir);
};
export { changeDirectory };
