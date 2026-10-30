import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { marked } from "marked";

const markdown = fs.readFileSync("07_clean_code.md", "utf8");

const htmlContent = marked.parse(markdown);

const output = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>07 - Clean Code</title>
</head>
<body>
${htmlContent}
</body>
</html>
`;

fs.writeFileSync("07_clean_code.html", output);

execFileSync(
  process.execPath,
  ["node_modules/prettier/bin/prettier.cjs", "--write", "07_clean_code.html"],
  { stdio: "inherit" },
);

console.log("HTML successfully created!");
