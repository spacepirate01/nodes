//read dir if exists
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "tests");
const checkifDownloaded = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
      resolve(files);
        }
    });
  });
};

const arr = async () => {
  try {
    const array = await checkifDownloaded(dir);
    console.log(array);
    //check if array is empty
    if (array.length === 0) {
        console.log("empty");
        } else {
        console.log("not empty");
        }
  } catch (err) {
    console.log(err);
  }
};
arr()
