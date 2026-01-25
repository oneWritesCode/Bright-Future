import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import poster from "../assets/our-team.jpeg";
import Founder from "../assets/founder.jpeg";
import Santosh from "../assets/santosh.jpeg";
import Arpeeta from "../assets/arpeeta.jpeg";
import nikhil from "../assets/nikhil.jpeg";
import Priyesh from "../assets/priyesh.jpeg";
import Vaibhav from "../assets/vaibhav.jpeg";
import Vikram from "../assets/vikram.jpeg";
import Sukeshni from "../assets/sukeshi.jpeg";
import Babu from "../assets/babu.jpeg";
import jaya from "../assets/jaya.jpeg";

import Hemant from "../assets/hemant.jpeg";



export default function OurTeam() {
    return (
        <div>
            <NavBar />

            {/* Poster Section */}
            <section style={{ textAlign: "center", marginTop: "20px" }}>
                <img
                    src={poster}
                    alt="Our Team Poster"
                    style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
                />
            </section>

            

            {/* Team Intro Section */}
            <section style={{ textAlign: "center", margin: "40px auto", maxWidth: "900px", padding: "0 20px" }}>
                <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#004080", marginBottom: "20px" }}>
                    Great Change Comes From A Great Team
                </h2>

                <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#444" }}>
                    Our team works in sync with each other to address the central issues in a young person’s life.
                    Coming from various backgrounds, each Bright Future team member is on a mission to make a
                    difference that matters. Creating value for everyone with our customised industry-leading
                    systems.
                </p>
            </section>

            {/* Founder Section */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    maxWidth: "900px",
                    margin: "60px auto",
                    padding: "0 20px",
                    gap: "40px",
                }}
            >
                {/* Text on the left */}
                <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
                    <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#004080", marginBottom: "10px" }}>
                        Kishor Palve
                    </h3>
                    <p style={{ fontSize: "18px", fontWeight: "500", color: "#555", marginBottom: "20px" }}>
                        Founder and Chief Executive Officer
                    </p>
                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
                        A self-made individual who comes from a small village, makes a huge difference in the welfare
                        of society and incessantly leaves footprints to be followed by those who are motivated enough
                        to create history!
                    </p>
                </div>

                {/* Image on the right */}
                <div style={{ flex: "0 0 200px", textAlign: "center" }}>
                    <img
                        src={Founder}
                        alt="Kishor Palve"
                        style={{
                            width: "180px",
                            height: "180px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "4px solid #7b2ff7",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                        }}
                    />
                </div>
            </section>

            {/* Leadership Team Section */}
            <section style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
                <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#004080", textAlign: "center", marginBottom: "40px" }}>
                    Meet Our Leadership Team
                </h2>

                {/* Santosh VK */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        marginBottom: "60px",
                        gap: "40px",
                    }}
                >
                    {/* Text */}
                    <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
                        <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#004080", marginBottom: "5px" }}>
                            Santosh VK
                        </h3>
                        <p style={{ fontSize: "16px", fontWeight: "500", color: "#555", marginBottom: "10px" }}>
                            Head - People & People Support
                        </p>
                        {/* LinkedIn Button */}
                        <a
                            href="https://www.linkedin.com/in/santosh-v-1772a01b3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                padding: "8px 16px",
                                backgroundColor: "#0A66C2",
                                color: "#fff",
                                borderRadius: "5px",
                                fontWeight: "500",
                                textDecoration: "none",
                                marginBottom: "15px",
                            }}
                        >
                            LinkedIn Profile
                        </a>
                        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
                            Santosh VK serves as the Head of People & People Support at Bright Future India, a
                            non-governmental organization dedicated to empowering youth by providing them with
                            education and employment opportunities.
                        </p>
                    </div>

                    {/* Image */}
                    <div style={{ flex: "0 0 200px", textAlign: "center" }}>
                        <img
                            src={Santosh}
                            alt="Santosh VK"
                            style={{
                                width: "180px",
                                height: "180px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                border: "4px solid #7b2ff7",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                            }}
                        />
                    </div>
                </div>

                {/* Dr. Arpeeta Bhatia Burman */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        marginBottom: "60px",
                        gap: "40px",
                    }}
                >
                    {/* Text */}
                    <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
                        <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#004080", marginBottom: "5px" }}>
                            Dr. Arpeeta Bhatia Burman
                        </h3>
                        <p style={{ fontSize: "16px", fontWeight: "500", color: "#555", marginBottom: "10px" }}>
                            Head Programs
                        </p>
                        {/* LinkedIn Button */}
                        <a
                            href="https://www.linkedin.com/in/dr-arpeeta-bhatia-5b26156/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                padding: "8px 16px",
                                backgroundColor: "#0A66C2",
                                color: "#fff",
                                borderRadius: "5px",
                                fontWeight: "500",
                                textDecoration: "none",
                                marginBottom: "15px",
                            }}
                        >
                            LinkedIn Profile
                        </a>
                        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
                            Dr. Arpeeta Bhatia Burman is the Head of Programs at Bright Future India, a
                            non-governmental organization. In her role, she oversees the development and
                            implementation of programs designed to equip young individuals with the skills
                            and resources necessary for personal and professional growth.
                        </p>
                    </div>

                    {/* Image */}
                    <div style={{ flex: "0 0 200px", textAlign: "center" }}>
                        <img
                            src={Arpeeta}
                            alt="Dr. Arpeeta Bhatia Burman"
                            style={{
                                width: "180px",
                                height: "180px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                border: "4px solid #7b2ff7",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                            }}
                        />
                    </div>
                </div>
            </section>











            {/* Management Team Section */}
            <section style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
                <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#004080", textAlign: "center", marginBottom: "40px" }}>
                    Meet Our Management Team
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)", // <-- fixed 4 columns
                        gap: "30px",
                        justifyItems: "center",
                        alignItems: "start",
                    }}
                >
                    {/* Team Member 1 */}
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={nikhil}
                            alt="Nikhil Lokhande"
                            style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                            }}
                        />
                        <p style={{ marginTop: "10px", fontWeight: "600", color: "#004080" }}>Nikhil Lokhande</p>
                        <p style={{ fontSize: "14px", color: "#555" }}>Manager - Programme</p>
                    </div>

                    {/* Team Member 2 */}
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={jaya}
                            alt="Jayadarsini Ramaswami"
                            style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                            }}
                        />
                        <p style={{ marginTop: "10px", fontWeight: "600", color: "#004080" }}>Jayadarsini Ramaswami</p>
                        <p style={{ fontSize: "14px", color: "#555" }}>Senior Manager - Innovation</p>
                    </div>

                    {/* Team Member 3 */}
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={Priyesh}
                            alt="Priyesh"
                            style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                            }}
                        />
                        <p style={{ marginTop: "10px", fontWeight: "600", color: "#004080" }}>Priyesh Shinde</p>
                        <p style={{ fontSize: "14px", color: "#555" }}>Sr. Manager-Finance</p>
                    </div>

                    {/* Team Member 4 */}
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={Babu}
                            alt="Babu"
                            style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                            }}
                        />
                        <p style={{ marginTop: "10px", fontWeight: "600", color: "#004080" }}>Babu Bhise</p>
                        <p style={{ fontSize: "14px", color: "#555" }}>Manager-Programme</p>
                    </div>

                    {/* Team Member 5 */}
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={Vaibhav}
                            alt="Vaibhav"
                            style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                            }}
                        />
                        <p style={{ marginTop: "10px", fontWeight: "600", color: "#004080" }}>Vaibhav Khamgaonkar</p>
                        <p style={{ fontSize: "14px", color: "#555" }}>Manager-Programme</p>
                    </div>

                    {/* Team Member 6 */}
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={Sukeshni}
                            alt="Sukeshni"
                            style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                            }}
                        />
                        <p style={{ marginTop: "10px", fontWeight: "600", color: "#004080" }}>Sukeshni H. B.</p>
                        <p style={{ fontSize: "14px", color: "#555" }}>Manager-Innovation</p>
                    </div>

                    {/* Team Member 7 */}
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={Vikram}
                            alt="Vikram"
                            style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                            }}
                        />
                        <p style={{ marginTop: "10px", fontWeight: "600", color: "#004080" }}>Vikram Jadhav</p>
                        <p style={{ fontSize: "14px", color: "#555" }}>Manager Programme</p>
                    </div>

                    {/* Team Member 8 */}
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={Hemant}
                            alt="Hemant"
                            style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                            }}
                        />
                        <p style={{ marginTop: "10px", fontWeight: "600", color: "#004080" }}>Hemant Vyavhare</p>
                        <p style={{ fontSize: "14px", color: "#555" }}>Manager-Programme</p>
                    </div>
                </div>
            </section>





            <Footer />
        </div>
    );
}
