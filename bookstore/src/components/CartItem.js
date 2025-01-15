// import React from "react";

// const CartItem = ({ bookId, title, quantity, price, onRemove }) => {
//   return (
//     <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
//       <h2>{title}</h2>
//       <p>Quantity: {quantity}</p>
//       <p>Price: ${price}</p>
//       <button onClick={onRemove}>Remove</button>
//     </div>
//   );
// };

// export default CartItem;

import React from "react";

const CartItem = ({ bookId, title, price, quantity, onRemove }) => {
  return (
    <div style={styles.cartItem}>
      <div style={styles.info}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.quantity}>
          <strong>Quantity:</strong> {quantity}
        </p>
        <p style={styles.price}>
          <strong>Price:</strong> ₹{price}
        </p>
      </div>
      <button style={styles.removeButton} onClick={() => onRemove(bookId)}>
        Remove
      </button>
    </div>
  );
};

const styles = {
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  info: {
    maxWidth: "70%",
  },
  title: {
    margin: "0 0 10px",
    fontSize: "18px",
    color: "#333",
  },
  description: {
    margin: "0 0 10px",
    fontSize: "14px",
    color: "#555",
  },
  quantity: {
    margin: "5px 0",
    fontSize: "14px",
    color: "#333",
  },
  price: {
    margin: "5px 0",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#007bff",
  },
  removeButton: {
    padding: "8px 12px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default CartItem;

