import React, { useState, useEffect } from "react";
import "../components/global.css"
import axios from "axios";
import Product from "./Product";

const ProductList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from the server
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/book/");
        setBooks(response.data); // Assuming the response data is an array of products
        setLoading(false);
      } catch (err) {
        setError("Failed to load products.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="home-container">
      <h1>Product List</h1>
      {books.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="product-list">
          {books.map((book) => (
            <Product book_id={book.id} title={book.title} price={book.price} description={book.description} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
