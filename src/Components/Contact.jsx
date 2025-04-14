import React from "react";
import "./Contact.css";

function Contact(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
    
        console.log("Contact Form Submitted:", { name, email, message });
        alert("Thank you for reaching out! We'll get back to you shortly.");
        event.target.reset();
      };
      return(
<div className="contact-container">
    <h1>Contact Us</h1>
    <p>Have questions or feedback? We'd love to hear from you!</p>
    <form className="contact-form" onSubmit={handleSubmit} >
        <label htmlFor="name">Full name:</label>
        <input type="text" id="name" name="name" required/>

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
    </form>
    </div>
      );
}
export default Contact;