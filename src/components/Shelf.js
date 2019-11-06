import React from "react";
import PropTypes from "prop-types";
import Hamster from "./Hamster";
import HamsterContext from "../HamsterContext";

const Shelf = props => {
  return (
    <HamsterContext.Consumer>
      {({ changeCurrentHamsterState, hamsters }) => (
        <div
          key={props.id}
          onDragOver={e => e.preventDefault()}
          onDrop={() => changeCurrentHamsterState(props.id)}
        >
          {hamsters
            .filter(hamster => hamster.shelfId === props.id)
            .map(hamster => (
              <Hamster key={hamster.id} id={hamster.id} />
            ))}
        </div>
      )}
    </HamsterContext.Consumer>
  );
};

Shelf.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired
  })
};

export default Shelf;
