Sure, here are the atomic steps to complete the Backend Update and Delete: Products challenge using mongoose:

1. Use MongoDB Compass to create a database named `fish-shop` and two collections: `products` and `reviews`.
2. Download and extract the resources and import the data of the `products.json` file into your `products` collection and import the data of the `reviews.json` file into your `reviews` collection.
3. Create a `.env.local` file based on the `.env.local.example` file.
4. Run `npm run dev` and open `localhost:3000` in your browser.
5. Update the `ProductForm` component to be able to send both `POST` and `PUT` requests to your database by lifting up all logic regarding the creation of the `productData` to the `pages/index.js` file. This includes the initialization of `const { trigger } = useSWRMutation("/api/products", sendRequest)`, the `sendRequest` function, and the import of `useSWRMutation`. Wrap the logic into an `async` function called `handleAddProduct()` and pass it the parameter `event`. In the return statement, pass `handleAddProduct` to the `ProductForm` component as a prop called `onSubmit`. Receive the `onSubmit` prop in the `ProductForm` component, call it inside of the `handleSubmit`, and pass it the `event` as an argument.
6. Add a `PUT` route to `pages/api/products/[id].js`. Wait for `Product.findByIdAndUpdate(id, { $set: request.body, })` and respond with a status `200` and the message `{ status: "Product successfully updated." }`.
7. Implement `useSWRMutation` to update a database entry and refetch the data automatically in `pages/[id].js`. Import `useSWRMutation` at the top of the file and paste the following code into the `ProductDetailsPage` component to set up `useSWRMutation`:

```js
async function updateProduct(url, { arg }) {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    await response.json();
  } else {
    console.error(`Error: ${response.status}`);
  }
}

const { trigger, isMutating } = useSWRMutation(
  `/api/products/${id}`,
  updateProduct
);
```

8. Below this code, create a `handleEditProduct()` function that receives `event` as a parameter, stores the submitted data in a variable called `productData`, waits for `trigger(productData)`, and uses `push("/")` to redirect to the overview page.
9. Below `handleEditProduct()` (but above the return statement), check whether `isMutating` is truthy and if so, return a proper HTML element with the text "Submitting your changes."
10. In the return statement at the bottom of the file, pass `handleEditProduct` to the `Product` component as the `onSubmit` prop.
