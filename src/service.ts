import { renameFile, createFile } from "../src/utils/utils";
import fs from "fs";
import path from "path";

const getFileList = async () => {
  fs.readdir(path.join(__dirname, "..", "..", "uploads"), (err, data) => {
    if (err) throw err;
    return data;
})
}
 // test
export {
  getFileList
}

// TODO: az API compile során most beleteszi a SERVICE mappát a 'dist'-be!!