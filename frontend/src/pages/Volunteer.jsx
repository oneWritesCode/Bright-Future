import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Import volunteer image
import volunteerImg from "../assets/volenteer/volunteer_vcK6cYo.webp";
import { Link } from "react-router-dom";


export default function Volunteer() {
  const programs = [
    {
      title: "Maitri Program",
      commitment: "15 hours over 3-6 months",
      mode: "Online & Offline",
      desc: "One-to-one mentoring for young professionals and entrepreneurs. A comfortable, non-judgmental space to discuss challenges and gain confidence.",
      accent: "#7b2ff7",
      // Added the link here
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf_kT8mz1exh7PukPTPbgojjs-Y6lmwJ9dV0MO00Kz9zT3ZHQ/viewform"
    },
    {
      title: "BF Event Involvement",
      commitment: "2 hours minimum",
      mode: "Offline",
      desc: "Assist in community activities like talent competitions, arts, and career fairs. Strengthen rapport with stakeholders while developing social responsibility.",
      accent: "#00d2ff",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfbKMH1TRRoPKjYqG0uhCBBRxAU7JDmXp2eA8Ps6yicqRTWBA/viewform"
    },
    {
      title: "Building BF Capacities",
      commitment: "2 hours minimum",
      mode: "Online & Offline",
      desc: "Share your professional skills through workshops, mock-ups, and functional support to increase the efficiency of our team and youth.",
      accent: "#ff007a",
      link: "#" // Placeholder for other programs
    }
  ];

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: "#2d3436", overflowX: "hidden" }}>
      <NavBar />

      {/* --- Modern Hero Section --- */}
      <section style={{ 
        padding: "120px 20px 80px", 
        background: "linear-gradient(135deg, #f8f7ff 0%, #ffffff 100%)",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span style={{ color: "#7b2ff7", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.9rem" }}>
            Community & Impact
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "900", color: "#1a1a1a", marginTop: "10px", lineHeight: "1.1" }}>
            Why Volunteer with <br/><span style={{ color: "#7b2ff7" }}>Bright Future?</span>
          </h1>
          <div style={{ width: "60px", height: "5px", background: "#7b2ff7", margin: "25px auto", borderRadius: "10px" }} />
        </div>
      </section>

      {/* --- Featured Image with Decoration --- */}
      <section style={{ padding: "0 20px 100px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
          <div style={{ 
            position: "absolute", inset: "-20px", border: "2px solid #7b2ff7", 
            borderRadius: "40px", zIndex: 0, opacity: 0.2, transform: "rotate(-1deg)" 
          }} />
          <img
            src={volunteerImg}
            alt="Volunteer with Bright Future"
            style={{ 
              width: "100%", borderRadius: "30px", boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
              position: "relative", zIndex: 1, display: "block"
            }}
          />
        </div>
      </section>

      {/* --- Programs Grid --- */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f9f9fb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800" }}>Choose Your Path</h2>
            <p style={{ color: "#636e72" }}>Find the right type of volunteering that fits your schedule.</p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", 
            gap: "30px" 
          }}>
            {programs.map((p, i) => (
              <div key={i} style={{ 
                backgroundColor: "white", padding: "40px", borderRadius: "24px", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #eee",
                display: "flex", flexDirection: "column", justifyContent: "space-between"
              }}>
                <div>
                  <div style={{ 
                    display: "inline-block", padding: "6px 15px", borderRadius: "50px", 
                    backgroundColor: `${p.accent}15`, color: p.accent, fontSize: "0.8rem", 
                    fontWeight: "700", marginBottom: "20px" 
                  }}>
                    {p.mode}
                  </div>
                  <h3 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "15px" }}>{p.title}</h3>
                  <p style={{ color: "#444", lineHeight: "1.6", fontSize: "1rem", marginBottom: "20px" }}>{p.desc}</p>
                  
                  <div style={{ borderTop: "1px solid #eee", paddingTop: "20px", marginBottom: "25px" }}>
                    <small style={{ textTransform: "uppercase", color: "#999", fontWeight: "700", letterSpacing: "1px" }}>Commitment</small>
                    <p style={{ fontWeight: "600", margin: "5px 0 0", color: "#1a1a1a" }}>{p.commitment}</p>
                  </div>
                </div>
                
                {/* --- Updated Button with onClick --- */}
                <button 
                  onClick={() => {
                    if (p.link && p.link !== "#") {
                      window.open(p.link, "_blank"); // Opens form in a new tab
                    }
                  }}
                  style={{ 
                    backgroundColor: p.accent, color: "white", border: "none", 
                    padding: "14px", borderRadius: "12px", fontWeight: "700", cursor: "pointer",
                    boxShadow: `0 10px 20px ${p.accent}30`,
                    transition: "opacity 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Rest of your sections (Stats, Benefits, Final CTA) stay the same --- */}
      {/* ... */}
      
      <Footer />
    </div>
  );
}