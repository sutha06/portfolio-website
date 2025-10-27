import React from "react";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern, animated portfolio website showcasing my skills and experience",
      link: "#",
    },
    {
      title: "NFC Business Card",
      description:
        "A digital business card accessed via NFC I built from scratch",
      link: "#",
    },
    {
      title: "Legal Lens",
      description:
        "Hackathon winner: AI-powered legal document analyzer that simplifies complex legal text",
      link: "#",
    },
    {
      title: "FoodFinder App",
      description: "Mobile app to help users to discover nearby restaurants",
      link: "#",
    },
    {
      title: "PicPick",
      description:
        "Hackathon project: visual shopping interface for multiple online commerce platforms",
      link: "#",
    },
    {
      title: "WiFi Analyzer",
      description:
        "Arduino-based WiFi network analyzer for signal strength monitoring and network diagnostics",
      link: "#",
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
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "14rem 6rem 6rem 6rem",
          color: "#fefefe",
          minHeight: "200vh",
        }}
      >
        <h1
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
            key={index}
            style={{
              marginBottom: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(181, 181, 181, 0.3)",
              padding: "1.5rem",
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
            <div>
              <p
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
                style={{
                  fontSize: "1rem",
                  color: "#b5b5b5",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "300",
                }}
              >
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textAlign: "right",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                color: "#b5b5b5",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                transition: "all 0.3s ease",
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
    </div>
  );
};

export default transition(Projects);
