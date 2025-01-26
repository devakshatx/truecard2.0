import fs from "fs";
import path from "path";

export const getJsonData = (fileName) => {
  const filePath = path.join(process.cwd(), "src/data", fileName);
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading JSON file: ${fileName}`, error);
    return null; // or you can throw an error based on your use case
  }
};
