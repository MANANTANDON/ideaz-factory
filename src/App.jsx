import Marquee from "react-fast-marquee";
import "./App.module.css";
import { Carousel } from "./Components/Carousel/Carousel";
import { Header } from "./Components/Header/Header";
import { Section } from "./Components/Section/Section";

function App() {
  return (
    <main>
      <Header />
      <secion>
        <Carousel />
        <Marquee
          speed={100}
          style={{
            background: "#f6454977",
            height: "30px",
            zIndex: "-20px",
            fontSize: "12px",
          }}
        >
          elusmod temp Lorem ipsum dolor sit amet., consectetur adipiscing elit,
          sed do elusmod temp Lorer ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod temp Lorem ipsum dolor sit amet, consectetur
          adipiscin ar 0081 DOBL 0002 0012 OOZE DOEZ OOPS 0052 0092 8 Lorem
        </Marquee>
        <Section />
        <Section />
      </secion>
    </main>
  );
}

export default App;
