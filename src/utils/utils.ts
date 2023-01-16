import fs from "fs";

export function renameFile(oldFilanameWPath: string, newFilanameWPath: string) {
  fs.rename(oldFilanameWPath, newFilanameWPath, (err) => {
    if (err) throw err;
    console.log("Rename complete!");
  });
}

export function createFile(filename : string, data : string) {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })
}

// CHECK IF IMPLEMENTS INTERFACE
// function isMetaData(obj: any): obj is MetaData {
//   return 'title' in obj && 'imdbscore' in obj;
// }
// console.log(isMetaData(metadata));