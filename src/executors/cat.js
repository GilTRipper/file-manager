import fs from "fs";
import { Writable } from "stream";
import { pipeline } from "stream/promises";

import { _generatePath } from "../utils.js";

const readFile = async data => {
  const [file] = data;
  const path = _generatePath(file);

  const readStream = fs.createReadStream(path, "utf-8");

  const writeStream = new Writable({
    decodeStrings: false,
    write(chunk, _, callback) {
      console.log(chunk);
      callback();
    },
  });

  await pipeline(readStream, writeStream);
};

export { readFile };
