import React from "react";

const SingleBlock = props => {
  return (
    <div className={`tinysquare ${props.star ? "star" : ""}`} id="ts">
      {props.oneblock}
    </div>
  );
};

export default SingleBlock;
