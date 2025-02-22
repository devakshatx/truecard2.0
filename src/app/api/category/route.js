import path from 'path';
import fs from 'fs';

export async function GET(req) {
  // Define the path to the creditcard_data.json file inside the src/jsondata folder
  const filePath = path.join(process.cwd(), 'src', 'jsondata', 'cardcategory_data.json');

  try {
    // Read the file asynchronously
    const fileData = await fs.promises.readFile(filePath, 'utf-8');
    
    // Parse the JSON data
    const jsonData = JSON.parse(fileData);
    console.log("category data",filePath, jsonData.length)

    // Send the products data as a response
    return new Response(JSON.stringify(jsonData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Handle any errors that occur
    return new Response(JSON.stringify({ error: 'Unable to read all category data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
