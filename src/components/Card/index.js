import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card({project}) {
  return (
    <>
    <div className="card " 
    // style={{backgroundImage: project.picture ? `url(${project.picture})` : "none" }} 
    >
      <img className="cardImgTop" src={project.picture} alt={project.title} />
      {!project.picture && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <div className="cardBody">
              <h4 className="card-title">{project.title}</h4>
              <p className="card-text">{project.description}</p>
      </div>
      <div className="cardFooter text-center">
      <CardBtn
        onClick={project.handleBtnClick}
        data-value="github"
      />
      <CardBtn
        onClick={project.handleBtnClick}
        data-value="deployed"
      />
      </div>
    </div>
    </>
  );
}

export default Card;
