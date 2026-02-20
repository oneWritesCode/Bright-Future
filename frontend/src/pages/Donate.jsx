import { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Donate() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    amount: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDonate = async () => {
    if (!form.amount || !form.name || !form.email) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      // Step 1: Create order from backend
      const res = await axios.post("http://localhost:8080/api/payment/create-order", {
        amount: form.amount
      });

      const order = res.data;

      // Step 2: Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY, // public key
        amount: order.amount,
        currency: "INR",
        name: "Bright Future",
        description: "Donation",
        order_id: order.id,
        handler: async function (response) {
          await axios.post("http://localhost:8080/api/payment/verify", {
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            ...form
          });

          alert("Donation Successful. Thank you!");
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: "#ff6600" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <>
      <NavBar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>🙏 Support Bright Future</h2>
          <p style={styles.subtitle}>
            Your donation can change lives. Fill in your details below to proceed.
          </p>

          <input
            style={styles.input}
            name="name"
            placeholder="Full Name *"
            onChange={handleChange}
          />
          <input
            style={styles.input}
            name="email"
            placeholder="Email *"
            onChange={handleChange}
          />
          <input
            style={styles.input}
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <input
            style={styles.input}
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
          <input
            style={styles.input}
            name="amount"
            placeholder="Donation Amount (INR) *"
            onChange={handleChange}
          />

          <button style={styles.button} onClick={handleDonate}>
            Donate Now
          </button>

          <p style={styles.note}>
            * Required fields. Your contribution is fully secure via Razorpay.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #003366, #0066cc)",
    padding: "20px"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "40px 30px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    textAlign: "center"
  },
  title: {
    color: "#003366",
    marginBottom: "5px"
  },
  subtitle: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px"
  },
  input: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
    width: "100%",
    transition: "all 0.3s ease",
    marginBottom: "10px",
    boxSizing: "border-box"
  },
  button: {
    backgroundColor: "#ff6600",
    color: "#fff",
    fontWeight: "bold",
    padding: "14px",
    fontSize: "16px",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "10px"
  },
  note: {
    fontSize: "12px",
    color: "#888",
    marginTop: "15px"
  }
};
