import { readFileSync, writeFileSync } from 'node:fs';

const packageJsonPath = "./package.json";
const packageJsonString = readFileSync(packageJsonPath, "utf8");
const packageJson = JSON.parse(packageJsonString);

delete packageJson.devDependencies;
delete packageJson.scripts;
delete packageJson.eslintConfig;

// console.log(packageJson);
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");
