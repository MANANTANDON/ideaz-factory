import React from "react";
import image2 from "../../../Assets/getset.png";

export const TrendingSection = () => {
  return (
    <React.Fragment>
      <div className="card mt-5 border-0">
        <h3 className="card-title fw-bold">Trending Now</h3>
        <div className="row g-0">
          <div>
            <img
              src={image2}
              height={80}
              width={80}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-sm-8">
            <div className="card-body">
              <p className="card-text fw-bold" style={{ fontSize: "10px" }}>
                TekTok Made Me Buy It Products You Shouldn't Sleep On
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Aug 11, 2023</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
