import { cp, mkdir, rm } from "node:fs/promises";

const publicFiles = [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "favicon.ico",
  "favicon.png",
  "favicon.svg",
  "assets",
  "images",
  "services",
];

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

for (const entry of publicFiles) {
  await cp(entry, `dist/${entry}`, { recursive: true });
}

console.log(`Prepared ${publicFiles.length} website entries in dist/.`);
