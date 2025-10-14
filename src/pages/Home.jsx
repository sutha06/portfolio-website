import FlowingMenu from "../components/FlowingMenu";
import Navbar from "../components/NavBar";

const demoItems = [
  {
    link: "#",
    text: "SUTHA",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "PROJECTS",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "SKILLS",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "CONTACT",
    image: "https://picsum.photos/600/400?random=4",
  },
];

function Home() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#060010" }}>
      <Navbar showHome={false} />
      <FlowingMenu items={demoItems} />
    </div>
  );
}

export default Home;
