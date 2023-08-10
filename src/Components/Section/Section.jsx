import React from "react";
import imageOne from "../../Assets/image1.png";
import myImage from "../../Assets/4d616e616e.jpeg";
import rahulG from "../../Assets/rahulG.png";

import "./Section.css";

export const Section = () => {
  const seeMore = (
    <p className="mt-3 mb-3">
      <a className="link-underline-opacity-0 link-danger" href="#">
        see more
      </a>
    </p>
  );
  return (
    <React.Fragment>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="card border-0 pt-5 ps-5 pe-5 sc4">
          <div className="card-body">
            <a href="#" className="btn sc2">
              Top Stories
            </a>
            <h1 className="card-title mt-3">
              Explore Russia with Ease: Electronic Visa for Indian Passport
              Holders...
            </h1>
            <p className="card-text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut.
            </p>
            {seeMore}

            <img src={imageOne} className="card-img-bottom" />
          </div>
        </div>
        <div
          className="card border-0 pt-5 sc4"
          style={{ backgroundColor: "#FFEDF0" }}
        >
          <div className="card-body">
            <h1 className="card-title fw-bold" style={{ fontSize: "65px" }}>
              Trending News
            </h1>
            <h1 className="card-title mt-3">
              Explore Russia with Ease: Electronic Visa for Indian Passport
              Holders...
            </h1>
            <div className="d-flex flex-row mt-4">
              <img
                src={myImage}
                alt=""
                height="40"
                width="40"
                className="rounded-circle border"
              />
              <div className="mt-2 ms-4 fw-bold">4d616e616e</div>
              <div className="mt-2 ms-4" style={{ color: "#666666" }}>
                June 12, 2021
              </div>
            </div>
            <p className="card-text mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-3 mb-3">
              <a className="link-underline-opacity-0 link-danger" href="#">
                see more
              </a>
            </p>
            <img src={rahulG} className="card-img-bottom" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
