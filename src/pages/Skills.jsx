import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";

const cards = [
  {
    id: 1,
    category: "System Administration",
    skills: [
      "Active Directory",
      "Group Policy Management",
      "DNS & DHCP",
      "Windows Server",
      "User & Permission Management",
    ],
    experience: "Core Expertise",
  },
  {
    id: 2,
    category: "Cloud & Virtualization",
    skills: [
      "Microsoft Azure",
      "Azure Active Directory",
      "AWS",
      "VMware",
      "Hyper-V",
    ],
    experience: "Advanced Skills",
  },
  {
    id: 3,
    category: "Automation & Scripting",
    skills: [
      "PowerShell",
      "Python",
      "Bash Scripting",
      "Task Automation",
      "Workflow Optimization",
    ],
    experience: "Proficient",
  },
  {
    id: 4,
    category: "Networking & Security",
    skills: [
      "Cisco Technologies",
      "VPN Configuration",
      "Firewall Management",
      "Network Troubleshooting",
      "Security Protocols",
    ],
    experience: "Strong Foundation",
  },
  {
    id: 5,
    category: "Monitoring & Tools",
    skills: [
      "SCCM",
      "Nagios",
      "System Monitoring",
      "Performance Analysis",
      "Incident Response",
    ],
    experience: "Hands-On Experience",
  },
  {
    id: 6,
    category: "Help Desk & Support",
    skills: [
      "Technical Troubleshooting",
      "User Support",
      "Ticketing Systems",
      "Documentation",
      "Client Communication",
    ],
    experience: "Proven Track Record",
  },
  {
    id: 7,
    category: "Database & Development",
    skills: [
      "SQL Server",
      "MySQL",
      "Git Version Control",
      "Basic Web Development",
      "API Integration",
    ],
    experience: "Growing Skills",
  },
];

const Skills = () => {
  return (
    <div style={{ background: "#060010" }}>
      <Navbar showHome={true} />

      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1rem",
            fontWeight: "600",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          Scroll down
        </span>
      </div>

      <HorizontalScrollCarousel />

      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1rem",
            fontWeight: "600",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      style={{ position: "relative", height: "300vh", background: "#060010" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          display: "flex",
          height: "100vh",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <motion.div style={{ x, display: "flex", gap: "4rem" }}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      style={{
        position: "relative",
        height: "450px",
        width: "450px",
        overflow: "hidden",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          padding: "3rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              fontFamily: "Montserrat, sans-serif",
              color: "#fff",
              marginBottom: "2rem",
              textTransform: "uppercase",
            }}
          >
            {card.category}
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {card.skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "Montserrat, sans-serif",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: "400",
                }}
              >
                • {skill}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            fontSize: "0.9rem",
            fontFamily: "Montserrat, sans-serif",
            color: "rgba(255, 255, 255, 0.5)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {card.experience}
        </div>
      </div>
    </div>
  );
};

export default transition(Skills);
