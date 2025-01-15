import React, { useState } from "react";
import axios from "axios";

const Product = ({ book_id, title, description, price }) => {
  const [quantity, setQuantity] = useState(1); // Default quantity

  const handleAddToCart = async () => {
    if (quantity <= 0) {
      alert("Quantity must be at least 1!");
      return;
    }

    try {
      const user_id = localStorage.getItem("id");
      console.log(user_id);
      const response = await axios.post("http://localhost:8080/cart/add", {
        user_id,
        book_id,
        quantity,
      });
      alert("Book added to cart successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add book to cart. Please try again.");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Price:</strong> ${price.toFixed(2)}
      </p>

      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{ marginLeft: "8px", width: "60px" }}
        />
      </div>

      <button
        onClick={handleAddToCart}
        style={{
          marginTop: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "8px 16px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
