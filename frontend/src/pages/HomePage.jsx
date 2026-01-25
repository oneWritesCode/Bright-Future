import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import poster from "../assets/poster-link.jpeg";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import Buniyad from "../assets/buniyad.jpeg";
import Bulandi from "../assets/bulandi.jpeg";
import Badisoch from "../assets/badisoch.jpeg";
import Aasman from "../assets/aasmaan.jpeg";
import Fellowship from "../assets/fellow.jpeg";
import FellowshipPDF from "../assets/bright-future-fellowship-for-women-notev2-2.pdf";
import { Link } from "react-router-dom";



export default function HomePage() {
    return (
        <div>
            <NavBar />

            {/* Poster Section */}
            <section style={{ textAlign: "center", marginTop: "20px" }}>
                <img
                    src={poster}
                    alt="Bright Future Poster"
                    style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
                />
            </section>

            {/* Main Content: Text + img1 side by side */}
            <section
                style={{
                    padding: "50px",
                    maxWidth: "1200px",
                    margin: "auto",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "40px",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Text */}
                    <div style={{ flex: "1", minWidth: "300px" }}>
                        <h2
                            style={{
                                color: "purple",
                                fontWeight: "700",
                                fontSize: "35px",
                            }}
                        >
                            Working around an entire ecosystem to build the Change That Lasts
                        </h2>
                        <p style={{ color: "blue", lineHeight: "2.0" }}>
                            It is evident that building a good life and a livelihood starts
                            young. Most young people make decisions at the age of 13 that
                            eventually impact their career i.e. when they choose a subject
                            stream. That’s why our work model walks young people from the age
                            of 13 up to the age of 25.
                        </p>
                        <p style={{ color: "black", lineHeight: "2.0" }}>
                            We guide them at every step while they understand their interests,
                            feasible careers, and help them build their skills accordingly.
                        </p>
                        <p style={{ color: "blue", lineHeight: "2.0" }}>
                            Your support helps us drive tangible changes in each young
                            person’s life by working with everyone involved – including their
                            parents, teachers, communities, and panchayats, in addition to the
                            young person themselves.
                        </p>
                    </div>

                    {/* img1 */}
                    <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
                        <img
                            src={img1}
                            alt="Image 1"
                            style={{
                                width: "100%",
                                maxWidth: "450px",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                        />
                    </div>
                </div>

                {/* img2 and img3 below text+img1 */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px",
                        flexWrap: "wrap",
                        marginTop: "50px",
                    }}
                >
                    <img
                        src={img2}
                        alt="Image 2"
                        style={{
                            width: "400px",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                    <img
                        src={img3}
                        alt="Image 3"
                        style={{
                            width: "400px",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                </div>
            </section>

            {/* --- IMPACT STATS SECTION --- */}
            <section
                style={{
                    backgroundColor: "#f5f5f5",
                    padding: "60px 20px",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        color: "purple",
                        fontWeight: "700",
                        fontSize: "40px",
                        marginBottom: "50px",
                    }}
                >
                    We Celebrate Changed Lives, Not Just Numbers
                </h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "40px",
                    }}
                >
                    {/* Individual Stats */}
                    {[
                        { value: "44,719", label: "Outreach" },
                        { value: "76%", label: "Placement Rate" },
                        { value: "4,000", label: "Youth Changemakers" },
                        { value: "2,000", label: "Parent Champions" },
                        { value: "74.6%", label: "Increase in Family Income" },
                        { value: "60%", label: "Young Female Aspirants Graduated" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "#fff",
                                padding: "30px",
                                borderRadius: "15px",
                                width: "220px",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            <h3
                                style={{
                                    color: "#ff6600",
                                    fontSize: "32px",
                                    margin: "0 0 10px",
                                }}
                            >
                                {stat.value}
                            </h3>
                            <p
                                style={{
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    margin: 0,
                                }}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- INNOVATIVE PROGRAMMES SECTION --- */}
            <section
                style={{
                    padding: "60px 20px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                }}
            >
                <h2
                    style={{
                        color: "purple",
                        fontWeight: "700",
                        fontSize: "40px",
                        marginBottom: "50px",
                        lineHeight: "1.2",
                    }}
                >
                    Bringing Change Through <br /> Innovative Programmes
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "30px",
                        maxWidth: "1200px",
                        margin: "auto",
                    }}
                >
                    {/* 4 clickable images */}
                    {[Buniyad, Bulandi, Badisoch, Aasman].map((img, index) => (
                        <a
                            key={index}
                            href="https://www.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "block",
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                                transition: "transform 0.3s",
                            }}
                        >
                            <img
                                src={img}
                                alt={`Programme ${index + 1}`}
                                style={{
                                    width: "100%",
                                    height: "250px",
                                    objectFit: "cover",
                                    transition: "transform 0.3s",
                                }}
                            />
                        </a>
                    ))}
                </div>
            </section>

            {/* --- BRIGHT FUTURE FELLOWSHIP SECTION --- */}
            <section
                style={{
                    padding: "60px 20px",
                    maxWidth: "1200px",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "40px",
                    flexWrap: "wrap", // responsive
                }}
            >
                {/* Text */}
                <div style={{ flex: "1", minWidth: "300px" }}>
                    <h2
                        style={{
                            color: "purple",
                            fontWeight: "700",
                            fontSize: "35px",
                            marginBottom: "20px",
                        }}
                    >
                        Bright Future Fellowship for Women
                    </h2>
                    <p style={{ color: "black", lineHeight: "2.0", marginBottom: "15px", fontSize: "20px" }}>
                        Despite growing urbanization and rising education levels, millions of women across India remain excluded from the workforce, especially those seeking to restart their careers after a break. Whether due to caregiving responsibilities, lack of opportunity, or restrictive norms, career reentry remains a daunting challenge for many women across all segments of society.
                    </p>
                    <p style={{ color: "black", lineHeight: "2.0", marginBottom: "25px", fontSize: "20px" }}>
                        The Bright Future Fellowship for Women is a step toward reversing this trend. Anchored in the realities of women, the fellowship carries a universal truth: every woman deserves the chance to reclaim her professional identity and pursue a life of dignity, leadership, and purpose.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScfxAZKOQ4nH2UWMzrMWYEqRb27g0ntg_w7viurS84aOFoPVQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: "12px 25px",
                                backgroundColor: "#ff6600",
                                color: "#fff",
                                fontWeight: "600",
                                borderRadius: "8px",
                                textDecoration: "none",
                                transition: "background-color 0.3s",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e65c00")}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ff6600")}
                        >
                            Apply
                        </a>

                        <a
                            href={FellowshipPDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: "12px 25px",
                                backgroundColor: "#fff",
                                color: "#ff6600",
                                fontWeight: "600",
                                border: "2px solid #ff6600",
                                borderRadius: "8px",
                                textDecoration: "none",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = "#ff6600";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = "#fff";
                                e.currentTarget.style.color = "#ff6600";
                            }}
                        >
                            Read More
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
                    <img
                        src={Fellowship} // replace with actual Fellowship image if different
                        alt="Bright Future Fellowship"
                        style={{
                            width: "100%",
                            maxWidth: "450px",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                </div>
            </section>
            {/* --- THANKS & VOLUNTEER SECTION --- */}
            <section
                style={{
                    padding: "60px 20px",
                    backgroundColor: "#fff3e6", // soft background for emphasis
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        color: "purple",
                        fontWeight: "700",
                        fontSize: "40px",
                        marginBottom: "30px",
                    }}
                >
                    Thanks for bringing innumerous smiles!
                </h2>

                <p
                    style={{
                        color: "blue",
                        fontSize: "18px",
                        lineHeight: "1.8",
                        maxWidth: "900px",
                        margin: "0 auto 40px",
                    }}
                >
                    Our programs are entirely successful if we can provide young people with
                    exposure, information, and role models in various fields. Our diverse
                    group of aspirants has attracted mentors and volunteers across professions
                    such as business, finance, retail, art, fashion, sports, and much more.
                </p>

                {/* Become Volunteer Button */}
                <Link
                    to="/volunteer"
                    style={{
                        padding: "15px 30px",
                        backgroundColor: "#ff6600",
                        color: "#fff",
                        fontWeight: "600",
                        borderRadius: "8px",
                        textDecoration: "none",
                        transition: "background-color 0.3s",
                        display: "inline-block",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e65c00")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff6600")}
                >
                    Become Volunteer
                </Link>

            </section>




            <Footer />
        </div>
    );
}
