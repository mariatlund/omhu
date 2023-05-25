import React from "react";
import { ProductColors } from "@/types/productColors";
import ColourSelect from "./ColourSelect/ColourSelect";

interface MetalColorSelectorProps {
  onChangeMetalColor: (value: string) => void;
  selectedMetalColor: string | undefined;
  containerClass?: string;
  options: ProductColors;
  defaultOption?: ProductColors[0];
}

// const metalColorOptions = {
//   Gold: {
//     label: "Gold",
//     value: "1762",
//     hexCode: "#DCC68C",
//   },
//   Silver: {
//     label: "Silver",
//     value: "1763",
//     hexCode: "#BCBCBC",
//   },
// };
//can be used near metal color
// <span className="capitalize style-body font-normal"> {selectedMetalColor === "1762" ? "Gold" : "Silver"}</span> */

function MetalColorSelector({ onChangeMetalColor, selectedMetalColor, containerClass, options, defaultOption }: MetalColorSelectorProps) {
  const selectedOption = Object.values(options).find(({ value }) => value === selectedMetalColor);

  return (
    <div className="flex flex-col gap-2">
      <p className="uppercase style-h4">Metal colour</p>

      <ColourSelect options={options} onChange={onChangeMetalColor} defaultOption={defaultOption} selectedOptionValue={selectedMetalColor} containerClass={containerClass} />
    </div>
  );
}

export default MetalColorSelector;
