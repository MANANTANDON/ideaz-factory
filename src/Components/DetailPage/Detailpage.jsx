import React from 'react';
import image1 from '../../Assets/getset.png';
import icon1 from '../../Assets/icon1.png';
import myImage from '../../Assets/4d616e616e.jpeg';
import './Detailpage.css';
import { BreakingNewsTwo } from '../HomePage/Section/Breaking News/BreakingNewsTwo';
export const DetailPage = () => {
  return (
    <React.Fragment>
      <div className="container-xxl">
        <div className="card border-0">
          <div className="card-body">
            <img src={image1} alt="" className="card-img-top" />
            <div className="row my-5">
              {/* Left Card */}
              <div className="card col-lg-8 border-0 p-1">
                <div className="card-title d-flex g-sm-5">
                  <p className="fw-bold fs-1 col-lg-8">
                    5-Minute Meditation You Can Do Anywhere
                  </p>
                  <p className="col-lg-4">
                    <img
                      src={icon1}
                      alt=""
                      className="float-end dp7"
                      height={17}
                      width={17}
                    />
                  </p>
                </div>
                <div className="d-flex flex-row">
                  <img
                    src={myImage}
                    alt=""
                    height="40"
                    width="40"
                    className="rounded-circle border"
                  />
                  <p className="ms-4 mt-2 fw-bold">4d616e616e</p>
                  <p className="ms-4 mt-2 dp1">Aug 10, 2023</p>
                  <p className="mt-2 ms-4">12K</p>
                  <p className="mt-2 ms-4">20</p>
                </div>
                <p className="text-emphasis-dark dp2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                  <br />
                  <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur.
                </p>
                <img src={image1} alt="" className="mt-2" />
                <p className="card-text text-center fw-bold py-4">
                  {' '}
                  Photo By ilham
                </p>
                <p className="dp2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <hr className="border border-danger opacity-50" />
                {/* comment section */}
                <div className="card-title">
                  <p className="fw-bold fs-1">Comment</p>
                  <div className="card col border-0">
                    <div className="card-text dp3 text-black border border-danger rounded-top">
                      Manan Tandon
                    </div>
                    <div className="card-text dp4 rounded-bottom">
                      4d616e616e
                    </div>
                  </div>
                </div>
                <textarea
                  className="rounded p-3 dp6 mt-4"
                  placeholder="Any question for this product?"
                  required
                ></textarea>
                <button className="dp5 col-3 col-xxl-2 border-0 rounded text-white py-2 dp5 mt-3">
                  send
                </button>
              </div>
              {/* Right Card */}
              <div className="card col-lg-4 border-0"></div>
            </div>
          </div>
        </div>
        <BreakingNewsTwo />
        <div className="card text-center border-0 my-5">
          <div className="card-body">
            <a className="btn dp5 text-white border-0 py-3 px-5 rounded">
              Load More
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
