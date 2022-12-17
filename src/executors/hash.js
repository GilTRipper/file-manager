import crypto from "crypto";
import { join } from "path";
import fs from "fs/promises";

const calcHash = async data => {
  const [file] = data;
  const path = join(process.cwd(), file);

  const dataToHash = await fs.readFile(path, { encoding: "utf-8" });
  const hash = crypto.createHash("sha256").update(dataToHash);

  console.log(hash.digest("hex"));
};
export { calcHash };
