import express from 'express';

const app = express();

// Home
app.get("/", (req, res) => {
    res.send("<h1>Hello akash</h1>");
});

// About
app.get("/about", (req, res) => {
    res.send("<h1>About us page</h1>");
});

// Products data
const products = [
    { id: 1, name: "market", qty: 100, price: 15 },
    { id: 2, name: "duster", qty: 50, price: 10 }
];

// Product
app.get("/product", (req, res) => {
    res.status(200).send(products);
});

// Page not found
app.use((req, res) => {
    res.status(404).send("<h1>Page is not found</h1>");
});

// Start server
app.listen(3333, () => {
    console.log("prg1 is running at 3333");
});
