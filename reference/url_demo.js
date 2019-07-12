const url = require("url");

/* From what I know, the url module is actually a JS class, so you have to make an instance of it. The class is URL and it takes a url for its
   constructor. */
const myUrl = new URL(
  "https://mywebsite.com:8000/hello.html?id=100&status=active"
);

// Serialized URL (The url as a string)
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (Root domain, includes port number)
console.log(myUrl.host);

// Hostname (Root domain, no port number)
console.log(myUrl.hostname);

// Pathname (Gives you the file being rendered)
console.log(myUrl.pathname);

// Serialized query (the parameters)
console.log(myUrl.search);

// Get an object of the parameters
console.log(myUrl.searchParams);

// Append parameters to the URL search params object
myUrl.searchParams.append("abc", "123");

// You can loop through the parameters
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name} : ${value}`);
});
