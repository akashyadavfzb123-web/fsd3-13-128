import http from "http";

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Client</h1>");
   res.write("<h2>akash</h2>");
  res.end();
});

server.listen(4445, () => console.log("Server is running at 4445..."));