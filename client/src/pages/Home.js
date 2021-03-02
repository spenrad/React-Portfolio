import React from "react";

function Home() {
  return (
    <div className="container-fluid" id="box">
      <div className="row g-4">
        <div className="col-md-6 col-12">
          <a href="/projects">
            <div className="card">
              <img
                src="./assets/projectimg.jpg"
                className="cardImg"
                alt="project card image"
              />
              <div className="card-body">
                <p className="card-text">projects that I'm proud of.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-12">
          <a href="https://docs.google.com/document/d/1ldvbq_1vePnFg1KKPuAW9o05M-rTyvvre7kjiXKcetk/export?format=pdf">
            <div className="card"id="resume">
              <img
                src="./assets/resume.jpg"
                className="cardImg"
                alt="resume card image"
              />
              <div className="card-body">
                <p className="card-text">
                  qualifications<b>,</b> in writing.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
