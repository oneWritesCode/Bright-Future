import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error occurred. Try again later.");
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", backgroundColor: "#fafafa" }}>
      <NavBar />

      <section style={{ padding: "100px 20px 50px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", color: "#7b2ff7", marginBottom: "10px" }}>
          Contact Us
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#333" }}>We would love to hear from you!</p>
      </section>

      <section style={{ maxWidth: "600px", margin: "0 auto 80px", padding: "20px", background: "white", borderRadius: "20px", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            style={inputStyle}
          />
          <button type="submit" style={submitButtonStyle}>Send</button>
        </form>
        {status && <p style={{ marginTop: "15px", textAlign: "center", color: "#7b2ff7" }}>{status}</p>}
      </section>

      <Footer />
    </div>
  );
}

const inputStyle = {
  padding: "12px 15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  outline: "none",
};

const submitButtonStyle = {
  padding: "12px 25px",
  backgroundColor: "#7b2ff7",
  color: "white",
  fontWeight: "600",
  fontSize: "1rem",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};
