const fs = require("fs");
const path = require("path");
const target = process.argv[2];
const hex = process.argv[3];
if (!target || !hex) process.exit(1);
const fullPath = path.resolve(target);
fs.mkdirSync(path.dirname(fullPath), { recursive: true });
fs.writeFileSync(fullPath, Buffer.from(hex, "hex").toString("utf8"), "utf8");
console.log("Saved: " + target);
