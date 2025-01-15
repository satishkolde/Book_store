// import React, { useState } from "react";
// import axios from "axios";
// import {useNavigate} from 'react-router-dom'

// const AuthForm = () => {
//   const [isRegistering, setIsRegistering] = useState(false); // Toggle between Login and Register
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     role: "Client",
//   });
//   const [message, setMessage] = useState(""); // For displaying success or error messages
//   const navigate = useNavigate();
//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     console.log(formData);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const endpoint = isRegistering ? "http://localhost:8080/user/regis" : "http://localhost:8080/user/login";
//     const dataToSend = isRegistering
//       ? formData // Include all fields for registration
//       : { username: formData.username, password: formData.password }; // Only username and password for login

//     try {
//       const response = await axios.post(endpoint, dataToSend);
//       setMessage(isRegistering ? "Registration successful!" : "Login successful!");
//       console.log("Server Response:", response.data);
      // let id = response.data.id;
      // let role = response.data.role;
      // localStorage.setItem("id",id);
      // localStorage.setItem("role",role);
      // navigate("/");
//     } catch (error) {
//       // Handle error response
//       if (error.response) {
//         // Server responded with a status code other than 2xx
//         setMessage(`Error: ${error.response.data}`);
//       } else if (error.request) {
//         // Request was made, but no response was received
//         setMessage("Error: No response from server.");
//       } else {
//         // Something happened while setting up the request
//         setMessage(`Error: ${error.message}`);
//       }
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ccc" }}>
//       <h2>{isRegistering ? "Register" : "Login"}</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {isRegistering && (
//           <>
//             <div style={{ marginBottom: "10px" }}>
//               <label htmlFor="role">Role:</label>
//               <select id="role" name="role" value={formData.role} onChange={handleChange}>
//                 <option value="Admin">Admin</option>
//                 <option value="Client">Client</option>
//               </select>
//             </div>

//             <div style={{ marginBottom: "10px" }}>
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </>
//         )}

//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">{isRegistering ? "Register" : "Login"}</button>
//       </form>

//       <p style={{ color: "green", marginTop: "10px" }}>{message}</p>

//       <p style={{ marginTop: "10px" }}>
//         {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
//         <button
//           onClick={() => {
//             setIsRegistering(!isRegistering);
//             setMessage(""); // Clear the message when toggling
//             setFormData({
//               username: "",
//               password: "",
//               email: "",
//               role: "Client",
//             });
//           }}
//           style={{
//             background: "none",
//             border: "none",
//             color: "blue",
//             textDecoration: "underline",
//             cursor: "pointer",
//           }}
//         >
//           {isRegistering ? "Login" : "Register"}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default AuthForm;

import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "client", // Default role for registration
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? "http://localhost:8080/user/login" : "http://localhost:8080/user/register";

    try {
      const response = await axios.post(url, formData);
      let id = response.data.id;
      let role = response.data.role;
      localStorage.setItem("id",id);
      localStorage.setItem("role",role);
      if (isLogin) {
        alert("Login successful!");
      } else {
        alert("Registration successful!");
      }
      navigate("/");
    } catch (error) {
      console.error("Error during authentication:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              style={styles.input}
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          {!isLogin && (
            <>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email</label>
                <input
                  style={styles.input}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Role</label>
                <select
                  style={styles.input}
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="admin">Admin</option>
                  <option value="client">Client</option>
                </select>
              </div>
            </>
          )}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              style={styles.input}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p style={styles.toggleText}>
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            style={styles.toggleLink}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register here." : "Login here."}
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "400px",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "14px",
    marginBottom: "5px",
    color: "#555",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#218838",
  },
  toggleText: {
    marginTop: "15px",
    fontSize: "14px",
    textAlign: "center",
    color: "#555",
  },
  toggleLink: {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default AuthForm;
