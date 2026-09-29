
import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Serve all HTML/CSS/JS files from the public folder
app.use(express.static(path.join(dirname, "public")));

// 404 page
app.use((req, res) => {
    res.status(404).send("Page not found");
});

// Start server
app.listen(3333, () => {
    console.log("PRG3 is running on http://localhost:3333");
});

