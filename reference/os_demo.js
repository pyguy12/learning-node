const os = require("os");

// os.platform() returns the curren operating system of the machine it runs on.
console.log(os.platform());

// os.arch() returns the CPU architecture of the current machine.
console.log(os.arch());

// os.cpus() returns an object with information for every core of the CPU.
console.log(os.cpus());

// os.freemem() returns the amount of free memory on the machine.
console.log(os.freemem());

// os.totalmem() returns the total amount of memory on the machine.
console.log(os.totalmem());

// os.homedir() returns the home directory of the machine.
console.log(os.homedir());

// os.uptime() gives you the number of seconds your machine has been up.
console.log(os.uptime());
