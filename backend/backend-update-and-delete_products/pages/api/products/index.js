import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
import useSWRMutation from "swr";

export default async function handler(request, response) {
  await dbConnect();
  const { trigger, isMutating } = useSWRMutation("/api/products", sendRequest);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    await trigger(productData);
    event.target.reset();
  }

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      const product = new Product(productData);
      await product.save();
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
