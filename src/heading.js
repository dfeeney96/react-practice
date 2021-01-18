import React from "react";

import "./heading.css";

export default function Heading() {
  return (
    <div className="heading">
      <h1 className="greeting">
        Whatever the weather, keep smiling{" "}
        <span role="img" aria-label="smile">
          😊
        </span>
      </h1>
    </div>
  );
}