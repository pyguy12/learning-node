const Logger = require("./logger");

// Instantiating a new logger. Since Logger is a class, we must instantiate it.
const logger = new Logger();

logger.on("message", args => {
  console.log(args);
});

logger.log("Hello");
