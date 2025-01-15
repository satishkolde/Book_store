// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("id");
//   const userRole = localStorage.getItem("role");

//   const handleLogout = () => {
//     localStorage.removeItem("id");
//     localStorage.removeItem("role");
//     navigate("/auth");
//   };

//   return (
//     <nav style={styles.navbar}>
//       <ul style={styles.navList}>
//         <li style={styles.navItem}>
//           <Link to="/">Products</Link>
//         </li>
//         {userId && (
//           <li style={styles.navItem}>
//             <Link to="/cart">Cart</Link>
//           </li>
//         )}
//         {userRole === "Admin" && (
//           <li style={styles.navItem}>
//             <Link to="/add-book">Add Book</Link>
//           </li>
//         )}
//         {userId ? (
//           <li style={styles.navItem}>
//             <button style={styles.logoutButton} onClick={handleLogout}>
//               Logout
//             </button>
//           </li>
//         ) : (
//           <li style={styles.navItem}>
//             <Link to="/auth">Login</Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// const styles = {
//   navbar: {
//     backgroundColor: "#333",
//     padding: "10px 20px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   navList: {
//     listStyle: "none",
//     display: "flex",
//     gap: "20px",
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     color: "white",
//   },
//   logoutButton: {
//     background: "none",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
// };

// export default Navbar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("id");
  const userRole = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    navigate("/auth");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          BookStore
        </Link>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Products
          </Link>
        </li>
        {userId && (
          <li style={styles.navItem}>
            <Link to="/cart" style={styles.navLink}>
              Cart
            </Link>
          </li>
        )}
        {userRole === "Admin" && (
          <li style={styles.navItem}>
            <Link to="/add-book" style={styles.navLink}>
              Add Book
            </Link>
          </li>
        )}
        {userId ? (
          <li style={styles.navItem}>
            <button style={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <li style={styles.navItem}>
            <Link to="/auth" style={styles.navLink}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#343a40",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  logoLink: {
    textDecoration: "none",
    color: "#fff",
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  navLinkHover: {
    color: "#17a2b8",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  logoutButtonHover: {
    backgroundColor: "#c82333",
  },
};

export default Navbar;
