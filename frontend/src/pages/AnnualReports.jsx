import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Import all PDFs
import report2021_22 from "../assets/reports/annual/annual-report-2021-22.pdf";
import report2022_23 from "../assets/reports/annual/annual-report-2022-2023.pdf";
import report2011_12 from "../assets/reports/annual/bright-future-annual-report-2011-12-min.pdf";
import report2012_13 from "../assets/reports/annual/bright-future-annual-report-2012-13-min.pdf";
import report2013_14 from "../assets/reports/annual/bright-future-annual-report-2013-14-min.pdf";
import report2014_15 from "../assets/reports/annual/bright-future-annual-report-2014-15-min.pdf";
import report2016_17 from "../assets/reports/annual/bright-future-annual-report-2016-17-min.pdf";
import report2017_18 from "../assets/reports/annual/bright-future-annual-report-2017-18-min.pdf";
import report2018_19 from "../assets/reports/annual/bright-future-annual-report-2018-19-min.pdf";
import report2019_20 from "../assets/reports/annual/bright-future-annual-report-2019-20-min.pdf";
import report2020_21 from "../assets/reports/annual/bright-future-annual-report-2020-21-min.pdf";
import report2020_21_1 from "../assets/reports/annual/bright-future-annual-report-2020-21-min (1).pdf";
import report2023_24 from "../assets/reports/annual/bright-future-annual-report-2023-24-min.pdf";
import report2024_25 from "../assets/reports/annual/final-annual-report-2024-2025.pdf";

export default function AnnualReports() {
  const reports = [
    { title: "Annual Report 2011-12", file: report2011_12 },
    { title: "Annual Report 2012-13", file: report2012_13 },
    { title: "Annual Report 2013-14", file: report2013_14 },
    { title: "Annual Report 2014-15", file: report2014_15 },
    { title: "Annual Report 2016-17", file: report2016_17 },
    { title: "Annual Report 2017-18", file: report2017_18 },
    { title: "Annual Report 2018-19", file: report2018_19 },
    { title: "Annual Report 2019-20", file: report2019_20 },
    { title: "Annual Report 2020-21", file: report2020_21 },
    { title: "Annual Report 2020-21 (2)", file: report2020_21_1 },
    { title: "Annual Report 2021-22", file: report2021_22 },
    { title: "Annual Report 2022-23", file: report2022_23 },
    { title: "Annual Report 2023-24", file: report2023_24 },
    { title: "Annual Report 2024-25", file: report2024_25 },
  ];

  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <NavBar />

      {/* Heading */}
      <section style={{ padding: "100px 20px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", color: "#7b2ff7" }}>
          Annual Reports
        </h1>
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#7b2ff7",
            margin: "15px auto",
            borderRadius: "10px",
          }}
        />
      </section>

      {/* PDF List */}
      <section style={{ padding: "40px 20px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gap: "20px" }}>
          {reports.map((report, idx) => (
            <a
              key={idx}
              href={report.file}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "20px",
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                fontWeight: "600",
                color: "#1a1a1a",
                textDecoration: "none",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {report.title}
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
