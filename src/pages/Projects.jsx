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
        background: "#060010",
      }}
    >
      <Navbar showHome={true} />

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "12rem 4rem 4rem 4rem",
          color: "#fff",
          minHeight: "200vh",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "900",
            textTransform: "uppercase",
            marginBottom: "5rem",
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          Launch Schedule
        </h1>

        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              marginBottom: "2.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(161, 161, 170, 0.3)",
              padding: "0.75rem",
              paddingBottom: "2.25rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.375rem",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                  color: "#fafafa",
                }}
              >
                {project.title}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  color: "rgba(161, 161, 170, 1)",
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
                gap: "0.375rem",
                textAlign: "right",
                fontSize: "0.875rem",
                textTransform: "uppercase",
                color: "rgba(161, 161, 170, 1)",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                transition: "color 0.3s",
              }}
            >
              View Project →
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default transition(Projects);
