import React from "react";
import PropTypes from "prop-types";
import HamsterContext from "../HamsterContext";
import hamsterIcon from "../statics/cute-hamster-50px.png";

const Hamster = props => {
  const _onDragEnd = event => {
    event.preventDefault();
  };
  return (
    <HamsterContext.Consumer>
      {({ setCurrentHamsterId }) => (
        <div
          name={`hamster ${props.id}`}
          draggable="true"
          onDragStart={() => setCurrentHamsterId(props.id)}
          onDragEnd={_onDragEnd}
        >
          <img src={hamsterIcon} alt={`hamster ${props.id}`} />
        </div>
      )}
    </HamsterContext.Consumer>
  );
};

Hamster.propTypes = {
  props: PropTypes.shape({ id: PropTypes.number })
};

export default Hamster;
