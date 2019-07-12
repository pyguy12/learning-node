const path = require("path");

// path.basename() returns file name, not including its path (Otherwiser known as the file's "basename").
console.log(path.basename(__filename));

// path.dirname() returns the directory which houses the current file and it takes __filename as its parameter.
console.log(path.dirname(__filename));

// path.extname() returns the file extension and it also takes __filename as a parameter.
console.log(path.extname(__filename));

/* path.parse() returns an object containing properties of the path. It accepts __filename as a parameter. 
   Each property on the path object can be accessed using dot or bracket notation. */
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);

// path.join() combines the arguments you pass in into one path.
console.log(path.join(__dirname, "test", "hello.html"));
