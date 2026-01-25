import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import poster from "../assets/logos/mission-vision-and-value.webp";

export default function Mission() {
  return (
    <div>
      <NavBar />

      {/* Poster Section */}
      <section style={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src={poster}
          alt="Mission Poster"
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover", borderRadius: "12px" }}
        />
      </section>

      {/* Vision & Mission Section */}
      <section style={{ maxWidth: "1000px", margin: "60px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#004080", textAlign: "center", marginBottom: "40px" }}>
          Our Vision, Mission & Values
        </h2>

        {/* Vision & Mission Cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", marginBottom: "50px" }}>
          {/* Vision Card */}
          <div style={{
            flex: "1 1 400px",
            backgroundColor: "#f0f4ff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            minWidth: "280px",
          }}>
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#7b2ff7", marginBottom: "15px" }}>Our Vision</h3>
            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#333" }}>
              A Bright Future for all young people.
            </p>
          </div>

          {/* Mission Card */}
          <div style={{
            flex: "1 1 400px",
            backgroundColor: "#fff4f8",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            minWidth: "280px",
          }}>
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#7b2ff7", marginBottom: "15px" }}>Our Mission</h3>
            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#333" }}>
              Facilitate young people to become changemakers in the community by developing their future skills.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#004080", marginBottom: "25px", textAlign: "center" }}>
          Our Values
        </h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}>
          {[
            {
              title: "Integrity",
              desc: "We work with the highest professional and ethical standards, and value transparency and honesty in our daily work, communications, and relationships.",
              color: "#e6f0ff"
            },
            {
              title: "Collaboration",
              desc: "We reach out to each other and work together in order to deliver best results and achieve common goals by making the most of unique and diverse talents.",
              color: "#fff0f6"
            },
            {
              title: "Accountability",
              desc: "We hold ourselves accountable for the quality of our work with respect to our aspirants, partners, donors and each other.",
              color: "#f0fff4"
            },
            {
              title: "Respect",
              desc: "We value and empathize with experiences and perspectives of everyone, treating our aspirants, partners, donors and each other with sensitivity and respect.",
              color: "#fff9e6"
            },
            {
              title: "Equity",
              desc: "We approach and build each connection based on the unique needs of each stakeholder with utmost fairness.",
              color: "#f9f0ff"
            },
          ].map((val) => (
            <div key={val.title} style={{
              backgroundColor: val.color,
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}>
              <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#004080", marginBottom: "12px" }}>{val.title}</h4>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#333" }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
