import React from "react";
import SingleBlock from "./SingleBlock";

const SingleRow = props => {
  const rowArray = props.lottonumber;
  const location = props.location;

  return rowArray.map((number, index) =>
    <SingleBlock
      oneblock={number}
      key={index}
      star={location === 'euro' && index > 4 ? true : false}
    />
  );
};

export default SingleRow;
