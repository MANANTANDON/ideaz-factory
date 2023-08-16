import Marquee from 'react-fast-marquee';
import React from 'react';
import { Header } from './Components/Header/Header';
import { Section } from './Components/HomePage/Section/Top Stories/Section';
import { Carousel } from './Components/Carousel/Carousel';
import appCss from './App.module.css';
import { Footer } from './Components/Footer/Footer';
import { Homepage } from './Components/HomePage/Homepage';
import { DetailPage } from './Components/DetailPage/Detailpage';

function App() {
  return (
    <main>
      <div>
        <Header />
        <div className={appCss.sticky}>
          <Marquee
            speed={100}
            style={{
              background: '#fca8b4',
              height: '30px',
              fontSize: '12px ',
            }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
            amet.., comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et
            Malorum by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </Marquee>
          <Carousel />
        </div>
        <div>
          {/* <Homepage /> */}
          <DetailPage />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;

/* 
  Ad Content
<div className="container-xxl">
  <div
    className="card text-center border-0"
    style={{
      height: "20vh",
      justifyContent: "center",
      alignContent: "center",
    }}
  >
    4d616e616e 54616e646f6e (AD AREA)
  </div>
</div>; */
