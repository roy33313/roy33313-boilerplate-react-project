import React from "react";

export default function Image(props) {
console.log(props.img)
  return (
    <div>
      <img src={props.img} className="img-fluid" alt="Cargill logo" />
    </div>
  );
}
