import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { _generatePath } from "../utils.js";

const copy = async data => {
  const [file, path] = data;

  const source = _generatePath(file);
  const destination = _generatePath(path, file);

  const input = createReadStream(source);
  const output = createWriteStream(destination);

  await pipeline(input, output);
};

export { copy };
