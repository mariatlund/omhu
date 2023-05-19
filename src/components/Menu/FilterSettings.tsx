import React from "react";
import Checkbox from "../InputFields/Checkbox/Checkbox";
import TextInput from "../InputFields/TextInput/TextInput";

interface FilterSettingsProps {
  // onChangeCategory: (category: string, checked: boolean) => void;
  onChangePrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterSettings({ onChangeCategory, onChangePrice }: FilterSettingsProps) {
  const checkboxValues = ["Seating", "Artwork", "Accessories"];

  return (
    <div className="flex flex-col sm:flex-row gap-10  bg-white p-5 w-auto  sm:w-[450px] h-auto border-2 border-blue absolute top-[52.5px] z-50 text-blue">
      <div className="flex flex-col gap-5">
        <p className="font-semibold uppercase style-body">Category</p>
        {checkboxValues.map((item) => (
          <Checkbox key={item} label={item} value={item} fieldName={`checkbox_${item}`} onChange={(event) => onChangeCategory(event)} />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase style-body ">Min price</p>
          <div className="flex flex-row items-center justify-center gap-2">
            <TextInput type="text" placeholder="e.g. 1000" fieldName="min_price" onChange={onChangePrice} pattern="[0-9]" />
            <span>€ EUR </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase style-body ">Max price</p>
          <div className="flex flex-row items-center justify-center gap-2">
            <TextInput type="text" placeholder="e.g. 5000" fieldName="max_price" onChange={onChangePrice} pattern="[0-9]" />
            <span>€ EUR</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSettings;
