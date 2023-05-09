import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
  if (request.method === "PUT") {
    const productToUpdate = await Product.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ status: "Product successfully deleted." });
  }

  // Find the joke by its ID and update the content that is part of the request body!
  // If successful, you'll receive an OK status code.
}

// if (request.method === "DELETE") {
// if (request.method === "PUT") {
//   const productToUpdate = await Product.findByIdAndUpdate(id, {
//     $set: request.body,
//   });
//   // Find the joke by its ID and update the content that is part of the request body!
//   response.status(200).json(productToUpdate);
//   // If successful, you'll receive an OK status code.
// }
