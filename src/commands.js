import { copy as cp } from "./executors/cp.js";
import { list as ls } from "./executors/ls.js";
import { up } from "./executors/up.js";
import { changeDirectory as cd } from "./executors/cd.js";
import { readFile as cat } from "./executors/cat.js";
import { addFile as add } from "./executors/add.js";
import { renameFile as rn } from "./executors/rn.js";
import { moveFile as mv } from "./executors/mv.js";
import { removeFile as rm } from "./executors/rm.js";
import { getOsInfo as os } from "./executors/os.js";
import { calcHash as hash } from "./executors/hash.js";
import { compress } from "./executors/compress.js";
import { decompress } from "./executors/decompress.js";

const commands = {
  ["up"]: () => up(),
  ["cd"]: data => cd(data),
  ["ls"]: data => ls(data),
  ["cat"]: data => cat(data),
  ["add"]: data => add(data),
  ["rn"]: data => rn(data),
  ["cp"]: data => cp(data),
  ["mv"]: data => mv(data),
  ["rm"]: data => rm(data),
  ["os"]: data => os(data),
  ["hash"]: data => hash(data),
  ["compress"]: data => compress(data),
  ["decompress"]: data => decompress(data),
};

export { commands };
