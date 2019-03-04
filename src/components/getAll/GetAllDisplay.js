import React from "react";
import TypeCard from "../getAll/TypeCard";

const GetAllDisplay = props => {
  const cardDisplay = props.jobs.map((e, i) => (
    <TypeCard key={i} singleJob={e} />
  ));

  return <div className="getAllDisplay">{cardDisplay}</div>;
};

export default GetAllDisplay;
