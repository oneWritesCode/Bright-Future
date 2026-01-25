import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Section 1: Financial Audit Reports
const reports = import.meta.glob("../assets/reports/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

// Section 2: Foreign Contribution Reports
const foreignReports = import.meta.glob("../assets/reports/foreign/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

// Section 3: Credentials Certificates
const credentialsReports = import.meta.glob("../assets/reports/fcra/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

export default function Report() {
  return (
    <div style={styles.page}>
      <NavBar />

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Compliance Report</h1>
        <p style={styles.heroSubtitle}>
          Transparency is our commitment. Access all audited reports, foreign
          contribution details, and statutory certificates below.
        </p>
      </div>

      <div style={styles.container}>
        {/* Section 1 */}
        <h2 style={styles.sectionTitle}>Our Financial Audit Reports</h2>
        <div style={styles.grid}>
          {Object.entries(reports).map(([path, url], index) => {
            const fileName = path
              .split("/")
              .pop()
              .replace(/_/g, " ")
              .replace(".pdf", "");

            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.card}
              >
                <div style={styles.icon}>📊</div>
                <div>
                  <p style={styles.cardTitle}>{fileName}</p>
                  <p style={styles.cardSub}>Click to view or download</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Section 2 */}
        <h2 style={{ ...styles.sectionTitle, marginTop: "70px" }}>
          Details of Foreign Contributions Received by Bright Future India
        </h2>
        <div style={styles.grid}>
          {Object.entries(foreignReports).map(([path, url], index) => {
            const fileName = path
              .split("/")
              .pop()
              .replace(/_/g, " ")
              .replace(".pdf", "");

            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.card}
              >
                <div style={styles.icon}>🌍</div>
                <div>
                  <p style={styles.cardTitle}>{fileName}</p>
                  <p style={styles.cardSub}>Click to view or download</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Section 3 */}
        <h2 style={{ ...styles.sectionTitle, marginTop: "70px" }}>
          Credentials: FCRA, CSR-1, 80G, and 12A Certificates
        </h2>
        <div style={styles.grid}>
          {Object.entries(credentialsReports).map(([path, url], index) => {
            const fileName = path
              .split("/")
              .pop()
              .replace(/_/g, " ")
              .replace(".pdf", "");

            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.card}
              >
                <div style={styles.icon}>🏆</div>
                <div>
                  <p style={styles.cardTitle}>{fileName}</p>
                  <p style={styles.cardSub}>Click to view or download</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#f4f2fb",
    minHeight: "100vh",
  },

  hero: {
    background: "linear-gradient(135deg, #7b2ff7, #f107a3)",
    color: "#fff",
    padding: "70px 10%",
    textAlign: "center",
  },

  heroTitle: {
    fontSize: "42px",
    marginBottom: "10px",
    fontWeight: "700",
  },

  heroSubtitle: {
    fontSize: "18px",
    opacity: 0.9,
  },

  container: {
    padding: "60px 10%",
  },

  sectionTitle: {
    fontSize: "28px",
    color: "#4a148c",
    marginBottom: "30px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    background: "#fff",
    padding: "18px",
    borderRadius: "12px",
    textDecoration: "none",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    color: "#333",
  },

  icon: {
    fontSize: "34px",
  },

  cardTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#6a1b9a",
    margin: 0,
  },

  cardSub: {
    fontSize: "13px",
    color: "#777",
    margin: 0,
  },
};
