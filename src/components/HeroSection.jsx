import React from "react";
import { ChevronDown, Quote, Star } from "lucide-react";
import "../styles/HeroSection.css";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function HeroSection() {
  const navItems = ["Home", "Skills", "About", "Projects", "Contact", "Resume"];
  const stars = Array(5).fill(null);

  return (
    <>
      <div className="hero-section" style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
        <img
          src="/ritikhedaoo1.jpg"
          alt="Background"
          className="hero-background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />

        <div className="hero-inner">
          {/* Navbar */}
          <nav className="navbar">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className={`nav-button ${item === "Home" ? "active" : ""}`}
                onClick={() => {
                  let targetId = "";
                  if (item === "Skills") targetId = "skills";
                  else if (item === "About") targetId = "experience";
                  else if (item === "Projects") targetId = "projects";
                  else if (item === "Contact") targetId = "contact";
                  else if (item === "Resume") {
                    const link = document.createElement("a");
                    link.href = "/Ritik resume 2025.pdf";
                    link.download = "Ritik resume 2025.pdf";
                    link.click();
                  }

                  if (targetId) {
                    const target = document.getElementById(targetId);
                    if (target) {
                      window.scrollTo({
                        top: target.offsetTop - 0,
                        behavior: "smooth",
                      });
                    }
                  }
                }}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Hero Content: Left and Right */}
          <div className="hero-content">
            {/* LEFT SIDE */}
            <div className="left-side">
              <div className="hello-bubble">
                Hello! <span className="hello-squiggle">✨</span>
              </div>
              <h1 className="title">
                I'm <span className="highlight">Ritik</span>,<br /> UI/UX Designer
              </h1>
              <div className="button-group">
                <button
                  className="read-more"
                  onClick={() => {
                    const target = document.getElementById("skills");
                    if (target)
                      window.scrollTo({
                        top: target.offsetTop - 150,
                        behavior: "smooth",
                      });
                  }}
                >
                  Read more <ChevronDown size={18} />
                </button>
                <button
                  className="hire-me"
                  onClick={() => {
                    const target = document.getElementById("contact");
                    if (target) {
                      window.scrollTo({
                        top: target.offsetTop - 10,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Hire me{" "}
                  <span role="img" aria-label="emoji">
                    🥳
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="right-side">
              <div className="testimonial-box">
                <div className="quote">
                  <Quote className="quote-icon" />
                  <p className="quote-text">Ritik's product designs are in wide range and ensures best designs</p>
                </div>
                <div className="stars">
                  {stars.map((_, idx) => (
                    <Star key={idx} fill="#fd8439" color="#fd8439" size={20} />
                  ))}
                </div>
                <div className="experience">
                  <h2>2 Years</h2>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="skills" className="skills-section">
        <h2 className="skills-title">
          My <span className="highlight">Skills</span>
        </h2>
        <div className="skills-grid">
          <div className="skill-card1">
            <h3>UI/UX Design</h3>
            <ul>
              <li>UX Design</li>
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Figma</li>
              <li>Sketch</li>
              <li>Postman</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="skill-card2">
            <h3>Frontend Development</h3>
            <ul>
              <li>ReactJS</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="skill-card3">
            <h3>Backend Development</h3>
            <ul>
              <li>NodeJS</li>
              <li>Express.js</li>
              <li>ASP.NET</li>
              <li>MVC</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Remaining sections */}
    </>
  );
}
