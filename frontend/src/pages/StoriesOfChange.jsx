import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Import story image
import mounika from "../assets/outreach/mounika-boisi.webp";

export default function StoriesOfChange() {
  return (
    <div style={{ 
      backgroundColor: "#fdfbff", 
      minHeight: "100vh", 
      fontFamily: "'Inter', sans-serif",
      overflowX: "hidden" 
    }}>
      <NavBar />

      {/* --- Minimalist Hero Header --- */}
      <section style={{ 
        padding: "120px 20px 60px", 
        textAlign: "center",
        background: "linear-gradient(to bottom, #f3ebff, #fdfbff)" 
      }}>
        <span style={{ 
          textTransform: "uppercase", 
          letterSpacing: "4px", 
          fontSize: "0.85rem", 
          fontWeight: "700", 
          color: "#7b2ff7",
          display: "block",
          marginBottom: "10px"
        }}>
          Transforming Lives
        </span>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "900", color: "#1a1a1a", margin: 0 }}>
          Stories of <span style={{ color: "#7b2ff7" }}>Change</span>
        </h1>
      </section>

      {/* --- Main Story Section --- */}
      <section style={{ padding: "0 20px 100px" }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto", 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))",
          gap: "60px",
          alignItems: "start"
        }}>
          
          {/* LEFT COLUMN: Visual & Quick Stats */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div style={{ position: "relative" }}>
              {/* Decorative Background Blob */}
              <div style={{ 
                position: "absolute", 
                top: "-20px", 
                left: "-20px", 
                width: "100%", 
                height: "100%", 
                background: "#7b2ff7", 
                borderRadius: "30px",
                zIndex: 0,
                opacity: 0.1
              }} />
              
              <img
                src={mounika}
                alt="Mounika Boisi"
                style={{ 
                  width: "100%", 
                  borderRadius: "30px", 
                  boxShadow: "0 30px 60px rgba(123, 47, 247, 0.2)",
                  position: "relative",
                  zIndex: 1,
                  display: "block"
                }}
              />
              
              {/* Impact Tag */}
              <div style={{
                position: "absolute",
                bottom: "30px",
                right: "-20px",
                backgroundColor: "white",
                padding: "20px 30px",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                zIndex: 2,
                borderLeft: "6px solid #7b2ff7"
              }}>
               
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Narrative */}
          <div style={{ padding: "10px 0" }}>
            <h2 style={{ 
              fontSize: "2.8rem", 
              fontWeight: "800", 
              lineHeight: "1.1", 
              marginBottom: "30px",
              color: "#1a1a1a" 
            }}>
              The Journey of <br /> 
              <span style={{ color: "#7b2ff7" }}>Mounika Boisi</span>
            </h2>

            {/* The Big Quote */}
            <div style={{ marginBottom: "40px", position: "relative" }}>
               <span style={{ 
                 fontSize: "5rem", 
                 color: "#7b2ff7", 
                 opacity: 0.2, 
                 position: "absolute", 
                 top: "-40px", 
                 left: "-10px",
                 fontFamily: "serif"
               }}>"</span>
              <p style={{ 
                fontSize: "1.4rem", 
                fontWeight: "600", 
                lineHeight: "1.5", 
                color: "#4834d4",
                fontStyle: "italic",
                position: "relative",
                zIndex: 1
              }}>
                “Imagine reaching an interview 4 hours late because your family is not supportive of your career!”
              </p>
            </div>

            <div style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
              <p style={{ marginBottom: "20px" }}>
                Dreaming big was never a challenge for 22-year-old <strong>Mounika Boisi</strong>, 
                a student from Hyderabad who had to discontinue her diploma. Living on her 
                father’s modest income from a general store, education felt like a luxury 
                they could no longer afford.
              </p>

              <div style={{ 
                backgroundColor: "white", 
                padding: "30px", 
                borderRadius: "20px", 
                border: "1px solid #eee",
                marginBottom: "20px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.02)"
              }}>
                <h4 style={{ color: "#7b2ff7", marginTop: 0 }}>The Turning Point</h4>
                <p style={{ fontStyle: "italic", margin: 0 }}>
                  “I felt an excitement about my future. I learned customer handling, computer
                  skills, and interview preparation. With my newfound confidence, I was
                  eventually hired by SBI customer service support.”
                </p>
              </div>

              <p style={{ marginBottom: "20px" }}>
                After discontinuing her education, Mounika faced a job market that seemed 
                closed to her. It was through a friend's reference that she discovered 
                <strong> Bright Future</strong>—a moment that changed everything.
              </p>

              <p>
                Today, Mounika isn't just an employee; she is a <strong>pillar of strength</strong>. 
                Her story serves as a powerful reminder that with the right skills and 
                opportunity, no academic or financial barrier is permanent.
              </p>
            </div>

            
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}