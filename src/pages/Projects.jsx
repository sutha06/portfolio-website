import Navbar from "../components/NavBar";

function Projects() {
  return (
    <div style={{ width: "100%", height: "100vh", background: "#060010" }}>
      <Navbar showHome={true} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "#fff",
          fontSize: "4rem",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "500",
        }}
      >
        PROJECTS
      </div>
    </div>
  );
}

export default Projects;
