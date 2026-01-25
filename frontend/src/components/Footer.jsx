import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const linkHover = (e) => (e.currentTarget.style.color = "#ff6600");
  const linkLeave = (e) => (e.currentTarget.style.color = "#fff");

  // Social media icons
  const socialIcons = [
    { icon: <FaFacebookF />, name: "Facebook", link: "https://www.facebook.com/brightfuturei/" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/brightfutureind/?hl=en" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", link: "https://www.linkedin.com/company/brightfutureindia/?originalSubdomain=in" },
    { icon: <FaTwitter />, name: "Twitter", link: "https://x.com/BrightFutureInd" },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #004080 0%, #003366 100%)",
        color: "#fff",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Text */}
      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 50px",
          lineHeight: "1.8",
          fontSize: "14px",
          textAlign: "center",
          opacity: 0.9,
        }}
      >
        Bright Future is a project of New Resolution India, a Non-Governmental Organisation (NGO) registered in 2009 under Public Trust Act, 1950 (Registration No. E 26080, Mumbai), under Section 80(G) of the Income Tax Exemption Act, 1961 and Foreign Contribution (Regulation) Act, 2010 (Registration no. 083781420).
      </p>

      {/* Columns */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* About Us */}
        <div style={{ minWidth: "160px" }}>
          <h4 style={{ color: "#ffcc00", marginBottom: "20px", fontSize: "18px" }}>
            About Us
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { name: "Founder's Story", path: "/founders-story" },
              { name: "Our Team", path: "/our-team" },
              { name: "Our Supporters", path: "/our-supporters" },
              { name: "Our Blogs", path: "/publication" }, // Assuming your blogs route
            ].map((item, idx) => (
              <li key={idx} style={{ marginBottom: "12px" }}>
                <Link
                  to={item.path}
                  style={linkStyle}
                  onMouseEnter={linkHover}
                  onMouseLeave={linkLeave}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* All Programmes */}
        <div style={{ minWidth: "160px" }}>
          <h4 style={{ color: "#ffcc00", marginBottom: "20px", fontSize: "18px" }}>
            All Programmes
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { name: "Buniyaad", path: "/livehood-programme" },
              { name: "Bulandi", path: "/bulandi" },
              { name: "Badi Soch", path: "/badi-soch" },
            ].map((item, idx) => (
              <li key={idx} style={{ marginBottom: "12px" }}>
                <Link
                  to={item.path}
                  style={linkStyle}
                  onMouseEnter={linkHover}
                  onMouseLeave={linkLeave}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Impact */}
        <div style={{ minWidth: "160px" }}>
          <h4 style={{ color: "#ffcc00", marginBottom: "20px", fontSize: "18px" }}>
            Our Impact
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { name: "Outreach Missions", path: "/outreach-missions" },
              { name: "Stories of Change", path: "/stories-of-change" },
              { name: "Media Recognition", path: "/report" }, // Assuming media reports page
              { name: "Annual Reports", path: "/annual-reports" },
              { name: "Compliance Reports", path: "/report" }, // Assuming compliance page
            ].map((item, idx) => (
              <li key={idx} style={{ marginBottom: "12px" }}>
                <Link
                  to={item.path}
                  style={linkStyle}
                  onMouseEnter={linkHover}
                  onMouseLeave={linkLeave}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div style={{ minWidth: "160px" }}>
          <h4 style={{ color: "#ffcc00", marginBottom: "20px", fontSize: "18px" }}>
            Follow Us
          </h4>
          <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6600")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Strip */}
      <div
        style={{
          marginTop: "50px",
          paddingTop: "20px",
          fontSize: "12px",
          textAlign: "center",
          color: "rgba(255,255,255,0.7)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        © {new Date().getFullYear()} Bright Future. All Rights Reserved.
      </div>
    </footer>
  );
}
