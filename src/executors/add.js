import fs from "fs/promises";

const addFile = async data => {
  const [filename] = data;

  await fs.writeFile(filename, "", { flag: "wx" });
};

export { addFile };
