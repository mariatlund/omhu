import React from "react";
import Radio from "../Radio/Radio";
import ColourSelect from "./ColourSelect/ColourSelect";

interface MetalColorSelectorProps {
  onChangeMetalColor: (value: string) => void;
  selectedMetalColor: string | undefined;
}

const metalColorOptions = [
  {
    label: "Gold",
    value: "1762",
    hexCode: "#DCC68C",
  },
  {
    label: "Silver",
    value: "1763",
    hexCode: "#BCBCBC",
  },
];

function MetalColorSelector({ onChangeMetalColor, selectedMetalColor }: MetalColorSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="uppercase style-h4">
        Metal colour: <span className="capitalize style-body font-normal"> {selectedMetalColor === "1762" ? "Gold" : "Silver"}</span>
      </p>

      <ColourSelect options={metalColorOptions} onChange={onChangeMetalColor} defaultOption={metalColorOptions[0]} selectedOptionValue={selectedMetalColor} />
    </div>
  );
}

export default MetalColorSelector;
