import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid" id="box">
      <div className="row g-4">
        <div className="col-md-6 col-12">
          <Link to="/React-Portfolio/projects">
            <div className="card">
              <img
                src="./assets/projectimg.jpg"
                className="cardImg"
                alt="project card"
              />
              <div className="card-body">
                <p className="card-text">projects that I'm proud of.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6 col-12">
          <a href="https://docs.google.com/document/d/1ldvbq_1vePnFg1KKPuAW9o05M-rTyvvre7kjiXKcetk/export?format=pdf">
            <div className="card"id="resume">
              <img
                src="./assets/resume.jpg"
                className="cardImg"
                alt="resume card"
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
