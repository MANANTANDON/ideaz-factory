import React from "react";
import image2 from "../../../Assets/getset.png";
import myImage from "../../../Assets/4d616e616e.jpeg";
import { Newsletter } from "../Newsletter/Newsletter";

export const BreakingNews = () => {
  return (
    <React.Fragment>
      <div class="container-xxl">
        <div class="row">
          <div class="col-sm-8 mt-5" style={{ zIndex: "-10" }}>
            <div className="card border-0">
              <div className="card-body">
                <h1 className="card-title fw-bold" style={{ fontSize: "48px" }}>
                  Breaking News
                </h1>

                <div className="card bg-body-tertiary border-0 p-2 mt-5">
                  <div className="card-body">
                    <img className="card-img-top" src={image2} alt="" />
                    <h4 className="card-text mt-4 fw-bold">
                      {" "}
                      18 Instagram Moments You May Have Missed This Week
                    </h4>
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
                        Aug 10, 2023
                      </div>
                    </div>
                    <p className="card-text mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="mt-3 mb-2">
                      <a
                        className="link-underline-opacity-0 link-danger"
                        href="#"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mt-5">
            <Newsletter />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

{
  /* <div className="container-xxl mt-5 border border-danger">
  <div className="row row-cols-1 row-cols-md-2">
    {/* CARD LEFT 
    <div className="col-8">
      <div className="card">
        <div className="card-body">
          <h1
            className="card-title fw-bold border border-warning"
            style={{ fontSize: "48px" }}
          >
            Breaking News
          </h1>
          <div className="card">
            <div className="card-body">
              <img className="card-img-top" src={image2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* CARD RIGHT 
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <div
            className="card text-center text-light fw-bold"
            style={{ backgroundColor: "#F50022", fontSize: "32px" }}
          >
            <div className="card-title mt-5">Newsletter</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
