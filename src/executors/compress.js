import { createBrotliCompress } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "stream/promises";

const compress = async data => {
  const [compressData] = data;
  const source = join(process.cwd(), compressData);
  const destination = join(process.cwd(), `${compressData}.gz`);

  const zip = createBrotliCompress();
  const input = createReadStream(source);
  const output = createWriteStream(destination);

  await pipeline(input, zip, output);
};
export { compress };
