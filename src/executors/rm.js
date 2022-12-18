import fs from "fs/promises";
import { _generatePath } from "../utils.js";

const removeFile = async data => {
  const [filename] = data;
  const path = _generatePath(filename);

  await fs.rm(path);
};

export { removeFile };
