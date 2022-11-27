import { Minus, Plus } from "phosphor-react";
import { ControlsContainer } from "./styles";

export function Controls() {
  return (
    <ControlsContainer>
      <button>
        <Minus size={14} weight="fill" className="minus-icon" />
      </button>
      <span>1</span>

      <button>
        <Plus size={14} weight="fill" className="plus-icon" />
      </button>
    </ControlsContainer>
  );
}
