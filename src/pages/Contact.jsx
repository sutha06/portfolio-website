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
        background: "#060010",
        position: "relative",
      }}
    >
      <Navbar showHome={true} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          padding: "0 4rem",
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
            color: "#fff",
            paddingLeft: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "7.5rem",
              fontWeight: "700",
              lineHeight: "1.5",
              marginBottom: "3rem",
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "-0.02em",
              marginTop: "-3rem",
            }}
          >
            THANK
            <br />
            YOU
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              marginBottom: "2.5rem",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "400",
              lineHeight: "1.7",
              maxWidth: "550px",
              marginTop: "0",
            }}
          >
            FOR TAKING THE TIME TO LEARN MORE ABOUT ME,
            <br />
            WANNA KNOW MORE? CONTACT ME THROUGH THE
            <br />
            LINKS PROVIDED
          </p>

          <div>
            <span
              style={{
                fontSize: "1.05rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "400",
              }}
            >
              EMAIL:{" "}
            </span>
            <a
              href="mailto:SUTHAKARAN.SIVA0601@GMAIL.COM"
              style={{
                fontSize: "1.05rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "400",
                color: "#fff",
                textDecoration: "underline",
              }}
            >
              SUTHAKARAN.SIVA0601@GMAIL.COM
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Social Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            gap: "1rem",
            paddingRight: "4rem",
            paddingBottom: "4rem",
            height: "100%",
          }}
        >
          <FlipLink href="https://github.com/yourusername">GITHUB</FlipLink>
          <FlipLink href="https://linkedin.com/in/yourusername">
            LINKEDIN
          </FlipLink>
          <FlipLink href="https://www.hackerrank.com/yourusername">
            HACKERRANK
          </FlipLink>
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
        fontSize: "5.5rem",
        fontWeight: "700",
        textTransform: "uppercase",
        fontFamily: "Montserrat, sans-serif",
        lineHeight: "1",
        color: "#fff",
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
