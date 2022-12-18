import { createBrotliCompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";

import { _generatePath } from "../utils.js";
import { stat } from "fs/promises";

const compress = async data => {
  const [compressData] = data;
  
  const source = _generatePath(compressData);
  const destination = _generatePath(`${compressData}.gz`);

  const isFile = (await stat(source)).isFile();
  if (!isFile) {
    throw new Error("e");
  }
  
  
  const zip = createBrotliCompress();
  const input = createReadStream(source);
  const output = createWriteStream(destination);

  await pipeline(input, zip, output);
};
export { compress };
