import React, { Component } from "react";
import Constants from "../constants";
import HamsterField from "./containers/HamsterField";
import HamsterContext from "../HamsterContext";
import Rack from "./containers/Rack";
import "../styles/main.scss";

class App extends Component {
  constructor(props) {
    super(props);

    const hamsters = [];
    for (let i = 0; i < Constants.numberOfHamsters; i++) {
      hamsters.push({ id: i });
    }

    this.state = { hamsters };

    this.setCurrentHamsterId = this.setCurrentHamsterId.bind(this);
    this.changeCurrentHamsterState = this.changeCurrentHamsterState.bind(this);
  }

  changeCurrentHamsterState(shelfId) {
    const newState = { ...this.state };
    newState.hamsters = newState.hamsters.map(hamster => {
      if (hamster.id === newState.currentHamsterId) {
        hamster.shelfId = shelfId;
      }
      return hamster;
    });
    this.setState(newState);
  }

  render() {
    return (
      <HamsterContext.Provider
        value={{
          changeCurrentHamsterState: this.changeCurrentHamsterState,
          setCurrentHamsterId: this.setCurrentHamsterId,
          hamsters: this.state.hamsters
        }}
      >
        <div className="mainContainer">
          <HamsterField />
          <Rack />
        </div>
      </HamsterContext.Provider>
    );
  }

  setCurrentHamsterId(hamsterId) {
    const newState = { ...this.state };
    newState.currentHamsterId = hamsterId;
    this.setState(newState);
    console.log(hamsterId);
  }
}

export default App;
