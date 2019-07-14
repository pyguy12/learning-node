const http = require("http");

// http.createServer(function(request, response)) creates a server.
http
  .createServer((req, res) => {
    // res.write(content) renders content to the page.
    res.write("Hello World");
    res.end();
  })
  // http.server.listen(port number, function()) will listen on that port (render stuff to it) and will run the callback when the server starts.
  .listen(5000, () => {
    console.log("serverRunning");
  });
