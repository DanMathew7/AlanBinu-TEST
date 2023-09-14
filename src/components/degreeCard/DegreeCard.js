import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import mca from "../../images/ignou1.png";
import bca from "../../images/mg.png";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <>
        <br />
        <div className="degree-card">
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(100%, 100%)",
                }}
                src={bca}
                alt={degree.alt_name1}
              />
            </div>
          </Flip>

          <Fade right duration={2000} distance="40px">
            <div className="card-body">
              <div
                className="body-header"
                style={{ backgroundColor: theme.headerColor }}
              >
                <div className="body-header-title">
                  <h3 className="card-title" style={{ color: theme.text }}>
                    {degree.title1}
                    <br />
                    {degree.subtitle1}
                  </h3>
                  <h3 className="card-subtitle1">
                    Foreign Equivalency : MASTER'S DEGREE (Verifyed By WES )
                  </h3>
                  2021 - 2023
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}></h3>
                </div>
              </div>
              <div classname="body-content">
                <br />
                <p className="content-list" style={{ color: theme.text }}>
                  <br />
                  ⚡ The value of an IGNOU MCA degree is comparable to that of
                  an MG University MCA degree.
                  <br />
                </p>

                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <br />
        <br />
        <br />
        <div className="degree-card">
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(100%, 100%)",
                }}
                src={mca}
                //src={require(`../../assests/images/${degree.logo_path1}`)}
                alt={degree.alt_name1}
              />
            </div>
          </Flip>

          <Fade right duration={2000} distance="40px">
            <div className="card-body">
              <div
                className="body-header"
                style={{ backgroundColor: theme.headerColor }}
              >
                <div className="body-header-title">
                  <h3 className="card-title" style={{ color: theme.text }}>
                    {degree.title1}
                    <br />
                    {degree.subtitle1}
                  </h3>
                  2021 - 2023
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}></h3>
                </div>
              </div>
              <div classname="body-content">
                <br />
                {degree.descriptions1.map((sentence1) => {
                  return (
                    <p className="content-list" style={{ color: theme.text }}>
                      <br />
                      {sentence1}
                      <br />
                    </p>
                  );
                })}
                <a
                  href={degree.website_link1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <br />
        <br />
        <br />
        <div className="degree-card">
          <Fade right duration={2000} distance="40px">
            <div className="card-body">
              <div
                className="body-header"
                style={{ backgroundColor: theme.headerColor }}
              >
                <div className="body-header-title">
                  <h2 className="card-title" style={{ color: theme.text }}>
                    {degree.title}
                    <br />
                    {degree.subtitle}
                  </h2>
                  <h3 className="card-subtitle1">
                    Foreign Equivalency : BACHELOR'S DEGREE &nbsp;(Verifyed By
                    WES )
                  </h3>
                  2017 - 2020
                </div>
                <div className="body-header-duration">
                  <h3 className="duration" style={{ color: theme.text }}></h3>
                </div>
              </div>
              <div classname="body-content">
                <br />
                {degree.descriptions.map((sentence) => {
                  return (
                    <p className="content-list" style={{ color: theme.text }}>
                      <br />
                      {sentence}
                    </p>
                  );
                })}
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Fade>
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(100%, 100%)",
                }}
                src={bca}
                //src={require(`../../assests/images/${degree.logo_path1}`)}
                alt={degree.alt_name1}
              />
            </div>
          </Flip>
        </div>
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default DegreeCard;
