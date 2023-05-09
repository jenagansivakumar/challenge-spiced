import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
import useSWRMutation from "swr/mutation";

async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    console.error(response.status);
  }
}

export default function ProductForm() {
  const { trigger, isMutating } = useSWRMutation("/api/products", sendRequest);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    await trigger(productData);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Fish</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

// async function sendRequest(url, { method, data }) {
//   const response = await fetch(url, {
//     method: method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     console.error(response.status);
//   }
// }

// export default function Home() {
//   const { mutate } = useSWRMutation();
//   const [editProduct, setEditProduct] = useState(null);

//   async function handleAddProduct(event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const productData = Object.fromEntries(formData);

//     if (editProduct) {
//       // If editProduct is not null, we are updating an existing product
//       const { id } = editProduct;
//       await sendRequest(`/api/products/${id}`, {
//         method: "PUT",
//         data: { ...productData, id },
//       });
//       setEditProduct(null);
//     } else {
//       // If editProduct is null, we are adding a new product
//       await sendRequest("/api/products", {
//         method: "POST",
//         data: productData,
//       });
//     }

//     event.target.reset();
//     mutate("/api/products");
//   }

//   return (
//     <>
//       <h1>Products</h1>
//       <ProductForm onSubmit={handleAddProduct} />
//       <ul>
//         {/* list of products */}
//       </ul>
//     </>
//   );
// }
