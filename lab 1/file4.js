import { mkdir } from "node:fs/promises";

await mkdir("upload/resume", { recursive: true });

console.log("Resume folder created under upload folder");
