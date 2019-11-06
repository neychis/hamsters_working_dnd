import React from "react";
import Hamster from "../Hamster";
import "../../styles/hamsterField.scss";
import HamsterContext from "../../HamsterContext";

const HamsterField = () => {
  return (
    <HamsterContext.Consumer>
      {({ changeCurrentHamsterState, hamsters }) => (
        <div
          className="hamsterField"
          onDragOver={e => e.preventDefault()}
          onDrop={e => changeCurrentHamsterState()}
        >
          {hamsters
            .filter(hamster => !hamster.shelfId)
            .map(hamster => (
              <Hamster key={hamster.id} id={hamster.id} />
            ))}
        </div>
      )}
    </HamsterContext.Consumer>
  );
};

export default HamsterField;
