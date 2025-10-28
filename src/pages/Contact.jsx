import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";

const Contact = () => {
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          padding: "0 clamp(3rem, 6vw, 6rem)",
          gap: "2rem",
          maxWidth: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE - Thank You Message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#fefefe",
            paddingLeft: "clamp(0rem, 2vw, 2rem)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(4rem, 10vw, 10rem)",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "clamp(2rem, 4vw, 4rem)",
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "-0.02em",
              marginTop: "-3rem",
              color: "#fefefe",
            }}
          >
            THANK
            <br />
            YOU
          </h1>

          <p
            style={{
              fontSize: "clamp(0.9rem, 1.3vw, 1.3rem)",
              marginBottom: "clamp(1.5rem, 3vw, 3rem)",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "400",
              lineHeight: "1.8",
              maxWidth: "650px",
              marginTop: "0",
              color: "#fefefe",
            }}
          >
            FOR TAKING THE TIME TO LEARN MORE ABOUT ME,
            <br />
            WANNA KNOW MORE? CONTACT ME THROUGH THE
            <br />
            LINKS PROVIDED
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <div>
              <span
                style={{
                  fontSize: "clamp(0.9rem, 1.3vw, 1.3rem)",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                  color: "#b5b5b5",
                }}
              >
                EMAIL:{" "}
              </span>
              <a
                href="mailto:SUTHAKARAN.SIVA0601@GMAIL.COM"
                style={{
                  fontSize: "clamp(0.9rem, 1.3vw, 1.3rem)",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                  color: "#fefefe",
                  textDecoration: "underline",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#b5b5b5";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#fefefe";
                }}
              >
                SUTHAKARAN.SIVA0601@GMAIL.COM
              </a>
            </div>

            <div>
              <span
                style={{
                  fontSize: "clamp(0.9rem, 1.3vw, 1.3rem)",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                  color: "#b5b5b5",
                }}
              >
                PHONE:{" "}
              </span>
              <a
                href="tel:+14167107465"
                style={{
                  fontSize: "clamp(0.9rem, 1.3vw, 1.3rem)",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                  color: "#fefefe",
                  textDecoration: "underline",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#b5b5b5";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#fefefe";
                }}
              >
                416-710-7465
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Social Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            gap: "clamp(0.8rem, 1.5vw, 2rem)",
            paddingRight: "clamp(3rem, 5vw, 6rem)",
            paddingBottom: "clamp(4rem, 5vw, 6rem)",
            height: "100%",
          }}
        >
          <FlipLink href="https://github.com/sutha06">GITHUB</FlipLink>
          <FlipLink href="https://www.linkedin.com/in/suthasiv/">
            LINKEDIN
          </FlipLink>
          <FlipLink href="https://tryhackme.com/p/Sutha">TRYHACKME</FlipLink>
        </div>
      </div>
    </div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontSize: "clamp(2.5rem, 5.5vw, 7rem)",
        fontWeight: "700",
        textTransform: "uppercase",
        fontFamily: "Montserrat, sans-serif",
        lineHeight: "1",
        color: "#fefefe",
        textDecoration: "none",
        textAlign: "right",
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            style={{ display: "inline-block" }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div style={{ position: "absolute", inset: "0" }}>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            style={{ display: "inline-block" }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default transition(Contact);
