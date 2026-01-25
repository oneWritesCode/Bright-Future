import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Donor Logos
import aker from "../assets/logos/donor/aker-solution.webp";
import angelOne from "../assets/logos/donor/angel-one.webp";
import aws from "../assets/logos/donor/aws-incommunities-dark-1536x283.webp";
import axis from "../assets/logos/donor/axis.webp";
import cogfdn from "../assets/logos/donor/cogfdn-1536x465.webp";
import deloitte from "../assets/logos/donor/deloitte-1.webp";
import empower from "../assets/logos/donor/empower-logo.webp";
import fiserv from "../assets/logos/donor/fiserv.webp";
import hdfc from "../assets/logos/donor/hdfc-pariwartan-logo_togather.webp";
import highway from "../assets/logos/donor/highway.webp";
import jpm from "../assets/logos/donor/jpm_logo_final-1-1.webp";
import macquarie from "../assets/logos/donor/macquarie-1-300x74.webp";
import mtar from "../assets/logos/donor/mtar-logo-1.webp";
import tmf from "../assets/logos/donor/tmf-smart-450x167-1.webp";
import ups from "../assets/logos/donor/ups-logo-1024x576-1.webp";
import uwm from "../assets/logos/donor/uwm.webp";
import welspun from "../assets/logos/donor/welspun_PECHZSO.webp";

const donorLogos = [
  aker, angelOne, aws, axis, cogfdn, deloitte, empower, fiserv,
  hdfc, highway, jpm, macquarie, mtar, tmf, ups, uwm, welspun
];

// Volunteer Logos
import aditya from "../assets/logos/volnteers/aditya-birla-logo.webp";
import color from "../assets/logos/volnteers/color-deutsche-bank-logo-1536x412.webp";
import eclerx from "../assets/logos/volnteers/eclerx-logo_final.webp";
import glenmark from "../assets/logos/volnteers/glenmark.webp";
import horizontal from "../assets/logos/volnteers/horizontal-logo-1536x496.webp";
import hsbc from "../assets/logos/volnteers/hsbc-1.webp";
import icici from "../assets/logos/volnteers/icici-prudential-life-insurance-vector-logo.webp";
import kalpataru from "../assets/logos/volnteers/kalpataru-logo-1-1536x303.webp";
import kpmg from "../assets/logos/volnteers/kpmg-1.webp";
import lnt from "../assets/logos/volnteers/lnt.webp";
import nasscom from "../assets/logos/volnteers/nasscom.webp";
import piramal from "../assets/logos/volnteers/piramal-foundation-big.webp";
import rbl from "../assets/logos/volnteers/rbl-bank-1.webp";
import tcs from "../assets/logos/volnteers/tcs-png-logo.webp";
import untitled from "../assets/logos/volnteers/untitled-design-14.webp";
import uwmVolunteer from "../assets/logos/volnteers/uwm-cmyk-768x507.webp";
import wipro from "../assets/logos/volnteers/wipro-1.webp";

const volunteerLogos = [
  aditya, color, eclerx, glenmark, horizontal, hsbc, icici, kalpataru,
  kpmg, lnt, nasscom, piramal, rbl, tcs, untitled, uwmVolunteer, wipro
];

// Employer Logos
import ccd from "../assets/logos/employeer/ccd-1.webp";
import emp01 from "../assets/logos/employeer/employee-parners-01-768x576.webp";
import emp02 from "../assets/logos/employeer/employee-parners-02-768x576.webp";
import emp03 from "../assets/logos/employeer/employee-parners-03-768x576.webp";
import emp04 from "../assets/logos/employeer/employee-parners-04-768x576.webp";
import emp06 from "../assets/logos/employeer/employee-parners-06-768x576.webp";
import emp07 from "../assets/logos/employeer/employee-parners-07-768x576.webp";
import emp08 from "../assets/logos/employeer/employee-parners-08-768x576.webp";
import emp09 from "../assets/logos/employeer/employee-parners-09-768x576.webp";
import emp10 from "../assets/logos/employeer/employee-parners-10-768x576.webp";
import emp11 from "../assets/logos/employeer/employee-parners-11-768x576.webp";
import emp12 from "../assets/logos/employeer/employee-parners-12-768x576.webp";
import exibcash from "../assets/logos/employeer/exibcash.webp";
import lifestyle from "../assets/logos/employeer/life-style.webp";
import natures from "../assets/logos/employeer/natures-basket.webp";
import pantaloons from "../assets/logos/employeer/pantaloons.webp";
import zudio from "../assets/logos/employeer/zudio.webp";

const employerLogos = [
  ccd, emp01, emp02, emp03, emp04, emp06, emp07, emp08, emp09,
  emp10, emp11, emp12, exibcash, lifestyle, natures, pantaloons, zudio
];

export default function OurSupporters() {
  return (
    <div>
      <NavBar />

      {/* Donor Partners Section */}
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#004080" }}>Donor Partners</h2>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
          Discover Our Stellar Network of Collaborators
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "30px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {donorLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Donor ${index + 1}`}
              style={{ width: "180px", objectFit: "contain" }}
            />
          ))}
        </div>
      </section>

      {/* Volunteer Partners Section */}
      <section style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#004080" }}>Volunteer Partners</h2>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
          Our Dedicated Volunteer Network
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "30px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {volunteerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Volunteer ${index + 1}`}
              style={{ width: "180px", objectFit: "contain" }}
            />
          ))}
        </div>
      </section>

      {/* Employer Partners Section */}
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#004080" }}>Employer Partners</h2>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
          Our Esteemed Corporate Collaborators
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "30px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {employerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Employer ${index + 1}`}
              style={{ width: "180px", objectFit: "contain" }}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
