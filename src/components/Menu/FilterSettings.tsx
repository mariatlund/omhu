import React from "react";
import Checkbox from "../InputFields/Checkbox/Checkbox";
import TextInput from "../InputFields/TextInput/TextInput";

interface FilterSettingsProps {
  onChangeCategory: (value: string, isChecked: boolean) => void;
  onChangePrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterSettings({ onChangeCategory, onChangePrice }: FilterSettingsProps) {
  const checkboxValues = ["Seating", "Artwork", "Accessories"];
  return (
    <div className="flex flex-col sm:flex-row gap-10  bg-white p-5 w-auto h-auto border-2 border-blue absolute top-[52.5px]">
      <div className="flex flex-col gap-5">
        <p className="font-semibold uppercase style-body">Category</p>
        {checkboxValues.map((value) => (
          <Checkbox key={value} label={value} value={value} fieldName={`checkbox_${value}`} onChange={(e) => onChangeCategory(value, e.target.checked)} />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase style-body ">Min price</p>
          <div className="flex flex-row items-center justify-center gap-1 sm:gap-2">
            <TextInput type="text" placeholder="e.g. 1000" fieldName="min_price" boxSize={20} onChange={onChangePrice} />
            <p> € EUR</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase style-body ">Max price</p>
          <div className="flex flex-row items-center justify-center gap-1 sm:gap-2">
            <TextInput type="text" placeholder="e.g. 5000" fieldName="max_price" boxSize={20} onChange={onChangePrice} />
            <p> € EUR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSettings;
