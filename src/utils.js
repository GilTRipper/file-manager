const _getUsername = args => {
  return args.find(arg => arg.startsWith("--")).split("=")[1];
};
const _getDecompressedFileName = name => {
  const array = name.split(".");
  array.pop();
  return array.join(".");
};
export { _getUsername, _getDecompressedFileName };
