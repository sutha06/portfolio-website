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
        className="projects-section"
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "14rem 6rem 6rem 6rem",
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
  @media (min-width: 2560px) {
          .projects-section {
            padding: 16rem 8rem 8rem 8rem !important;
          }
          .projects-title {
            font-size: 5rem !important;
          }
          .project-title {
            font-size: 2.5rem !important;
          }
          .project-description {
            font-size: 1.3rem !important;
          }
          .project-link {
            font-size: 1.2rem !important;
          }
        }

        @media (max-width: 1440px) {
          .projects-section {
            padding: 12rem 5rem 5rem 5rem !important;
          }
          .projects-title {
            font-size: 3.8rem !important;
          }
          .project-title {
            font-size: 1.9rem !important;
          }
          .project-description {
            font-size: 0.98rem !important;
          }
        }

        @media (max-width: 1366px) {
          .projects-section {
            padding: 11rem 4rem 4rem 4rem !important;
          }
          .projects-title {
            font-size: 3.5rem !important;
            margin-bottom: 4rem !important;
          }
          .project-title {
            font-size: 1.8rem !important;
          }
          .project-description {
            font-size: 0.95rem !important;
          }
          .project-link {
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 1280px) {
          .projects-section {
            padding: 10rem 3.5rem 4rem 3.5rem !important;
          }
          .projects-title {
            font-size: 3.3rem !important;
          }
          .project-title {
            font-size: 1.7rem !important;
          }
          .project-description {
            font-size: 0.92rem !important;
          }
        }

        @media (max-width: 1024px) {
          .projects-section {
            padding: 9rem 3rem 3rem 3rem !important;
          }
          .projects-title {
            font-size: 3rem !important;
            margin-bottom: 3rem !important;
          }
          .project-item {
            padding: 1rem 0 2rem 0 !important;
            margin-bottom: 2rem !important;
          }
          .project-title {
            font-size: 1.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          .project-description {
            font-size: 0.88rem !important;
          }
          .project-link {
            font-size: 0.9rem !important;
          }
      }
        `}</style>
    </div>
  );
};

export default transition(Projects);
