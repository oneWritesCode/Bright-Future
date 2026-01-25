import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import poster from "../assets/livehood/images/bulandi/bulandi_RCP2XwA.webp";
import hy from "../assets/livehood/images/bulandi/bulandi-1_TRco47l.webp"; 
import gy from "../assets/livehood/images/bulandi/bulandi-2.webp";
import { FaGraduationCap, FaHandsHelping, FaLightbulb, FaRoute, FaBriefcase, FaSchool, FaUserGraduate, FaChartLine } from "react-icons/fa";

export default function BulandiProgramme() {
  return (
    <div style={{ backgroundColor: "#faf7ff", minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif" }}>
      <NavBar />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #ff7b2f, #f1c40f)",
          color: "#fff",
          textAlign: "center",
          padding: "80px 20px",
          borderRadius: "0 0 50% 50% / 20%",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "20px", textShadow: "2px 2px rgba(0,0,0,0.2)" }}>
          Step to Empowerment - Bulandi
        </h1>
        <p style={{ fontSize: "20px", fontWeight: "500", maxWidth: "700px", margin: "0 auto", lineHeight: "1.5" }}>
          Supporting youth to achieve higher education, career guidance, and sustainable growth opportunities.
        </p>
        <img
          src={poster}
          alt="Bulandi Cover"
          style={{
            maxWidth: "800px",
            height: "auto",
            borderRadius: "15px",
            marginTop: "40px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </section>

      {/* Bulandi Objectives Section */}
      <section style={{ maxWidth: "900px", margin: "0 auto 60px auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", color: "#004080", fontWeight: "700", marginBottom: "30px" }}>
          Bulandi Objectives
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <FaGraduationCap size={40} color="#f1c40f" />
            <p>To reach out & engage young adults for training & employment</p>
          </div>
          <div style={cardStyle}>
            <FaHandsHelping size={40} color="#f1c40f" />
            <p>To train young people with career & life skills</p>
          </div>
          <div style={cardStyle}>
            <FaLightbulb size={40} color="#f1c40f" />
            <p>To empower young people to make informed decisions about their career</p>
          </div>
          <div style={cardStyle}>
            <FaRoute size={40} color="#f1c40f" />
            <p>To support trained aspirants to gain & retain their placement</p>
          </div>
          <div style={cardStyle}>
            <FaBriefcase size={40} color="#f1c40f" />
            <p>To facilitate aspirants for elevating overall wellbeing of their families</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 80px auto" }}>
        <h2 style={{ fontSize: "32px", color: "#004080", fontWeight: "700", marginBottom: "30px" }}>
          How it Works
        </h2>
        <img
          src={hy}
          alt="How it Works"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <img
          src={hy}
          alt="How it Works"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </section>

      {/* Bulandi Impact Section */}
      <section style={{ maxWidth: "900px", margin: "0 auto 80px auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", color: "#004080", fontWeight: "700", marginBottom: "30px" }}>
          Bulandi Impact
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={impactCardStyle}>
            <FaSchool size={40} color="#ff7b2f" />
            <p style={{ fontSize: "28px", fontWeight: "700", margin: "10px 0" }}>23419</p>
            <p>Aspirants Trained</p>
          </div>
          <div style={impactCardStyle}>
            <FaUserGraduate size={40} color="#ff7b2f" />
            <p style={{ fontSize: "28px", fontWeight: "700", margin: "10px 0" }}>22</p>
            <p>Development Centers</p>
          </div>
          <div style={impactCardStyle}>
            <FaRoute size={40} color="#ff7b2f" />
            <p style={{ fontSize: "28px", fontWeight: "700", margin: "10px 0" }}>450</p>
            <p>Employer Outreach</p>
          </div>
          <div style={impactCardStyle}>
            <FaChartLine size={40} color="#ff7b2f" />
            <p style={{ fontSize: "28px", fontWeight: "700", margin: "10px 0" }}>70%</p>
            <p>Placement Rate</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Card Style for Objectives
const cardStyle = {
  backgroundColor: "#fff",
  padding: "25px 15px",
  borderRadius: "15px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "default",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "1.5",
  color: "#333",
  gap: "15px",
  minHeight: "180px",
  justifyContent: "center",
};

// Card Style for Impact
const impactCardStyle = {
  backgroundColor: "#fff",
  padding: "25px 15px",
  borderRadius: "15px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "default",
  fontSize: "16px",
  color: "#333",
};
