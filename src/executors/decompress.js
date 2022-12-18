import { createBrotliDecompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";

import { _getDecompressedFileName, _generatePath } from "../utils.js";
import { stat } from "fs/promises";

const decompress = async data => {
  const [archive] = data;
  const filename = _getDecompressedFileName(archive);

  const source = _generatePath(archive);
  const destination = _generatePath(filename);

  const isFile = (await stat(archive)).isFile();

  if (!isFile) {
    throw new Error("e");
  }

  const unzip = createBrotliDecompress();
  const input = createReadStream(source);
  const output = createWriteStream(destination);

  await pipeline(input, unzip, output);
};

export { decompress };
