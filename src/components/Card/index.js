import React from "react";
import "./style.css";

function Card({ project }) {
  return (
    <>
      <div
        className="card text-justify p-2"
      >
        <img className="cardImgTop" src={project.picture} alt={project.title} />
        {!project.picture && (
          <i className="fa fa-spinner fa-spin" aria-hidden="true" />
        )}
        <div className="cardBody p-2">
          <h4 className="card-title text-center">{project.title}</h4>
          <p className="card-text">{project.description}</p>
        </div>
        <div className="cardFooter border-top p-3 text-center">
          <button className="btn btn-dark btn-sm mr-3">
            <a href={project.github} rel="noreferrer" target="_blank">
              Github
            </a>
          </button>
          <button className="btn btn-dark btn-sm">
            <a href={project.deployed} rel="noreferrer" target="_blank">
              Deployed
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
