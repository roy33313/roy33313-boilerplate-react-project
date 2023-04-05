import React from "react";

export default function Image(props) {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <img src={props.img} />
    </div>
  );
}
