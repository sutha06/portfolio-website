import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";
import DotExpandButton from "../components/DotExpandButton";

const About = () => {
  const containerRef = useRef(null);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#060010" }}>
      <Navbar showHome={true} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100vh",
          gap: "0",
        }}
      >
        {/* LEFT SIDE - Sticky Photo and Text */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1, overflow: "hidden" }}>
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
        </div>

        {/* RIGHT SIDE - Scrollable Content */}
        <div
          ref={containerRef}
          style={{
            padding: "4rem",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          {/* About Me Section */}
          <div
            style={{
              minHeight: "82vh",
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
              }}
            >
              I am seeking an Entry-Level / Internship in IT Support / System
              Administration. My strong foundational interest covers networking,
              operating systems, configuration management, and cloud
              technologies. I enjoy working with new technologies and am eager
              to apply my practical skills to solve problems and grow within a
              professional environment.
            </p>

            <DotExpandButton href="/Suthakaran Resume.pdf" text="View Resume" />
          </div>

          {/* Certifications Section */}
          <CertificationsCarousel containerRef={containerRef} />
        </div>
      </div>
    </div>
  );
};

const CertificationsCarousel = ({ containerRef }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const certifications = [
    {
      title: "Google IT Support Professional Certificate",
      image: "/images/GCC_badge_IT_Support.png",
      status: "Completed",
      date: "Sepectember 2025",
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
      title: "Microsoft Azure administrator Certificate",
      image: "/images/azure.png",
      status: "Completed",
      date: "January 2026",
    },
  ];

  return (
    <div style={{ marginTop: "4rem" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "500",
          marginBottom: "3rem",
          textAlign: "left",
        }}
      >
        CERTIFICATIONS
      </h2>

      <div
        ref={ref}
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={4}
            title={cert.title}
            image={cert.image}
            status={cert.status}
            date={cert.date}
          />
        ))}
      </div>

      {/* Buffer space at bottom */}
      <div style={{ height: "8rem" }} />
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
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
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
        <span style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}>
          {date}
        </span>
      </div>
    </motion.div>
  );
};

export default transition(About);
