import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">Browse Products</a>
    `);
});

// Get all products
app.get("/api/products", (req, res) => {

    const modiProducts = products.map(
        ({ reviews, description, ...rest }) => rest
    );

    res.status(200).json({
        count: modiProducts.length,
        data: modiProducts
    });
});

// Get product by ID
app.get("/api/products/:id", (req, res) => {

    const { id } = req.params;

    const p = products.find(
        (item) => item.id == Number(id)
    );

    if (p) {
        res.status(200).json({
            status: "found",
            data: p
        });
    } 
    else {
        res.status(404).json({
            status: false,
            msg: `Product not found with id: ${id}`
        });
    }
});

// 404 Route
app.use((req, res) => {
    res.status(404).send("Route Not Found");
});

app.listen(3333, () => {
    console.log("prg4 is running...");
});