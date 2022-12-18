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
  ["ls"]: async data => await ls(data),
  ["cat"]: async data => await cat(data),
  ["add"]: async data => await add(data),
  ["rn"]: async data => await rn(data),
  ["cp"]: async data => await cp(data),
  ["mv"]: async data => await mv(data),
  ["rm"]: async data => await rm(data),
  ["os"]: data => os(data),
  ["hash"]: async data => await hash(data),
  ["compress"]: async data => await compress(data),
  ["decompress"]: async data => await decompress(data),
};

export { commands };
