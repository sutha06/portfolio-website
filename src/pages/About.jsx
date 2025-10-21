import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";
import DotExpandButton from "../components/DotExpandButton";

const About = () => {
  return (
    <div style={{ width: "100%", background: "#171717" }}>
      <Navbar showHome={true} />

      {/* LEFT SIDE - Fixed Photo */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "50%",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <img
          src="/images/me.png"
          alt="Suthakaran Siva"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* RIGHT SIDE - Scrollable Content */}
      <div
        style={{
          marginLeft: "50%",
          padding: "4rem",
          color: "#fefefe",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* About Me Section */}
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              marginBottom: "2rem",
              textAlign: "right",
              color: "#b5b5b5",
            }}
          >
            ABOUT ME
          </p>

          <h1
            style={{
              fontSize: "3.5rem",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
              marginBottom: "2rem",
              color: "#fefefe",
            }}
          >
            Suthakaran Siva
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: "2rem",
              color: "#fefefe",
            }}
          >
            I am seeking an Entry-Level / Internship in IT Support / System
            Administration. My strong foundational interest covers networking,
            operating systems, configuration management, and cloud technologies.
            I enjoy working with new technologies and am eager to apply my
            practical skills to solve problems and grow within a professional
            environment.
          </p>

          <DotExpandButton href="/Suthakaran Resume.pdf" text="View Resume" />
        </div>

        {/* Certifications Section */}
        <CertificationsCarousel />
      </div>
    </div>
  );
};

const CertificationsCarousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const certifications = [
    {
      title: "Google IT Support Professional Certificate",
      image: "/images/GCC_badge_IT_Support.png",
      status: "Completed",
      date: "September 2025",
    },
    {
      title: "CompTIA Network+ Certificate",
      image: "/images/network.png",
      status: "In Progress",
      date: "Expected November 2025",
    },
    {
      title: "RedHat Certified System Administrator (RHCSA) Certificate",
      image: "/images/redhat.png",
      status: "In Progress",
      date: "Expected December 2025",
    },
    {
      title: "Microsoft Azure Administrator Certificate",
      image: "/images/azure.png",
      status: "In Progress",
      date: "January 2026",
    },
  ];

  return (
    <div style={{ marginTop: "4rem", paddingBottom: "4rem" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "500",
          marginBottom: "3rem",
          textAlign: "left",
          color: "#fefefe",
        }}
      >
        CERTIFICATIONS
      </h2>

      <div
        ref={ref}
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
      >
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={certifications.length}
            title={cert.title}
            image={cert.image}
            status={cert.status}
            date={cert.date}
          />
        ))}
      </div>

      {/* Buffer space at bottom */}
      <div style={{ height: "4rem" }} />

      {/* Scroll Up Indicator */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          paddingBottom: "4rem",
        }}
      >
        <span
          style={{
            fontSize: "0.9rem",
            color: "#b5b5b5",
            fontFamily: "Montserrat, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Scroll Up
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            animation: "bounce 2s infinite",
            transform: "rotate(180deg)",
          }}
        >
          <path
            d="M12 5L12 19M12 19L19 12M12 19L5 12"
            stroke="#b5b5b5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) rotate(180deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

const CertificationCard = ({
  scrollYProgress,
  position,
  numItems,
  title,
  image,
  status,
  date,
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        background: "rgba(254, 254, 254, 0.05)",
        border: "1px solid rgba(181, 181, 181, 0.2)",
        borderRadius: "16px",
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        minHeight: "400px",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
      />
      <h4
        style={{
          fontSize: "1.3rem",
          fontWeight: "500",
          textAlign: "center",
          margin: 0,
          color: "#fefefe",
        }}
      >
        {title}
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            fontSize: "0.9rem",
            fontWeight: "500",
            background:
              status === "Completed"
                ? "rgba(34, 197, 94, 0.2)"
                : "rgba(59, 130, 246, 0.2)",
            color: status === "Completed" ? "#22c55e" : "#3b82f6",
          }}
        >
          {status}
        </span>
        <span style={{ fontSize: "0.9rem", color: "#b5b5b5" }}>{date}</span>
      </div>
    </motion.div>
  );
};

export default transition(About);
