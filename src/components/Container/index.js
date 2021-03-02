import React from "react";

function Container(props) {
  return <div className={props.background} style={props.style}>{props.children}</div>;
}

export default Container;
