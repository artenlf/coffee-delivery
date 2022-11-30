import { Minus, Plus } from "phosphor-react";
import { useEffect, useState } from "react";
import { ControlsContainer } from "./styles";

export function Controls() {
  const [counter, setCounter] = useState(1);

  function handleCounterDecrease() {
    counter > 0 ? setCounter(counter - 1) : setCounter(counter);
  }

  function handleCounterIncrease() {
    return setCounter(counter + 1);
  }

  useEffect(() => { }, [counter])

  return (
    <ControlsContainer>
      <button onClick={handleCounterDecrease}>
        <Minus size={14} weight="fill" className="minus-icon" />
      </button>
      <span>{counter}</span>

      <button onClick={handleCounterIncrease} >
        <Plus size={14} weight="fill" className="plus-icon" />
      </button>
    </ControlsContainer>
  );
}
