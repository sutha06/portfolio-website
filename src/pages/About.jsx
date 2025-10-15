import React from "react";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";
import DotExpandButton from "../components/DotExpandButton";

const About = () => {
  return (
    <div style={{ width: "100%", height: "100vh", background: "#060010" }}>
      <Navbar showHome={true} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: "100vh",
          gap: "0",
        }}
      >
        {/* LEFT SIDE - Your Photo - Full Height */}
        <div
          style={{
            height: "100vh",
            overflow: "hidden",
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

        {/* RIGHT SIDE - Text Content */}
        <div
          style={{
            padding: "4rem",
            color: "#fff",
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
            operating systems, configuration management, and cloud technologies.
            I enjoy working with new technologies and am eager to apply my
            practical skills to solve problems and grow within a professional
            environment.
          </p>

          <DotExpandButton href="/Suthakaran Resume.pdf" text="View Resume" />
        </div>
      </div>
    </div>
  );
};

export default transition(About);
