import React, { useState } from "react";
import DetailsContext from "./DetailsContext";

export default function DetailsState(props) {
  const initialDetails = {
    firstName: "John",
    lastName: "Doe",
    email: "johnDoe@gmail.com",
    phone: "123456789",
    picture: null,
  };

  const [details, setDetails] = useState(initialDetails);

  return (
    <div>
      <DetailsContext.Provider value={{ details, setDetails }}>
        {props.children}
      </DetailsContext.Provider>
    </div>
  );
}
