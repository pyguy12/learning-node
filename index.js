const http = require("http");
const path = require("path");
const fs = require("fs");

// Here, we're creating our server using http.createServer and we're defining a filePath variable based on the result we got from accessing req.url.
const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : `${req.url}`
  );

  /* We're creating an extName variable which will contain the extension of our file. We get the extension using path.extname and pass it our
     filePath variable which we defined already. */
  let extName = path.extname(filePath);

  /* We're defining a contentType variable to store the type of content we'll respond with. This is important because we want the response we
     serve back from our server to have the correct content type. We default it to "text/html" beacuse that's what we expect to serve most
     commonly */
  let contentType = "text/html";

  /* In this switch statement, we're checking if the file extension from our extName variable matches any of the file extensions in the
     switch statement. Based on what matched, we'll be setting our contentType variable equal to the appropriate content type. */
  switch (extName) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "appliaction/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  /*  fs.readFile() just runs whatever function you pass into it as its second argument. It accepts the path to a file as its first argument and
      content of that file are placed into the second parameter of its callback function. In our case, we're passing it our filePath variable
      from before. */
  fs.readFile(filePath, (err, content) => {
    /* Here, we're checking for errors. If there is an error, we'll check if its code property is equal to "ENOENT" (not found) and we render
       the apropriate page write the correct head data. After that, we use res.end(). res.end() just lets the server know that our response
       is "finished". It also takes 3 parameters. The first one is the content to be rendered to the page. The second is the encoding. After
       that, an optional callback function to be run afterwards can be added. */
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      }

      // If the error is of any other type, we simply render a string containing the error code to the screen.
      else {
        res.writeHead(500);
        res.end(`Server Error ${err.code}`);
      }
    }

    // If there is no error, we'll render the file we got to the screen.
    else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

/* This is the PORT variable we'll be passing into our server.listen() function. We initialize it to either the current port of our machine or
   port 5000. */
const PORT = process.env.port || 5000;

// We set our server to listen to port 5000 for requests to respond to and have it log that our server is running on the passed in port.
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
