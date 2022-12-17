const _getUsername = args => {
  return args.find(arg => arg.startsWith("--")).split("=")[1];
};

export { _getUsername };
