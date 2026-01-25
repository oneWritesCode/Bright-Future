import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Import images
import why1 from "../assets/career/why-1.webp";
import why2 from "../assets/career/why-2.webp";
import why3 from "../assets/career/why-3.webp";
import why4 from "../assets/career/why-4.webp";

export default function Career() {
  const reasons = [
    { img: why1, title: "Flexible Work Hours", desc: "We value output over clocking in. Work when you are most productive." },
    { img: why2, title: "Work From Home", desc: "Enjoy the comfort of your home while staying connected with a global team." },
    { img: why3, title: "Work Life Balance", desc: "We respect your personal time. No late-night pings or weekend burnouts." },
    { img: why4, title: "Friendly Leave Policy", desc: "Recharge with a leave policy designed for your mental and physical well-being." },
  ];

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      <NavBar />

      {/* --- Elegant Hero Section --- */}
      <section style={{
        padding: "140px 20px 100px",
        textAlign: "center",
        background: "radial-gradient(circle at top right, #f3ebff 0%, #ffffff 50%)",
        position: "relative"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span style={{
            backgroundColor: "#7b2ff715",
            color: "#7b2ff7",
            padding: "8px 20px",
            borderRadius: "50px",
            fontSize: "0.85rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "2px"
          }}>
            Careers at Bright Future
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "900", color: "#1a1a1a", marginTop: "20px", lineHeight: "1.1" }}>
            Building the Future <br /> Starts With <span style={{ color: "#7b2ff7" }}>You.</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#636e72", marginTop: "25px", maxWidth: "600px", margin: "25px auto 0", lineHeight: "1.6" }}>
            Join a mission-driven team dedicated to empowering the next generation. We don't just offer jobs; we offer a platform for growth.
          </p>
        </div>
      </section>

      {/* --- Perks Section (The "Why") --- */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#1a1a1a" }}>Why Our Team Loves It Here</h2>
          <div style={{ width: "50px", height: "4px", background: "#7b2ff7", margin: "15px auto", borderRadius: "10px" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "30px",
        }}>
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              style={{
                background: "white",
                borderRadius: "30px",
                padding: "40px 30px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                border: "1px solid #f0f0f0",
                textAlign: "left",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(123, 47, 247, 0.1)";
                e.currentTarget.style.borderColor = "#7b2ff730";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderColor = "#f0f0f0";
              }}
            >
              <div style={{
                width: "70px", height: "70px", backgroundColor: "#f3ebff",
                borderRadius: "20px", display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "25px"
              }}>
                <img src={reason.img} alt={reason.title} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#1a1a1a", marginBottom: "12px" }}>{reason.title}</h3>
              <p style={{ color: "#636e72", lineHeight: "1.6", fontSize: "0.95rem" }}>{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      <section style={{ padding: "100px 20px" }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%)",
          borderRadius: "40px",
          padding: "80px 40px",
          textAlign: "center",
          color: "white",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 30px 60px rgba(0,0,0,0.2)"
        }}>
          {/* Decorative Circle */}
          <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "200px", height: "200px", background: "#7b2ff7", borderRadius: "50%", opacity: 0.2, filter: "blur(40px)" }} />

          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "800", marginBottom: "20px" }}>
            Ready to shape your career?
          </h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, maxWidth: "600px", margin: "0 auto 40px", lineHeight: "1.7" }}>
            We are always looking for passionate individuals to join our growing family.
            Check out our latest openings and find your place.
          </p>

          <button
            style={ctaButtonStyle}
            onClick={() => window.open("https://100.keka.com/careers/api/embedjobs/7e2f830e-7500-440f-992f-5013e438f8b4", "_blank")}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#7b2ff7";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#7b2ff7";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Explore Openings
          </button>

        </div>
      </section>

      <Footer />
    </div>
  );
}

// Styles
const ctaButtonStyle = {
  backgroundColor: "#7b2ff7",
  color: "white",
  padding: "18px 45px",
  fontSize: "1.1rem",
  fontWeight: "800",
  border: "none",
  borderRadius: "50px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
};