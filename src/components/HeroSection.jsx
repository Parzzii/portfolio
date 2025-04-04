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
      <div
        className="hero-section"
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          paddingTop: "20px",
          overflow: "hidden",
        }}
      >
        <img
          src="/ritikhedaoo1.JPG"
          alt="Background"
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
                    return;
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

          {/* Hero Content */}
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
          {/* UI/UX Design */}
          <div className="skill-card">
            <h3>🍩 UI/UX Design</h3>
            <div className="skill-tags">
              {["UX Design", "User Research", "Wireframing", "Prototyping", "Figma", "Sketch", "Postman", "REST APIs"].map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-card">
            <h3>💻 Frontend Development</h3>
            <div className="skill-tags">
              {["ReactJS", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"].map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>🛠 Backend Development</h3>
            <div className="skill-tags">
              {["NodeJS", "Express.js", "ASP.NET", "MVC", "MongoDB", "MySQL"].map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2 className="section-title">
          My <span className="highlight">Work</span> Experience
        </h2>

        <div className="experience-list">
          {/* Row 1 */}
          <div className="experience-row">
            <div className="experience-box">
              <h3>UNCC, Charlotte</h3>
              <p className="date">
                Jan 2024 – <em>May 2025</em>
              </p>
            </div>
            <div className="dot orange" />
            <div className="role-card">
              <h4>Teaching Assistant</h4>
              <p>Developed web app using .NET MVC. Worked on backend in MySQL and frontend HTML and CSS.</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="experience-row">
            <div className="experience-box">
              <h3>Cognizant, India</h3>
              <p className="date">Nov 2021 – July 2023</p>
            </div>
            <div className="dot dark" />
            <div className="role-card">
              <h4>Junior Software Engineer</h4>
              <p>Developed web app using .NET MVC. Worked on backend in MySQL and frontend HTML and CSS.</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="experience-row">
            <div className="experience-box">
              <h3>Cognizant, India</h3>
              <p className="date">Feb 2021 – Aug 2021</p>
            </div>
            <div className="dot orange" />
            <div className="role-card">
              <h4>Intern</h4>
              <p>Maintained .NET MVC web app and frontend HTML/CSS. Worked on SDLC and enhanced lifecycle efficiency.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="hire-section">
        <div className="hire-image">
          <img src="/ritik.jpg" alt="Ritik" />
        </div>

        <div className="hire-content">
          <h2 className="hire-title">
            Why <span className="highlight-orange">Hire</span> me ?
          </h2>
          <p>
            Growing up I found myself being <span className="highlight-red">creative</span> and <span className="highlight-purple">thinking out of the box</span> and slowly I found myself <span className="highlight-orange">designing and coding</span> and creating real-world websites in my own way.
          </p>
          <p>
            I pursued my master's degree to deepen my understanding of <span className="highlight-green">design strategies</span> and the latest industry trends. With skills in UX/UI design, ReactJS, and front-end development, I bring both{" "}
            <span className="highlight-gold">creativity and technical expertise</span> to the table.
          </p>
          <button
            className="hire-cta"
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
            Hire me 🥳
          </button>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>

        {/* React Projects */}
        <div className="project-category">
          <h3 className="category-title">React Projects</h3>
          <div className="project-grid">
            <div className="project-card">
              <img src="/trivia.png" alt="Trivia App" />
              <h4>Trivia Quiz App</h4>
              <p>Trivia app using ReactJS, JWT & MongoDB</p>
            </div>
            {/* Add more React projects here */}
          </div>
        </div>

        {/* Figma Projects */}
        <div className="project-category">
          <h3 className="category-title">Figma Projects</h3>
          <div className="project-grid">
            <div className="project-card">
              <img src="/drinks.png" alt="Drinks Page" />
              <h4>Figma Concept Projects</h4>
              <p>UI design on concept app with animation</p>
            </div>
            <div className="project-card">
              <img src="/uncc.png" alt="UNCC Mobile" />
              <h4>UNCC Mobile App</h4>
              <p>Mobile app design for UNCC students</p>
            </div>
            <div className="project-card">
              <img src="/dualsense1.png" alt="UNCC Mobile" />
              <h4>Figma Example projects</h4>
              <p>Figma projets on real world examples</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div id="contact" className="contact-section">
          <div className="contact-row">
            <div className="contact-item">
              <FiMail size={20} style={{ marginRight: "8px" }} />
              <a href="mailto:ritikhedaoo9@gmail.com">ritikhedaoo9@gmail.com</a>
            </div>

            <div className="contact-item">
              <FaLinkedin size={20} style={{ marginRight: "8px" }} />
              <a href="https://www.linkedin.com/in/ritik-hedaoo" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <div className="resume-download">
              <a href="/Ritik resume 2025.pdf" download className="download-button">
                <FaFileDownload size={18} style={{ marginRight: "6px" }} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
