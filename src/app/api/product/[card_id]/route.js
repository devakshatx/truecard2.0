import path from "path";
import fs from "fs";

export async function GET(req, { params }) {
  // Define the path to the creditcard_data.json file inside the src/jsondata folder
  const filePath = path.join(
    process.cwd(),
    "src",
    "jsondata",
    "creditcard_data.json"
  );
  const { card_id } = params;

  try {
    // Read the file asynchronously
    const fileData = await fs.promises.readFile(filePath, "utf-8");

    // Parse the JSON data
    const cards = JSON.parse(fileData);

    // Find the card with the matching card_id
    const card = cards?.product_list?.find((c) => c.card_id === card_id); // Assuming card_id is a number
    // If card is not found, return an error
    if (!card) {
      return new Response(JSON.stringify({ error: "Card not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    // Send the products data as a response
    return new Response(JSON.stringify(card), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Handle any errors that occur
    return new Response(
      JSON.stringify({ error: "Unable to read products data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
