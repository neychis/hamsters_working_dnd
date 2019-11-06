import React from "react";
import Constants from "../../constants";
import Shelf from "../Shelf";
import "../../styles/rack.scss";

const Rack = () => {
  const _renderShelves = () => {
    const shelves = [];
    for (let i = 1; i < Constants.numberOfShelves + 1; i++) {
      shelves.push(<Shelf key={i} id={i} />);
    }
    return shelves;
  };

  return <div className="rack" children={_renderShelves()} />;
};

export default Rack;
