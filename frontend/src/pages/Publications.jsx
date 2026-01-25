import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Correct image imports
import aug from "../assets/publication/images/august-parcha-2025.webp";
import dec from "../assets/publication/images/dec-parcha-2025.webp";
import jan from "../assets/publication/images/jan-parcha-2026.webp";
import july from "../assets/publication/images/july-2025.webp";
import nov from "../assets/publication/images/nov-thumb-2025.webp";
import octImg from "../assets/publication/images/oct-edition-2025.webp";
import sept from "../assets/publication/images/september-parcha2025.webp";

const publications = [
  { image: aug, reportUrl: "/publication-pdfs/pdf/parcha-august-edition-1_11zon_53xKC5Y.pdf", title: "August Edition 2025" },
  { image: sept, reportUrl: "/publication-pdfs/pdf/parcha-september-edition-1_11zon_TYlNZMh.pdf", title: "September Edition 2025" },
  { image: octImg, reportUrl: "/publication-pdfs/pdf/parcha-oct.pdf", title: "October Edition 2025" },
  { image: nov, reportUrl: "/publication-pdfs/pdf/november-parcha-1.pdf", title: "November Edition 2025" },
  { image: dec, reportUrl: "/publication-pdfs/pdf/parcha-december-edition.pdf", title: "December Edition 2025" },
  { image: jan, reportUrl: "/publication-pdfs/pdf/parcha-january-edition-2026.pdf", title: "January Edition 2026" },
  { image: july, reportUrl: "/publication-pdfs/pdf/parcha-july-edition_11zon.pdf", title: "July Edition 2025" },
];

export default function Publications() {
  return (
    <div style={styles.page}>
      <NavBar />

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Parcha – Official Newsletter of Bright Future
        </h1>
        <p style={styles.heroSubtitle}>
          Catch all the latest updates and stories from Bright Future in our monthly newsletter.
        </p>
      </div>

      {/* Publications Grid */}
      <div style={styles.container}>
        <div style={styles.grid}>
          {publications.map((item, index) => (
            <div key={index} style={styles.cardWrapper}>
              <a
                href={item.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.card}
              >
                <div style={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={styles.image}
                  />
                  <div style={styles.overlay}>
                    <span style={styles.overlayText}>Read Now</span>
                  </div>
                </div>
              </a>
              <p style={styles.title}>{`${index + 1}. ${item.title}`}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#f8f6ff",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
  },

  hero: {
    background: "linear-gradient(135deg, #7b2ff7, #f107a3)",
    color: "#fff",
    padding: "100px 10%",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },

  heroTitle: {
    fontSize: "48px",
    marginBottom: "15px",
    fontWeight: "800",
    lineHeight: "1.2",
  },

  heroSubtitle: {
    fontSize: "20px",
    opacity: 0.95,
    maxWidth: "700px",
    margin: "0 auto",
  },

  container: {
    padding: "80px 10%",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "35px",
  },

  cardWrapper: {
    textAlign: "center",
    transition: "transform 0.3s ease",
  },

  card: {
    display: "block",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
  },

  imageWrapper: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "15px",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
    transition: "transform 0.4s ease",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(123, 47, 247, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },

  overlayText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: "18px",
    letterSpacing: "0.5px",
  },

  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#4a148c",
    marginTop: "12px",
  },
};

// Additional hover effects
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("a[style*='display: block']");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-6px) scale(1.03)";
        card.querySelector("img").style.transform = "scale(1.1)";
        card.querySelector("div").style.opacity = "1";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
        card.querySelector("img").style.transform = "scale(1)";
        card.querySelector("div").style.opacity = "0";
      });
    });
  });
}
