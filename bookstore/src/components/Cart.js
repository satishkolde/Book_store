// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CartItem from "./CartItem";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const userId = Number.parseInt(localStorage.getItem("id"))
//   console.log(userId)

//   useEffect(() => {
//     // Fetch cart items for the user
//     axios
//       .get(`http://localhost:8080/cart/items?id=`+userId)
//       .then((response) => {
//         setCartItems(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching cart items:", error);
//       });
//   }, [userId]);

//   const handleRemoveItem = async (id) => {
//     // Remove item from cart
//     await axios
//       .get(`http://localhost:8080/cart/delete?id=${id}`)
//       .then((response) => {
//         // Remove the item from the state
//         console.log(response.data)
//         setCartItems(cartItems.filter((item) => item.id !== id));
//       })
//       .catch((error) => {
//         console.error("Error removing item from cart:", error);
//       });
//   };

  // const handleOrdering = async ()=>{
  //   await axios
  //     .get(`http://localhost:8080/cart/order?user_id=${userId}`)
  //     .then((response) => {
  //       // Remove the item from the state
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       console.error("Error removing item from cart:", error);
  //     });
  // }
//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cartItems.length > 0 ? (
//         cartItems.map((item) => (
//           <CartItem
//             key={item.book_id}
//             bookId={item.book_id}
//             title={item.title}
//             quantity={item.quantity}
//             price={item.price}
//             onRemove={() => handleRemoveItem(item.id)}
//           />
//         ))
        
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//       <button onClick={handleOrdering}>Order</button>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "./CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("id"); // Assuming user ID is stored in localStorage

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cart/items?id=`+userId);
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [userId]);

  const handleRemove = async (id) => {
    try {
      await axios.get(`http://localhost:8080/cart/delete?id=${id}`)
      .then((response) => {
        // Remove the item from the state
        setCartItems(cartItems.filter((item) => item.id !== id));
        alert("Item removed from cart.");
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleOrdering = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/cart/order?user_id=${userId}`);
      console.log(response.data);
      setCartItems([]); // Clear the cart after ordering
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        <>
          <div style={styles.cartList}>
            {cartItems.map((item) => (
              <CartItem
                key={item.book_id}
                bookId={item.book_id}
                title={item.title}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <button style={styles.orderButton} onClick={handleOrdering}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  cartList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  emptyMessage: {
    textAlign: "center",
    color: "#777",
  },
  orderButton: {
    marginTop: "20px",
    padding: "12px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default Cart;

