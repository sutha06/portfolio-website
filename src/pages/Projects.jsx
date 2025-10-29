import React from "react";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern, animated portfolio website showcasing my skills and experience",
      link: "https://github.com/sutha06/portfolio-website",
    },
    {
      title: "NFC Business Card",
      description:
        "A digital business card accessed via NFC I built from scratch",
      link: "https://github.com/sutha06/nfc-business-card",
    },
    {
      title: "Legal Lens",
      description:
        "Hackathon winner: AI-powered legal document analyzer that simplifies complex legal text",
      link: "https://github.com/aleksbrsc/Legal-Lens",
    },
    {
      title: "FoodFinder App",
      description: "Mobile app to help users to discover nearby restaurants",
      link: "https://github.com/kasperFlo/FoodFinderApp",
    },
    {
      title: "PicPick",
      description:
        "Hackathon project: visual shopping interface for multiple online commerce platforms",
      link: "https://github.com/kasperFlo/PicPick",
    },
    {
      title: "WiFi Analyzer",
      description:
        "Arduino-based WiFi network analyzer for signal strength monitoring and network diagnostics",
      link: "https://github.com/sutha06/Wifi-Analyzer",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#171717",
      }}
    >
      <Navbar showHome={true} />

      <section
        className="projects-section"
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding:
            "14rem clamp(8rem, 14vw, 14rem) 6rem clamp(8rem, 14vw, 14rem)",
          color: "#fefefe",
          minHeight: "100vh",
        }}
      >
        <h1
          className="projects-title"
          style={{
            fontSize: "4rem",
            fontWeight: "900",
            textTransform: "uppercase",
            marginBottom: "6rem",
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "0.05em",
            color: "#fefefe",
          }}
        >
          My Projects
        </h1>

        {projects.map((project, index) => (
          <div
            className="project-item"
            key={index}
            style={{
              marginBottom: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(181, 181, 181, 0.3)",
              padding: "1.5rem 0",
              paddingBottom: "3rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(10px)";
              e.currentTarget.style.borderBottomColor =
                "rgba(254, 254, 254, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.borderBottomColor =
                "rgba(181, 181, 181, 0.3)";
            }}
          >
            <div style={{ flex: 1, maxWidth: "70%" }}>
              <p
                className="project-title"
                style={{
                  fontSize: "2rem",
                  marginBottom: "0.75rem",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                  color: "#fefefe",
                }}
              >
                {project.title}
              </p>
              <p
                className="project-description"
                style={{
                  fontSize: "1rem",
                  color: "#b5b5b5",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textAlign: "right",
                fontSize: "1rem",
                textTransform: "uppercase",
                color: "#b5b5b5",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                marginLeft: "2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fefefe";
                e.currentTarget.querySelector(".arrow").style.transform =
                  "translateX(6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#b5b5b5";
                e.currentTarget.querySelector(".arrow").style.transform =
                  "translateX(0)";
              }}
            >
              View Project
              <span
                className="arrow"
                style={{
                  display: "inline-block",
                  transition: "transform 0.3s ease",
                }}
              >
                →
              </span>
            </a>
          </div>
        ))}
      </section>

      <style>{`
  .projects-title {
    font-size: clamp(3rem, 4vw, 4rem) !important;
    margin-bottom: clamp(3rem, 6vw, 6rem) !important;
  }

  .project-item {
    padding: clamp(1rem, 1.5vw, 1.5rem) 0 clamp(2rem, 3vw, 3rem) 0 !important;
    margin-bottom: clamp(2rem, 3vw, 3rem) !important;
  }

  .project-title {
    font-size: clamp(1.5rem, 2vw, 2rem) !important;
    margin-bottom: clamp(0.5rem, 0.75vw, 0.75rem) !important;
  }

  .project-description {
    font-size: clamp(0.88rem, 1vw, 1rem) !important;
  }

  .project-link {
    font-size: clamp(0.9rem, 1vw, 1rem) !important;
  }
`}</style>
    </div>
  );
};

export default transition(Projects);
