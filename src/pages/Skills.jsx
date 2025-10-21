import React from "react";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";
import ScrollReveal from "../components/ScrollReveal";

const Skills = () => {
  return (
    <div
      style={{
        background: "#171717",
        minHeight: "100vh",
        padding: "0 12rem",
        paddingTop: "12rem",
        paddingBottom: "10rem",
      }}
    >
      <Navbar showHome={true} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            color: "#fefefe",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "4rem",
          }}
        >
          SKILLS
        </h1>

        <div style={{ marginBottom: "5rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#fefefe",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: "1.5rem",
            }}
          >
            System Administration
          </h3>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={3}
            blurStrength={8}
          >
            Active Directory, Group Policy Management, DNS & DHCP configuration,
            Windows Server administration, and comprehensive user permission
            management across enterprise environments.
          </ScrollReveal>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#fefefe",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: "1.5rem",
            }}
          >
            Cloud & Virtualization
          </h3>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={3}
            blurStrength={8}
          >
            Microsoft Azure cloud services, Azure Active Directory integration,
            AWS infrastructure management, VMware virtualization platforms, and
            Hyper-V deployment and maintenance.
          </ScrollReveal>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#fefefe",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: "1.5rem",
            }}
          >
            Automation & Scripting
          </h3>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={3}
            blurStrength={8}
          >
            PowerShell scripting for Windows automation, Python programming for
            system tasks, Bash shell scripting, workflow optimization, and
            automated task scheduling to improve efficiency.
          </ScrollReveal>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#fefefe",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: "1.5rem",
            }}
          >
            Networking & Security
          </h3>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={3}
            blurStrength={8}
          >
            Cisco networking technologies, VPN configuration and management,
            firewall setup and maintenance, network troubleshooting, and
            implementation of security protocols to protect enterprise systems.
          </ScrollReveal>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#fefefe",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: "1.5rem",
            }}
          >
            Monitoring & Management Tools
          </h3>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={3}
            blurStrength={8}
          >
            System Center Configuration Manager (SCCM), Nagios monitoring
            platform, comprehensive system monitoring, performance analysis and
            optimization, and incident response management.
          </ScrollReveal>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#fefefe",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: "1.5rem",
            }}
          >
            Help Desk & Support
          </h3>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={3}
            blurStrength={8}
          >
            Technical troubleshooting and problem resolution, comprehensive user
            support, ticketing system management, detailed technical
            documentation, and end-user training programs.
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default transition(Skills);
