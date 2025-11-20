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
        className="about-photo"
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
        className="about-content"
        style={{
          marginLeft: "50%",
          padding: "6rem 5rem",
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
            className="about-label"
            style={{
              fontSize: "1.1rem",
              letterSpacing: "0.2em",
              marginBottom: "3rem",
              textAlign: "right",
              color: "#b5b5b5",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            ABOUT ME
          </p>

          <h1
            className="about-title"
            style={{
              fontSize: "5rem",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
              marginBottom: "3rem",
              color: "#fefefe",
              lineHeight: "1.2",
            }}
          >
            SUTHAKARAN
            <br />
            SIVA
          </h1>

          <p
            className="about-description"
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: "3rem",
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

      <style>{`
        /* 4K and Large Displays */
        @media (min-width: 2560px) {
          .about-title {
            font-size: 6rem !important;
          }
          .about-description {
            font-size: 1.5rem !important;
          }
          .about-label {
            font-size: 1.3rem !important;
          }
        }

        /* Standard Laptop - 1440px */
        @media (max-width: 1440px) {
          .about-title {
            font-size: 4.5rem !important;
          }
          .about-description {
            font-size: 1.2rem !important;
          }
          .about-label {
            font-size: 1rem !important;
          }
        }

        /* Standard Laptop - 1366px (YOUR SMALL LAPTOP) */
        @media (max-width: 1366px) {
          .about-photo {
            width: 45% !important;
          }
          .about-content {
            margin-left: 45% !important;
            padding: 5rem 3rem !important;
          }
          .about-title {
            font-size: 3.5rem !important;
          }
          .about-description {
            font-size: 1.05rem !important;
          }
          .about-label {
            font-size: 0.95rem !important;
          }
        }

        /* MacBook Pro 14" - 1280px */
        @media (max-width: 1280px) {
          .about-photo {
            width: 42% !important;
          }
          .about-content {
            margin-left: 42% !important;
            padding: 5rem 2.5rem !important;
          }
          .about-title {
            font-size: 3.3rem !important;
          }
          .about-description {
            font-size: 1rem !important;
          }
        }

        /* Small Laptop - 1024px */
        @media (max-width: 1024px) {
          .about-photo {
            width: 40% !important;
          }
          .about-content {
            margin-left: 40% !important;
            padding: 4rem 2rem !important;
          }
          .about-title {
            font-size: 3rem !important;
          }
          .about-description {
            font-size: 0.95rem !important;
          }
          .about-label {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
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
      credentialUrl:
        "https://www.credly.com/badges/4d010022-c90b-42df-81f8-05876d7c3176/public_url",
    },
    {
      title: "CompTIA Security+ Certificate",
      image: "/images/security.png",
      status: "Completed",
      date: "Expected November 2025",
      credentialUrl:
        "https://www.credly.com/badges/4ccc6ee2-e1e4-48be-8b60-9523043721ac/public_url",
    },
    {
      title: "RedHat Certified System Administrator (RHCSA) Certificate",
      image: "/images/redhat.png",
      status: "In Progress",
      date: "Expected December 2025",
      credentialUrl: null,
    },
    {
      title: "CompTIA Network+ Certificate",
      image: "/images/network.png",
      status: "In Progress",
      date: "Expected January 2026",
      credentialUrl: null,
    },
    {
      title: "Microsoft Azure Administrator Certificate",
      image: "/images/azure.png",
      status: "In Progress",
      date: "January 2026",
      credentialUrl: null,
    },
  ];

  return (
    <div style={{ marginTop: "4rem", paddingBottom: "4rem" }}>
      <h2
        className="cert-title"
        style={{
          fontSize: "2.5rem",
          fontWeight: "500",
          marginBottom: "3rem",
          textAlign: "left",
          color: "#fefefe",
          fontFamily: "Montserrat, sans-serif",
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
            credentialUrl={cert.credentialUrl}
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

        @media (min-width: 2560px) {
          .cert-title {
            font-size: 3rem !important;
          }
        }

        @media (max-width: 1440px) {
          .cert-title {
            font-size: 2.3rem !important;
          }
        }

        @media (max-width: 1366px) {
          .cert-title {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 1280px) {
          .cert-title {
            font-size: 1.9rem !important;
          }
        }

        @media (max-width: 1024px) {
          .cert-title {
            font-size: 1.8rem !important;
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
  credentialUrl,
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      className="cert-card"
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
        className="cert-image"
        src={image}
        alt={title}
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
      />
      <h4
        className="cert-card-title"
        style={{
          fontSize: "1.5rem",
          fontWeight: "500",
          textAlign: "center",
          margin: 0,
          color: "#fefefe",
          fontFamily: "Montserrat, sans-serif",
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
          className="cert-status"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            fontSize: "1rem",
            fontWeight: "500",
            fontFamily: "Montserrat, sans-serif",
            background:
              status === "Completed"
                ? "rgba(34, 197, 94, 0.2)"
                : "rgba(59, 130, 246, 0.2)",
            color: status === "Completed" ? "#22c55e" : "#3b82f6",
          }}
        >
          {status}
        </span>
        <span
          className="cert-date"
          style={{
            fontSize: "1rem",
            color: "#b5b5b5",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {date}
        </span>
        {credentialUrl ? (
          <a
            className="cert-credential"
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "1rem",
              color: "#b5b5b5",
              fontFamily: "Montserrat, sans-serif",
              textDecoration: "underline",
            }}
          >
            View Credential
          </a>
        ) : null}
      </div>

      <style>{`
        @media (min-width: 2560px) {
          .cert-image {
            width: 250px !important;
            height: 250px !important;
          }
          .cert-card-title {
            font-size: 1.8rem !important;
          }
        }

        @media (max-width: 1440px) {
          .cert-image {
            width: 190px !important;
            height: 190px !important;
          }
          .cert-card-title {
            font-size: 1.4rem !important;
          }
        }

        @media (max-width: 1366px) {
          .cert-card {
            padding: 2rem !important;
            min-height: 320px !important;
          }
          .cert-image {
            width: 150px !important;
            height: 150px !important;
          }
          .cert-card-title {
            font-size: 1.15rem !important;
          }
          .cert-status, .cert-date {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 1280px) {
          .cert-image {
            width: 140px !important;
            height: 140px !important;
          }
          .cert-card-title {
            font-size: 1.1rem !important;
          }
        }

        @media (max-width: 1024px) {
          .cert-card {
            padding: 1.5rem !important;
          }
          .cert-image {
            width: 130px !important;
            height: 130px !important;
          }
          .cert-card-title {
            font-size: 1rem !important;
          }
          .cert-status, .cert-date {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default transition(About);
