import React from "react";
import "../Components/LandingPage.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    
    const email = event.target.email.value;
    const password = event.target.pass.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/home"); // Redirect to homepage or dashboard
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="form-container">
      <h2 className="heading">Login to Payzz</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Password:</label>
        <input type="password" name="pass" required />

        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate("/register")}>
          Register
        </button>
      </form>
    </div>
  );
}

export default LandingPage;
