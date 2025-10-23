import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";
import ScrollReveal from "../components/ScrollReveal";

const Skills = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
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
      image: "/images/skills/active-directory.png",
    },
    {
      category: "System Administration",
      name: "Group Policy Management",
      image: "/images/skills/group-policy.png",
    },
    {
      category: "System Administration",
      name: "DNS & DHCP Configuration",
      image: "/images/skills/dns.png",
    },
    {
      category: "System Administration",
      name: "Windows Server Administration",
      image: "/images/skills/windows-server.png",
    },
    {
      category: "System Administration",
      name: "User Permission Management",
      image: "/images/skills/permissions.png",
    },

    // Cloud & Virtualization
    {
      category: "Cloud & Virtualization",
      name: "Microsoft Azure",
      image: "/images/skills/azure.png",
    },
    {
      category: "Cloud & Virtualization",
      name: "Azure Active Directory",
      image: "/images/skills/azure-ad.png",
    },
    {
      category: "Cloud & Virtualization",
      name: "AWS",
      image: "/images/skills/aws.png",
    },
    {
      category: "Cloud & Virtualization",
      name: "VMware",
      image: "/images/skills/vmware.png",
    },
    {
      category: "Cloud & Virtualization",
      name: "Hyper-V",
      image: "/images/skills/hyperv.png",
    },

    // Automation & Scripting
    {
      category: "Automation & Scripting",
      name: "PowerShell",
      image: "/images/skills/powershell.png",
    },
    {
      category: "Automation & Scripting",
      name: "Python",
      image: "/images/skills/python.png",
    },
    {
      category: "Automation & Scripting",
      name: "Bash",
      image: "/images/skills/bash.png",
    },
    {
      category: "Automation & Scripting",
      name: "Task Scheduling",
      image: "/images/skills/automation.png",
    },
    {
      category: "Automation & Scripting",
      name: "Workflow Automation",
      image: "/images/skills/workflow.png",
    },

    // Networking & Security
    {
      category: "Networking & Security",
      name: "Cisco Networking",
      image: "/images/skills/cisco.png",
    },
    {
      category: "Networking & Security",
      name: "VPN Configuration",
      image: "/images/skills/vpn.png",
    },
    {
      category: "Networking & Security",
      name: "Firewall Management",
      image: "/images/skills/firewall.png",
    },
    {
      category: "Networking & Security",
      name: "Network Troubleshooting",
      image: "/images/skills/troubleshoot.png",
    },
    {
      category: "Networking & Security",
      name: "Security Protocols",
      image: "/images/skills/security.png",
    },

    // Monitoring & Management Tools
    {
      category: "Monitoring & Management Tools",
      name: "SCCM",
      image: "/images/skills/sccm.png",
    },
    {
      category: "Monitoring & Management Tools",
      name: "Nagios",
      image: "/images/skills/nagios.png",
    },
    {
      category: "Monitoring & Management Tools",
      name: "System Monitoring",
      image: "/images/skills/monitoring.png",
    },
    {
      category: "Monitoring & Management Tools",
      name: "Performance Analysis",
      image: "/images/skills/performance.png",
    },
    {
      category: "Monitoring & Management Tools",
      name: "Incident Response",
      image: "/images/skills/incident.png",
    },

    // Help Desk & Support
    {
      category: "Help Desk & Support",
      name: "Technical Troubleshooting",
      image: "/images/skills/troubleshoot.png",
    },
    {
      category: "Help Desk & Support",
      name: "User Support",
      image: "/images/skills/support.png",
    },
    {
      category: "Help Desk & Support",
      name: "Ticketing Systems",
      image: "/images/skills/ticketing.png",
    },
    {
      category: "Help Desk & Support",
      name: "Technical Documentation",
      image: "/images/skills/documentation.png",
    },
    {
      category: "Help Desk & Support",
      name: "End-User Training",
      image: "/images/skills/training.png",
    },
  ];

  const categories = [...new Set(skillsData.map((skill) => skill.category))];

  return (
    <div
      style={{
        background: "#171717",
        minHeight: "100vh",
      }}
    >
      <Navbar showHome={true} />

      <div style={{ padding: "0 8rem" }}>
        {/* Intro Section */}
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: "1000px", textAlign: "center" }}>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "700",
                color: "#fefefe",
                fontFamily: "Montserrat, sans-serif",
                marginBottom: "2rem",
                letterSpacing: "0.05em",
              }}
            >
              SKILLS & EXPERTISE
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#b5b5b5",
                fontFamily: "Montserrat, sans-serif",
                lineHeight: "1.8",
              }}
            >
              A collection of technologies and tools I've mastered throughout my
              journey as a Systems Administrator
            </p>
          </div>

          {/* Scroll Indicator */}
          {scrollDirection === "down" && (
            <div
              style={{
                position: "absolute",
                bottom: "3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                animation: "bounce 2s infinite",
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
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingTop: "4rem",
            paddingBottom: "30vh",
            position: "relative",
          }}
        >
          {/* Hint Message */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              opacity: 0.7,
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: "#b5b5b5",
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "0.1em",
                fontStyle: "italic",
              }}
            >
              💡 Hover over any skill to see it in action
            </p>
          </div>

          {/* Hover Image Display - Fixed on Right */}
          {hoveredSkill && (
            <div
              style={{
                position: "fixed",
                right: "4rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "700px",
                height: "700px",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow:
                  "0 30px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                border: "3px solid rgba(254, 254, 254, 0.1)",
                zIndex: 100,
                animation: "fadeIn 0.4s ease",
                background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
              }}
            >
              {/* Title Label */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem 2rem",
                  background: "rgba(23, 23, 23, 0.9)",
                  backdropFilter: "blur(10px)",
                  borderBottom: "1px solid rgba(254, 254, 254, 0.1)",
                  zIndex: 10,
                }}
              >
                <h4
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#fefefe",
                    fontFamily: "Montserrat, sans-serif",
                    letterSpacing: "0.05em",
                    margin: 0,
                  }}
                >
                  {hoveredSkill.name}
                </h4>
              </div>

              {/* Image */}
              <img
                src={hoveredSkill.image}
                alt={hoveredSkill.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "5rem 2rem 2rem 2rem",
                }}
              />
            </div>
          )}

          {categories.map((category, catIndex) => (
            <div key={catIndex} style={{ marginBottom: "4rem" }}>
              <h3
                style={{
                  fontSize: "1.2rem",
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
                style={{ fontSize: "2rem", lineHeight: "2", color: "#fefefe" }}
              >
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index}>
                      <span
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="skill-item"
                        style={{
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          display: "inline-block",
                          color: "#cccccc",
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
        }
        
        .skill-item:hover {
          color: #fefefe !important;
          text-shadow: 0 0 20px rgba(254, 254, 254, 0.5);
          transform: translateX(10px);
        }
      `}</style>
    </div>
  );
};

export default transition(Skills);
