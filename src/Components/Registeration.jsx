import React from "react";
import { useNavigate } from "react-router-dom";
import "./Registeration.css";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function RegistrationPage() {
  const navigate = useNavigate();

  const signup = async (event) => {
    event.preventDefault();

    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const dob = event.target.dob.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const cpass = event.target.cpass.value;

    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 18) {
      alert("You must be at least 18 years old to register.");
      return;
    }

    if (pass !== cpass) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await addDoc(collection(db, "users"), {
        fname,
        lname,
        dob,
        phone,
        email,
        password: pass, // 🔐 Avoid storing plain passwords in production!
      });

      alert("Registration successful!");
      navigate("/Login");
    } catch (error) {
      console.error("Firestore error:", error);
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Register with Payzz</h2>
      <form onSubmit={signup}>
        <label>First Name:</label>
        <input type="text" name="fname" required />

        <label>Last Name:</label>
        <input type="text" name="lname" required />

        <label>Date of Birth:</label>
        <input type="date" name="dob" required />

        <label>Phone:</label>
        <input type="text" name="phone" required />

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Password:</label>
        <input type="password" name="pass" required />

        <label>Confirm Password:</label>
        <input type="password" name="cpass" required />

        <button type="submit">Sign Up</button>
        <button type="button" onClick={() => navigate("/Login")}>
          Login
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
