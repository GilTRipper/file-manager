import fs from "fs/promises";

const list = async () => {
  const File = (Name, Type) => ({ Name, Type });
  const files = await fs.readdir(process.cwd());

  const table = await Promise.all(
    files.map(async file => {
      const isDirectory = (await fs.stat(file)).isDirectory();
      return File(file, isDirectory ? "directory" : "file");
    })
  );
  console.table(table);
};

export { list };
