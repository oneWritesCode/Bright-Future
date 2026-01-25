import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import poster from "../assets/logos/mission-vision-and-value.webp";

// Import advisory images
import adv1 from "../assets/advisory/advisory-board-1_sOFy6hN.webp";
import adv3 from "../assets/advisory/advisory-board-3.webp";
import adv4 from "../assets/advisory/advisory-board-4.webp";
import adv5 from "../assets/advisory/advisory-board-5.webp";
import adv6 from "../assets/advisory/advisory-board-6.webp";
import adv7 from "../assets/advisory/imageedit_1_3982618693.webp";



export default function Advisory() {
    // Sample advisory board members (replace with actual images/names)
    const advisoryMembers = [
        { name: "Mr. Suresh Goyal", role: "MD & CEO of National Highways Authority of India’s Infrastructure Investment Trust (NHAI InvIT)", image: adv1 },
        { name: "Ms. Preeti Chaudhry", role: "Partner at SVP India", image: adv7 },
        { name: "Mr. Ashish Bijawargi", role: "Development sector professional", image: adv3 },
        { name: "Alka Puri", role: "Founder of Roads Ahead Consulting (RAC)", image: adv4 },
        { name: "Mr. Keyur Majmudar", role: "Director at Bay Capital Investment Managers", image: adv6 },
        { name: "Mr. Sandeep Aggarwal", role: "CEO in Give India, CMO in Serco Global Services", image: adv5 },
    ];



    return (
        <div>
            <NavBar />

            {/* Poster Section */}
            <section style={{ textAlign: "center", marginTop: "20px" }}>
                <img
                    src={poster}
                    alt="Advisory Board Poster"
                    style={{ width: "100%", maxHeight: "500px", objectFit: "cover", borderRadius: "12px" }}
                />
            </section>

            {/* Page Heading */}
            <section style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px", textAlign: "center" }}>
                <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#004080", marginBottom: "20px" }}>
                    Our Organization & Advisory Board
                </h2>
                <p style={{ fontSize: "18px", color: "#444", lineHeight: "1.8" }}>
                    Bright Future India is guided by a team of experienced professionals and experts who provide strategic guidance and governance to help us achieve our mission.
                </p>
            </section>

            {/* Advisory Board Members */}
            <section style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "30px",
                    justifyItems: "center",
                }}>
                    {advisoryMembers.map((member) => (
                        <div key={member.name} style={{
                            backgroundColor: "#f0f4ff",
                            padding: "20px",
                            borderRadius: "12px",
                            textAlign: "center",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                            transition: "transform 0.2s",
                        }}>
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{
                                    width: "140px",
                                    height: "140px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    marginBottom: "15px",
                                    border: "3px solid #7b2ff7",
                                }}
                            />
                            <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#004080", marginBottom: "5px" }}>
                                {member.name}
                            </h4>
                            <p style={{ fontSize: "15px", color: "#555" }}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
