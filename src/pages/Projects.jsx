import React from "react";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Framer Motion",
      tech: "React, Framer Motion, Tailwind CSS",
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration",
      tech: "Node.js, MongoDB, Stripe API",
      link: "https://github.com/yourusername/ecommerce",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: "React, Firebase, Material-UI",
      link: "https://github.com/yourusername/taskapp",
    },
    {
      title: "Weather Dashboard",
      description: "Weather forecasting app with interactive maps",
      tech: "React, OpenWeather API, Chart.js",
      link: "https://github.com/yourusername/weather",
    },
    {
      title: "Social Media Clone",
      description: "Instagram-like social platform with real-time features",
      tech: "React Native, GraphQL, PostgreSQL",
      link: "https://github.com/yourusername/social",
    },
    {
      title: "Fitness Tracker",
      description: "Track workouts and nutrition with data visualization",
      tech: "Vue.js, D3.js, Express",
      link: "https://github.com/yourusername/fitness",
    },
    {
      title: "AI Chatbot",
      description: "Customer service bot with natural language processing",
      tech: "Python, TensorFlow, Flask",
      link: "https://github.com/yourusername/chatbot",
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
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  color: "#b5b5b5",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {project.tech}
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
