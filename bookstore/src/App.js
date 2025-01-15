import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import AddBook from "./components/AddBook";
import Cart from "./components/Cart";
import ProtectedRoute from "./ProtectedRoute";
import PrdouctList from "./components/ProductList"
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
          {/* Public Route - Login/Register */}
          <Route path="/auth" element={<AuthForm />} />

          {/* Protected Routes */}
          <Route
            path="/add-book"
            element={
              <ProtectedRoute requiredRole="Admin">
                <AddBook />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <PrdouctList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          {/* Catch-All Route for 404 */}
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
