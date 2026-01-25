import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import founderImg from "../assets/founder.jpeg";

export default function Founder() {
  return (
    <div style={styles.page}>
      <NavBar />

      {/* Hero Section */}
      <header style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <div style={styles.imageContainer}>
            <img src={founderImg} alt="Kishor Palve" style={styles.founderImage} />
          </div>
          <h1 style={styles.title}>Founder’s Story</h1>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>The Journey of Kishor Palve</p>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.container}>
        <section style={styles.storyCard}>
          <div style={styles.paragraphGroup}>
            <p style={styles.paragraph}>
              Kishor Palve, the eldest of three children, was born in 1984 in the small village of Udarmal
              in Ahmednagar district, Maharashtra, India, where barely 500 families lived. Growing up,
              he saw very few role models around him. Most children in his community had limited dreams
              for their future, often choosing the same paths without really knowing why. After four
              years of schooling in Ahmednagar, his family moved to Mumbai, hoping for better
              opportunities.
            </p>

            <p style={styles.paragraph}>
              As a young boy in school, Kishor too followed the crowd. When it was time to pick a stream
              after school, he chose commerce, not out of passion, but simply because others with similar
              marks had done so. He never truly understood the reasoning behind such choices.
            </p>
          </div>

          <div style={styles.accentSection}>
            <p style={styles.paragraph}>
              During college, something shifted. While attending coaching classes, an Economics
              professor inspired him with his teaching style and passion. For the first time, Kishor
              realized that work could bring deep satisfaction, and he began to dream of doing something
              meaningful in life.
            </p>
          </div>

          <div style={styles.paragraphGroup}>
            <p style={styles.paragraph}>
              In his third year of college, he decided to experiment with business by selling vada pavs,
              Mumbai’s favorite snack. But the lack of a license led to his stall being shut down,
              resulting in financial loss. The setback was painful, but it planted the seed of
              resilience and ambition in him.
            </p>

            <p style={styles.paragraph}>
              Soon after, a chance meeting at a tally course changed the course of his life. Kishor met a
              professional social worker who introduced him to the field of social work. Curious and
              motivated, he applied to Karve Institute in Pune, but didn’t get selected. Faced with a
              choice, wait another year for a reputed institute or join a lesser-known one in Satara, he
              chose passion over prestige.
            </p>
          </div>

          <blockquote style={styles.quoteBox}>
             "Kishor enrolled in the MSW course at Yashwant Rao Chavan School of Social Work in Satara,
              believing that true impact depended on commitment, not the name of the institution."
          </blockquote>

          <div style={styles.paragraphGroup}>
            <p style={styles.paragraph}>
              While many of his classmates lacked real interest, Kishor found his purpose. He wanted to
              help young people like himself, who often drifted into careers without guidance or
              self-awareness. After completing his MSW and gaining experience with NGOs, he began
              researching how to address this problem.
            </p>

            <p style={styles.paragraph}>
              He discovered that adolescents, especially in their final years of school, needed
              guidance to identify their interests, talents, and skills. Even school dropouts, he felt,
              needed encouragement to build skills that could open doors to work.
            </p>

            <p style={styles.paragraph}>
              Kishor, along with a few friends, began meeting with school students and dropouts,
              encouraging them to think about their futures and showing them how education and talent
              could shape their careers. These simple conversations were the seeds of a bigger dream.
            </p>
          </div>

          <div style={styles.finalHighlight}>
            <p style={styles.highlightText}>
              From those beginnings, <strong>New Resolution India</strong> was born, and with it the
              project <strong>Bright Future</strong> – an initiative to empower adolescents and youth to
              dream, aspire, and build meaningful careers.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#fcfaff",
    fontFamily: "'Inter', sans-serif",
    color: "#2d3436",
    lineHeight: "1.6",
  },
  heroSection: {
    position: "relative",
    padding: "100px 20px",
    background: "linear-gradient(135deg, #6c33e0 0%, #a3118e 100%)",
    color: "white",
    textAlign: "center",
    overflow: "hidden",
  },
  imageContainer: {
    display: "inline-block",
    position: "relative",
    zIndex: 2,
    marginBottom: "30px",
  },
  founderImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "6px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    margin: "10px 0",
    letterSpacing: "-1px",
  },
  titleUnderline: {
    width: "60px",
    height: "4px",
    backgroundColor: "#ffeb3b",
    margin: "0 auto 20px",
    borderRadius: "2px",
  },
  subtitle: {
    fontSize: "1.2rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    opacity: 0.9,
    fontWeight: "300",
  },
  container: {
    maxWidth: "850px",
    margin: "-50px auto 80px",
    padding: "0 20px",
    position: "relative",
    zIndex: 3,
  },
  storyCard: {
    backgroundColor: "white",
    padding: "60px",
    borderRadius: "20px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
  },
  paragraphGroup: {
    marginBottom: "30px",
  },
  paragraph: {
    fontSize: "1.1rem",
    marginBottom: "20px",
    color: "#4a4a4a",
    textAlign: "justify",
  },
  accentSection: {
    margin: "40px 0",
    padding: "30px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    borderLeft: "4px solid #a3118e",
    fontStyle: "italic",
  },
  quoteBox: {
    margin: "50px 0",
    padding: "30px",
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#6c33e0",
    textAlign: "center",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
  },
  finalHighlight: {
    marginTop: "50px",
    padding: "40px",
    background: "linear-gradient(to right, #f3e9ff, #ffffff)",
    borderRadius: "15px",
    borderLeft: "8px solid #6c33e0",
  },
  highlightText: {
    fontSize: "1.2rem",
    color: "#2d3436",
    margin: 0,
  },
};