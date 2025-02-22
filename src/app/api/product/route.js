import path from 'path';
import fs from 'fs';

export async function GET(req) {
  // Define the path to the creditcard_data.json file inside the src/jsondata folder
  const filePath = path.join(process.cwd(), 'src', 'jsondata', 'creditcard_data.json');

  try {
    // Read the file asynchronously
    const fileData = await fs.promises.readFile(filePath, 'utf-8');
    
    // Parse the JSON data
    const products = JSON.parse(fileData);
    console.log("cards all products",filePath, products.length)

    // Send the products data as a response
    return new Response(JSON.stringify({data: products}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Handle any errors that occur
    return new Response(JSON.stringify({ error: 'Unable to read products data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
