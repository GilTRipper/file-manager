import crypto from "crypto";
import fs from "fs/promises";

import { _generatePath } from "../utils.js";

const calcHash = async data => {
  const [file] = data;
  const path = _generatePath(file);

  const dataToHash = await fs.readFile(path, { encoding: "utf-8" });
  const hash = crypto.createHash("sha256").update(dataToHash);

  console.log(hash.digest("hex"));
};
export { calcHash };
