import FlowingMenu from "../components/FlowingMenu";
import Navbar from "../components/NavBar";
import transition from "../components/Transition";

const demoItems = [
  {
    link: "/about",
    text: "SUTHA",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "/projects",
    text: "PROJECTS",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "/skills",
    text: "SKILLS",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "/contact",
    text: "CONTACT",
    image: "https://picsum.photos/600/400?random=4",
  },
];

const Home = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#171717" }}>
      <Navbar showHome={false} />
      <FlowingMenu items={demoItems} />
    </div>
  );
};

export default transition(Home);
