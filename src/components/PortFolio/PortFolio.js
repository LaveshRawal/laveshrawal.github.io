import React from "react";
import "./pp.css";
import img1 from "../img/react-cover.png";
import img2 from "../img/RC.png";
import img3 from "../img/RJS.png";

const PortFolio = () => {
  return (
    <section id="PortFolio">
      <h3>My Recent Work</h3>
      <h2>Portfolio</h2>

      <div className="container folio_container">
        <article className="portfolio_item">
          <div className="folio_item-img">
            <img src={img1} alt="folio images" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="folio_item_cta">
            <a
              href="https://github.com/"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/"
              rel="noreferrer"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="folio_item-img">
            <img src={img2} alt="folio img2" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="folio_item_cta">
            <a
              href="https://github.com/"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/"
              rel="noreferrer"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="folio_item-img">
            <img src={img3} alt="folio image0" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="folio_item_cta">
            <a
              href="https://github.com/"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/"
              rel="noreferrer"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PortFolio;
