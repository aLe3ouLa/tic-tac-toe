import OIcon from "../components/Icon/OIcon";
import XIcon from "../components/Icon/XIcon";

export const displayPlayerSymbol = (currentState) => {
    console.log(currentState)
    switch (currentState) {
      case "X":
        return <XIcon width="26px" />
      case "O": 
        return <OIcon width="36px" />
      default: 
        return null;
    }
  }