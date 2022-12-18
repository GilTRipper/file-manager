import { join } from "path";

const _getUsername = args => {
  return args.find(arg => arg.startsWith("--")).split("=")[1];
};

const _getDecompressedFileName = name => {
  const array = name.split(".");
  array.pop();
  return array.join(".");
};

const _generatePath = (...path) => join(process.cwd(), ...path);

const logDir = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

export { _getUsername, _getDecompressedFileName, logDir, _generatePath };
