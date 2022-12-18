import fs from "fs/promises";
import { _generatePath } from "../utils.js";

const renameFile = async data => {
  const [fileToRename, newName] = data;

  await fs.rename(_generatePath(fileToRename), _generatePath(newName));
};

export { renameFile };
