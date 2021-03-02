import React from "react";
import Row from "../Row";
import Card from "../Card";
import "./style.css";

function Projects({results}) {
  console.log(results)
  return (
    <Row className="search-results">
      {results.map(project => (
        <Card project={project} />
      ))}
    </Row>
  );
}

export default Projects;
