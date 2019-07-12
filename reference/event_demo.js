const EventEmitter = require("events");

/* Create a class to use the eventEmitter functionality. Event emitters are like Redux action creators and reducers all in one. They both emit
   events and handle them. */
class MyEmitter extends EventEmitter {}

// After defining your class, make an instance of it to start using it.
const myEmitter = new MyEmitter();

// Add an event listner using myEmitter.on('event', callback())
myEmitter.on("event", () => {
  console.log("Handled event.");
});

// You can emit events using myEmitter.emit('event'). (myEmitter and 'event' are placeholders for what you'd actually use, they can be anything.)
myEmitter.emit("event");

// The code above will go to the call back function on line 11 and run it since it matches up with the first parameter of .on().
