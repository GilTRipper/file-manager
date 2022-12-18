import { createBrotliDecompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "stream/promises";
import { _getDecompressedFileName } from "../utils.js";

const decompress = async data => {
  const [archive] = data;
  const filename = _getDecompressedFileName(archive);

  const source = join(process.cwd(), archive);
  const destination = join(process.cwd(), filename);

  const unzip = createBrotliDecompress();
  const input = createReadStream(source);
  const output = createWriteStream(destination);

  await pipeline(input, unzip, output);
};

export { decompress };
