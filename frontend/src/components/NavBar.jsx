import { useState } from "react";
import { Link } from "react-router-dom";

// Import the Research Insights PDF
import researchPDF from "../assets/reports/research/gender-equity-report.pdf";
import logo from "../assets/main_logo.png";

const MENU_ITEMS = [
  {
    title: "Home",
    links: [{ name: "Page", path: "/" }],
  },
  {
    title: "About Us",
    links: [
      { name: "Founder's Story", path: "/founders-story" },
      { name: "Our Team", path: "/our-team" },
      { name: "Our Supporters", path: "/our-supporters" },
      { name: "Mission Vision & Values", path: "/mission" },
      { name: "Our Organization & Advisory Board", path: "/advisory" },
      { name: "Compliance Report", path: "/report" },
      { name: "Our Publication", path: "/publication" },
    ],
  },
  {
    title: "Applications",
    links: [
      { name: "Step to Livelihood Programme", path: "/livehood-programme" },
      { name: "Bulandi", path: "/bulandi" },
      { name: "Badi Soch", path: "/badi-soch" },
    ],
  },
  {
    title: "Our Impact",
    links: [
      { name: "Outreach Missions", path: "/outreach-missions" },
      { name: "Stories of Change", path: "/stories-of-change" },
      { name: "Annual Reports", path: "/annual-reports" },
      { name: "Research Insights", pdf: researchPDF },
    ],
  },
  {
    title: "Join the Change",
    links: [
      { name: "Volunteer", path: "/volunteer" },
      { name: "Career", path: "/career" },
    ],
  },
];

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
      {/* Injecting hover styles that standard inline-styles can't do */}
      <style>{`
        .nav-item:hover .link-title { color: #ffca28; }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 20px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ffca28;
          transition: width 0.3s;
        }
        .nav-item:hover::after { width: 100%; }
        .dropdown-link:hover {
          background-color: #f8f9fa;
          color: #004080 !important;
          padding-left: 25px !important;
        }
        .donate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 102, 0, 0.4);
          background-color: #e65c00 !important;
        }
      `}</style>

      <nav style={styles.nav}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>

        <ul style={styles.navLinks}>
          {MENU_ITEMS.map((item) => (
            <li
              key={item.title}
              className="nav-item"
              style={styles.navItem}
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className="link-title" style={styles.linkTitle}>
                {item.title}
                <span style={styles.chevron}>{activeMenu === item.title ? "▴" : "▾"}</span>
              </span>

              <ul
                style={{
                  ...styles.dropdown,
                  opacity: activeMenu === item.title ? 1 : 0,
                  visibility: activeMenu === item.title ? "visible" : "hidden",
                  transform: activeMenu === item.title ? "translateY(0)" : "translateY(15px)",
                }}
              >
                {item.links.map((link) => (
                  <li key={link.name} style={{ listStyle: "none" }}>
                    {link.pdf ? (
                      <a
                        href={link.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-link"
                        style={styles.dropdownItem}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.path} className="dropdown-link" style={styles.dropdownItem}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li style={styles.contactLink}>
            <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
              Contact Us
            </Link>
          </li>

          <li>
            <Link to="/donate" className="donate-btn" style={styles.donateBtn}>
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 60px",
    height: "85px",
    backgroundColor: "#003366", // Slightly deeper professional blue
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  logoContainer: { display: "flex", alignItems: "center" },
  logo: {
    height: "75px",
    objectFit: "contain",
    cursor: "pointer",
    background: "transparent",  
    borderRadius: "0",           
    display: "block",            
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "35px",
    alignItems: "center",
    margin: 0,
    padding: 0,
    height: "100%",
  },
  navItem: {
    position: "relative",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  linkTitle: {
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    transition: "color 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  chevron: { fontSize: "12px", opacity: 0.7 },
  dropdown: {
    position: "absolute",
    top: "85px",
    left: "-20px",
    backgroundColor: "#ffffff",
    padding: "15px 0",
    borderRadius: "12px",
    minWidth: "240px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
    transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
    border: "1px solid rgba(0,0,0,0.05)",
    zIndex: 100,
  },
  dropdownItem: {
    display: "block",
    padding: "12px 25px",
    fontSize: "14px",
    color: "#444",
    textDecoration: "none",
    transition: "all 0.2s ease",
    borderLeft: "3px solid transparent",
  },
  contactLink: {
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    opacity: 0.9,
  },
  donateBtn: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#ff6600",
    padding: "12px 28px",
    borderRadius: "50px", // Rounded pill shape
    fontSize: "14px",
    transition: "all 0.3s ease",
    display: "inline-block",
  },
};