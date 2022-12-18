import { copy } from "./cp.js";
import { removeFile } from "./rm.js";

const moveFile = async data => {
  const [file] = data;
  await copy(data);
  await removeFile([file]);
};
export { moveFile };
