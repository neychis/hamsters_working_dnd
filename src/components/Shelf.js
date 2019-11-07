import React from "react";
import PropTypes from "prop-types";
import Hamster from "./Hamster";
import HamsterContext from "../HamsterContext";

const Shelf = props => {
  const _getHamstersMarkup = hamsters => {
    return hamsters
      .filter(hamster => hamster.shelfId === props.id)
      .map(hamster => <Hamster key={hamster.id} id={hamster.id} />);
  };
  return (
    <HamsterContext.Consumer>
      {({ changeCurrentHamsterState, hamsters }) => {
        return (
          <div
            className="rack__shelf"
            key={props.id}
            onDragOver={e => e.preventDefault()}
            onDrop={() => changeCurrentHamsterState(props.id)}
          >
            {_getHamstersMarkup(hamsters)}
            <div className="rack__door" />
          </div>
        );
      }}
    </HamsterContext.Consumer>
  );
};

Shelf.propTypes = {
  props: PropTypes.shape({ id: PropTypes.number.isRequired })
};

export default Shelf;
