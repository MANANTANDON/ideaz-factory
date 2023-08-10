import React from "react";

import sectionCss from "./Section.module.css";

export const Section = () => {
  return (
    <React.Fragment>
      <div className={sectionCss.sc1}>
        <div className={sectionCss.sc2} style={{ width: "45%" }}>
          MANAN TANDON
        </div>
        <div className={sectionCss.sc3} style={{ width: "55%" }}></div>
      </div>
    </React.Fragment>
  );
};
