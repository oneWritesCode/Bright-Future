import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Import images
import badiSoch from "../assets/outreach/badi-soch.webp";
import buniyadPng from "../assets/outreach/buniyad-png.webp";
import placementDrive from "../assets/outreach/placement-drive.webp";
import bulandiPng from "../assets/outreach/bulandi-png.webp";
import mobilization11 from "../assets/outreach/mobilization-1-1.webp";
import boy from "../assets/outreach/boy.webp";
import girl from "../assets/outreach/girl.webp";

// Successful placement images
import success from "../assets/outreach/success.webp";
import success2 from "../assets/outreach/success2.webp";

export default function OutreachMissions() {
  const programs = [
    { src: bulandiPng, title: "Bulandi Program", desc: "Empowering youth through leadership.", color: "#7b2ff7" },
    { src: badiSoch, title: "Badi Soch", desc: "Broadening horizons and mindsets.", color: "#f107a3" },
    { src: buniyadPng, title: "Buniyad Program", desc: "Building strong foundational skills.", color: "#ff8a00" },
    { src: placementDrive, title: "Placement Drive", desc: "Connecting talent with opportunity.", color: "#00c6ff" },
    { src: mobilization11, title: "Mobilization", desc: "Community engagement at the grassroots.", color: "#00dbde" },
  ];

  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: "#2d3436", overflowX: "hidden" }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{
        position: "relative",
        padding: "100px 20px 140px",
        background: "linear-gradient(135deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        color: "white",
        textAlign: "center",
      }}>
        <h1 style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)", fontWeight: "800", margin: 0 }}>
          Bright Future’s <br /> <span style={{ color: "#FFCC70" }}>Reach Out</span>
        </h1>
        <p style={{ maxWidth: "600px", margin: "20px auto 0", fontSize: "1.1rem", opacity: 0.9 }}>
          Intervention through dedicated programs designed to empower, educate, and elevate.
        </p>
      </section>

      {/* Programs Section */}
      <section style={{ maxWidth: "1200px", margin: "-60px auto 80px", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "25px" }}>
          {programs.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={{ height: "200px" }}>
                <img src={item.src} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "20px", borderTop: `5px solid ${item.color}` }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>{item.title}</h3>
                <p style={{ color: "#636e72", fontSize: "0.9rem" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gender Makeup Section */}
      <section style={{ padding: "80px 20px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800" }}>Gender Makeup Of Beneficiaries</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "40px" }}>
            {/* Boys */}
            <div style={{ position: "relative", height: "300px", borderRadius: "24px", overflow: "hidden" }}>
              <img src={boy} alt="Boys" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(123, 47, 247, 0.9), transparent 70%)",
                display: "flex", alignItems: "flex-end", padding: "20px"
              }}>
                <h3 style={{ color: "white" }}>Boys</h3>
              </div>
            </div>

            {/* Girls */}
            <div style={{ position: "relative", height: "300px", borderRadius: "24px", overflow: "hidden" }}>
              <img src={girl} alt="Girls" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(241, 7, 163, 0.9), transparent 70%)",
                display: "flex", alignItems: "flex-end", padding: "20px"
              }}>
                <h3 style={{ color: "white" }}>Girls</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Successful Placement Section */}
      <section style={{ padding: "90px 20px", backgroundColor: "#faf7ff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.3rem", fontWeight: "800", marginBottom: "50px" }}>
            Successful Placement
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", textAlign: "center" }}>
            
            {/* First Image */}
            <div>
              <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", marginBottom: "15px" }}>
                <img src={success} alt="Sectors" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#7b2ff7" }}>SUCCESSFUL PLACEMENT</h3>
              <p style={{ fontSize: "1rem", fontWeight: "600" }}>SECTORS</p>
              
            </div>

            {/* Second Image */}
            <div>
              <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", marginBottom: "15px" }}>
                <img src={success2} alt="Placement" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#f107a3" }}>SUCCESSFUL PLACEMENT</h3>
              <p style={{ fontSize: "1rem", fontWeight: "600" }}>PLACEMENT</p>
              <p style={{ fontSize: "0.95rem", color: "#636e72" }}>ASPIRANTS</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
