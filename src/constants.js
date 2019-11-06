const numberOfHamsters = 3;
const numberOfShelves = 5;

const pickHamsterEventName = "hamsterPicked";
export class Constants {
  static get numberOfHamsters() {
    return numberOfHamsters;
  }

  static get numberOfShelves() {
    return numberOfShelves;
  }

  static get pickHamsterEventName() {
    return pickHamsterEventName;
  }
}

export default Constants;
