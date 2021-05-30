import * as React from "react";
import { useForm } from "../lib/use-form";

export function CreateProduct() {
  const { state, handleChange, clearForm, resetForm } = useForm({
    name: "",
    price: "",
    description: "",
  });
  return (
    <form>
      <label htmlFor="name">
        <span>Name</span>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        <span>Price</span>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={state.price}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={clearForm}>
        Clear form
      </button>
      <button type="button" onClick={resetForm}>
        Reset form
      </button>
    </form>
  );
}
