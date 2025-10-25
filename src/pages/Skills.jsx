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
      tools: ["windows", "microsoft"],
    },
    {
      category: "System Administration",
      name: "User management and directory services",
      image: "/images/skills/group-policy.png",
      tools: ["windows", "azure"],
    },
    {
      category: "System Administration",
      name: "Server and cloud resource management",
      image: "/images/skills/dns.png",
      tools: ["azure", "aws"],
    },
    {
      category: "System Administration",
      name: "User Permission Management",
      image: "/images/skills/permissions.png",
      tools: ["windows"],
    },
    {
      category: "System Administration",
      name: "Disaster recovery planning",
      image: "/images/skills/windows.png",
      tools: ["windows", "veeam"],
    },

    // Cloud & Virtualization
    {
      category: "Cloud & Virtualization",
      name: "Hosting a simple website on a cloud platform",
      image: "/images/skills/azure.png",
      tools: ["azure", "aws"],
    },
    {
      category: "Cloud & Virtualization",
      name: "Demonstrating virtualization concepts",
      image: "/images/skills/azure-ad.png",
      tools: ["vmware", "hyperv"],
    },
    {
      category: "Cloud & Virtualization",
      name: "Cloud storage implementation for data backup",
      image: "/images/skills/aws.png",
      tools: ["azure", "aws"],
    },

    // Automation & Scripting
    {
      category: "Automation & Scripting",
      name: "Create batch/shell scripts",
      image: "/images/skills/powershell.png",
      tools: ["powershell", "bash"],
    },
    {
      category: "Automation & Scripting",
      name: "Scheduled tasks",
      image: "/images/skills/python.png",
      tools: ["windows", "linux"],
    },
    {
      category: "Automation & Scripting",
      name: "System health check script",
      image: "/images/skills/bash.png",
      tools: ["python", "bash"],
    },

    // Networking & Security
    {
      category: "Networking & Security",
      name: "Network topology diagram for a small business",
      image: "/images/skills/cisco.png",
      tools: ["cisco", "visio"],
    },
    {
      category: "Networking & Security",
      name: "Network communication walkthrough",
      image: "/images/skills/vpn.png",
      tools: ["wireshark", "cisco"],
    },
    {
      category: "Networking & Security",
      name: "security case study",
      image: "/images/skills/firewall.png",
      tools: ["pfsense", "cisco"],
    },
    {
      category: "Networking & Security",
      name: "Wireless network security configuration",
      image: "/images/skills/troubleshoot.png",
      tools: ["cisco", "ubiquiti"],
    },

    // Monitoring & Management Tools
    {
      category: "Monitoring & Management Tools",
      name: "Log file analysis",
      image: "/images/skills/sccm.png",
      tools: ["splunk", "elk"],
    },
    {
      category: "Monitoring & Management Tools",
      name: "Remote system management",
      image: "/images/skills/nagios.png",
      tools: ["ssh", "rdp"],
    },
    {
      category: "Monitoring & Management Tools",
      name: "Software installation and configuration",
      image: "/images/skills/monitoring.png",
      tools: ["sccm", "chocolatey"],
    },
    {
      category: "Monitoring & Management Tools",
      name: "Help desk ticket management",
      image: "/images/skills/performance.png",
      tools: ["servicenow", "jira"],
    },

    // Help Desk & Support
    {
      category: "Help Desk & Support",
      name: "Technical Troubleshooting",
      image: "/images/skills/troubleshoot.png",
      tools: ["windows", "linux"],
    },
    {
      category: "Help Desk & Support",
      name: "Help desk ticket resolution walkthrough",
      image: "/images/skills/support.png",
      tools: ["servicenow", "zendesk"],
    },
    {
      category: "Help Desk & Support",
      name: "Ticketing Systems",
      image: "/images/skills/ticketing.png",
      tools: ["jira", "servicenow"],
    },
    {
      category: "Help Desk & Support",
      name: "Technical Documentation",
      image: "/images/skills/documentation.png",
      tools: ["confluence", "notion"],
    },
    {
      category: "Help Desk & Support",
      name: "AI for troubleshooting",
      image: "/images/skills/training.png",
      tools: ["chatgpt", "copilot"],
    },
  ];

  // Tool icon mapping
  const toolIcons = {
    windows: "/images/tools/windows.png",
    microsoft: "/images/tools/microsoft.png",
    azure: "/images/tools/azure.png",
    aws: "/images/tools/aws.png",
    vmware: "/images/tools/vmware.png",
    hyperv: "/images/tools/hyperv.png",
    powershell: "/images/tools/powershell.png",
    bash: "/images/tools/bash.png",
    python: "/images/tools/python.png",
    linux: "/images/tools/linux.png",
    cisco: "/images/tools/cisco.png",
    visio: "/images/tools/visio.png",
    wireshark: "/images/tools/wireshark.png",
    pfsense: "/images/tools/pfsense.png",
    ubiquiti: "/images/tools/ubiquiti.png",
    splunk: "/images/tools/splunk.png",
    elk: "/images/tools/elk.png",
    ssh: "/images/tools/ssh.png",
    rdp: "/images/tools/rdp.png",
    sccm: "/images/tools/sccm.png",
    chocolatey: "/images/tools/chocolatey.png",
    servicenow: "/images/tools/servicenow.png",
    jira: "/images/tools/jira.png",
    zendesk: "/images/tools/zendesk.png",
    confluence: "/images/tools/confluence.png",
    notion: "/images/tools/notion.png",
    chatgpt: "/images/tools/chatgpt.png",
    copilot: "/images/tools/copilot.png",
    veeam: "/images/tools/veeam.png",
  };

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
            paddingBottom: "15vh",
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

              {/* Tool Icons - Bottom Right */}
              {hoveredSkill.tools && hoveredSkill.tools.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "2rem",
                    right: "2rem",
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "center",
                    background: "rgba(23, 23, 23, 0.8)",
                    backdropFilter: "blur(10px)",
                    padding: "1rem 1.5rem",
                    borderRadius: "20px",
                    border: "1px solid rgba(254, 254, 254, 0.1)",
                    zIndex: 10,
                  }}
                >
                  {hoveredSkill.tools.map((tool, toolIndex) => (
                    <img
                      key={toolIndex}
                      src={toolIcons[tool]}
                      alt={tool}
                      title={tool}
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                        opacity: 0.9,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = "1";
                        e.target.style.transform = "scale(1.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = "0.9";
                        e.target.style.transform = "scale(1)";
                      }}
                    />
                  ))}
                </div>
              )}
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
                style={{ fontSize: "2rem", lineHeight: "2", color: "#b5b5b5" }}
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
          text-shadow: 0 0 8px rgba(254, 254, 254, 0.2);
          transform: translateX(10px);
        }
      `}</style>
    </div>
  );
};

export default transition(Skills);
