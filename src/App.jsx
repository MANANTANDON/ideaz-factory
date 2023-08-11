import Marquee from "react-fast-marquee";
import { Header } from "./Components/Header/Header";
import { Section } from "./Components/Section/Top Stories/Section";
import { Carousel } from "./Components/Carousel/Carousel";
import appCss from "./App.module.css";

function App() {
  return (
    <main>
      <div>
        <div className={appCss.sticky}>
          <Header />
          <Carousel />
          <Marquee
            speed={100}
            style={{
              background: "#fca8b4",
              height: "30px",
              fontSize: "12px ",
            }}
          >
            elusmod temp Lorem ipsum dolor sit amet., consectetur adipiscing
            elit, sed do elusmod temp Lorer ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod temp Lorem ipsum dolor sit amet,
            consectetur adipiscin ar 0081 DOBL 0002 0012 OOZE DOEZ OOPS 0052
            0092 8 Lorem
          </Marquee>
        </div>
        <div>
          <Section />
        </div>
      </div>
    </main>
  );
}

export default App;
