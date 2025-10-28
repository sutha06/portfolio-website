import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";
import ScrollReveal from "../components/ScrollReveal";

const Skills = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide scroll indicator after user scrolls down 100px
      if (currentScrollY > 100) {
        setShowScrollIndicator(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Slow down scroll wheel speed
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      const scrollAmount = delta * 0.5;

      window.scrollBy({
        top: scrollAmount,
        behavior: "auto",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const skillsData = [
    // System Administration
    {
      category: "System Administration",
      name: "Active Directory",
    },
    {
      category: "System Administration",
      name: "User Management",
    },
    {
      category: "System Administration",
      name: "Cloud Resource Management",
    },
    {
      category: "System Administration",
      name: "Permission Management",
    },
    {
      category: "System Administration",
      name: "Disaster Recovery",
    },

    // Cloud & Virtualization
    {
      category: "Cloud & Virtualization",
      name: "Cloud Hosting",
    },
    {
      category: "Cloud & Virtualization",
      name: "Virtualization",
    },
    {
      category: "Cloud & Virtualization",
      name: "Cloud Storage & Backup",
    },

    // Automation & Scripting
    {
      category: "Automation & Scripting",
      name: "Batch & Shell Scripting",
    },
    {
      category: "Automation & Scripting",
      name: "Task Scheduling",
    },
    {
      category: "Automation & Scripting",
      name: "System Health Monitoring",
    },

    // Networking & Security
    {
      category: "Networking & Security",
      name: "Network Topology Design",
    },
    {
      category: "Networking & Security",
      name: "IP Addressing & Subnetting",
    },
    {
      category: "Networking & Security",
      name: "Router Configuration",
    },
    {
      category: "Networking & Security",
      name: "DHCP & DNS Management",
    },
    {
      category: "Networking & Security",
      name: "WiFi Network Deployment",
    },
    {
      category: "Networking & Security",
      name: "Wireless Security (WPA2)",
    },
    {
      category: "Networking & Security",
      name: "Network Analysis",
    },
    {
      category: "Networking & Security",
      name: "Security Case Studies",
    },

    // Monitoring & Management Tools
    {
      category: "Monitoring & Management Tools",
      name: "Log Analysis",
    },
    {
      category: "Monitoring & Management Tools",
      name: "Remote Management",
    },
    {
      category: "Monitoring & Management Tools",
      name: "Software Deployment",
    },
    {
      category: "Monitoring & Management Tools",
      name: "Ticket Management",
    },

    // Help Desk & Support
    {
      category: "Help Desk & Support",
      name: "Technical Troubleshooting",
    },
    {
      category: "Help Desk & Support",
      name: "Ticket Resolution",
    },
    {
      category: "Help Desk & Support",
      name: "Ticketing Systems",
    },
    {
      category: "Help Desk & Support",
      name: "Technical Documentation",
    },
    {
      category: "Help Desk & Support",
      name: "AI-Assisted Support",
    },
  ];

  const categories = [...new Set(skillsData.map((skill) => skill.category))];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#171717",
        position: "relative",
      }}
    >
      <Navbar showHome={true} />

      {/* Hero Section */}
      <div
        className="skills-hero"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            textAlign: "center",
          }}
        >
          <h1
            className="skills-title"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: "700",
              marginBottom: "2rem",
              background: "linear-gradient(135deg, #fefefe 0%, #b5b5b5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            MY SKILLS
          </h1>
          <p
            className="skills-subtitle"
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
              lineHeight: "1.8",
              color: "#b5b5b5",
              fontFamily: "Montserrat, sans-serif",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            A collection of technologies and tools I've mastered throughout my
            journey as a Systems Administrator
          </p>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div
            style={{
              position: "absolute",
              bottom: "3rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              animation: "bounce 2s infinite",
              opacity: 1,
              transition: "opacity 0.5s ease",
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                color: "#b5b5b5",
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              SCROLL
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b5b5b5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>

      {/* Skills List Section */}
      <div
        className="skills-list-section"
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "4rem clamp(3rem, 6vw, 6rem) 15vh clamp(10rem, 16vw, 16rem)",
          position: "relative",
        }}
      >
        {categories.map((category, catIndex) => (
          <div key={catIndex} style={{ marginBottom: "4rem" }}>
            <h3
              className="category-title"
              style={{
                fontSize: "clamp(0.6rem, 0.75vw, 0.9rem)",
                fontWeight: "600",
                color: "#b5b5b5",
                fontFamily: "Montserrat, sans-serif",
                marginBottom: "2rem",
                letterSpacing: "0.1em",
              }}
            >
              {category.toUpperCase()}
            </h3>

            <div
              className="skill-names"
              style={{
                fontSize: "clamp(0.9rem, 2.2vw, 3rem)",
                lineHeight: "1.4",
                color: "#b5b5b5",
              }}
            >
              {skillsData
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div key={index}>
                    <span
                      className="skill-item"
                      style={{
                        cursor: "default",
                        transition: "all 0.3s ease",
                        display: "inline-block",
                        color: "#b5b5b5",
                      }}
                    >
                      <ScrollReveal
                        baseOpacity={0.1}
                        enableBlur={true}
                        baseRotation={3}
                        blurStrength={8}
                      >
                        {skill.name}
                      </ScrollReveal>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .skill-item:hover {
          color: #fefefe !important;
          text-shadow: 0 0 8px rgba(254, 254, 254, 0.2);
          transform: translateX(10px);
        }
      `}</style>
    </div>
  );
};

export default transition(Skills);
