import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {

    if (req.url === "/bottle") {

        res.setHeader("Content-Type", "text/html");

        const stream = createReadStream("bottle.html", {
            encoding: "utf-8"
        });

        stream.pipe(res);

    } else if (req.url === "/pot") {

        res.setHeader("Content-Type", "text/html");

        const stream = createReadStream("pot.html", {
            encoding: "utf-8"
        });

        stream.pipe(res);

    } else {

        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("prg3 is running");
});
// import { createReadStream } from "fs";
// import http from "http";

// const server = http.createServer((req, res) => {
//     // res.end("<h1>Hello server</h1>");
//     if(req.url==="/bottle"){
//     const stream = createReadStream("bottle.html",{encoding:"utf-8"});
//     stream.pipe(res);}
//     else{
//         res.statuscode=408;
//         res.end();
//     }
// });

// server.listen(3000, () => console.log("prg3 is running"));
server.listen(3000, () => {
    console.log("prg3 is running");
});