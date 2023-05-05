import Product from "../../../db/models/Products";
import dbConnect from "../../../db/connect.js";

export default async function handler(request, response) {
  await dbConnect();
  // return response.status(200).json(products);

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
