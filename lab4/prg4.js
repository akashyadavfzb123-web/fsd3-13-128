
import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">Browse products</a>
    `);
});

app.get("/api/products", (req, res) => {
    const item = products.map(({ reviews, description, ...rest }) => rest);

    res.status(200).json({
        count: item.length,
        data: item
    });
});

app.get("/api/product/:id", (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        id: id
    });
});

app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(3333, () => {
    console.log("PRG4 is running.......");
});
