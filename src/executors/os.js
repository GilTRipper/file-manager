import os from "os";

const getOsInfo = data => {
  const [flag] = data;
  switch (flag) {
    case "--EOL":
      const EOLObject = { name: "EOL", value: os.EOL };
      console.log(EOLObject);
      break;
    case "--cpus":
      const cpusInfo = os
        .cpus()
        .map(({ model, speed }) => ({ model, speed: speed / 100 }));
      console.log({ total: os.cpus().length, cpusInfo });
      break;
    case "--homedir":
      console.log(os.homedir());
      break;
    case "--username":
      const info = os.userInfo();
      console.log(info.username);
      break;
    case "--architecture":
      console.log(os.arch());
      break;
    default:
      throw new Error("No such flag");
  }
};

export { getOsInfo };
