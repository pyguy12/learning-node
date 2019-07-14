// This file demonstrates the usage of event emitters. The uuid library is just used to generate random user ID strings.

const EventEmitter = require("events");
const uuid = require("uuid");

// uuid.v4() generates a random ID string which is different each time it's executed.
console.log(uuid.v4());

/* Creating EventEmitter instance. Extends lets us inherit the properties of the EventEmitter in this case. Just think of the Logger class
   as another version of the EventEmitter class that we can add functionality to. */
class Logger extends EventEmitter {
  log(msg) {
    /* Our class uses this.emit() instead of someVarName.emit() since it's a class. We pass in "message" as the event emitted for the first
       argument. This is used to call each .on() listener we have which has the same first argument. After that, our .on() runs its second
       argument, which is the callback function we give it. That call back function is given the second argument of our .emit(), which in
       this case, is an object containing an id and the msg passed to .log(). */
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// We're exporting our Logger class to be used in different files.
module.exports = Logger;
