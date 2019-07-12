// fs is the File System module. Core modules (modules which are part of Node.js by default) can be imported without the "./" in front of them.
const fs = require("fs");
const path = require("path");

/* fs.mkdir() makes a directory for you. It takes 3 parameters: the path as a string, an options object or integer, and a callback function.
   No arguments are given to the callback except for a possible exception (an error). Typically, it just handles the error. The
   options parameter can either be an integer which specifies mode or an object with a mode property and a recursive property.
   The path is can be put together by using functions from the path module. The below example makes a folder in the current directory
   named 'test' using path.join() to specify the file path. */
/* fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) throw err;
  console.log("Folder created.");
}); */

/* fs.writeFile() a path, an optional options parameter, the content to overwrite the file with, and a callback function. 
   fs.writeFile() will create a file with your specified name in the path you give it. */
fs.writeFile(path.join(__dirname, "/test", "test.txt"), "Hello.", err => {
  if (err) throw err;
  console.log("File created.");
});

/* fs.appendFile() is pretty much the same as fs.writeFile() but it simply appends the data portion of the parameters to the end of the
   file instead of overwriting the whole file. You can put it inside the callback function of writeFile to have it during writeFile's execution. */
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  " I'm learning Node.js.",
  err => {
    if (err) throw err;
    console.log("Changes appended.");
  }
);

// fs.readFile() takes a path, an character format, and a callback function. The callback can take the data being read as a second parameter.
fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// fs.rename() renames the file in the first path to the file in the second path. It takes 2 path parameters and a callback function.
fs.rename(
  path.join(__dirname, "/test", "test.txt"),
  path.join(__dirname, "/test", "renamedTest.txt"),
  err => {
    if (err) throw err;
    console.log("Renamed file.");
  }
);
