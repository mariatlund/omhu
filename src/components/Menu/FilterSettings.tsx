import React from "react";
import Checkbox from "../InputFields/Checkbox/Checkbox";
import TextInput from "../InputFields/TextInput/TextInput";
import { FilterOptions } from "@/types/filterOptions";

interface FilterSettingsProps {
  // onChangeCategory: (category: string, checked: boolean) => void;
  onChangePrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFilter: FilterOptions;
  setSelectedFilter: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

function FilterSettings({ onChangeCategory, onChangePrice, selectedFilter, setSelectedFilter }: FilterSettingsProps) {
  const checkboxValues = ["Seating", "Artwork", "Accessories"];
  const { filterCategory, price } = selectedFilter;
  const { min, max } = price;

  const clearFilters = () => {
    setSelectedFilter({
      filterCategory: [],
      price: {
        min: 0,
        max: 0,
      },
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-10  bg-white p-5 w-auto  sm:w-[450px] h-auto border-2 border-blue absolute top-[52.5px] z-50 text-blue">
      <div className="flex flex-col gap-5">
        <p className="font-semibold uppercase style-body">Category</p>
        {checkboxValues.map((item) => (
          <Checkbox key={item} label={item} value={item} name={`checkbox_${item}`} onChange={(event) => onChangeCategory(event)} checked={filterCategory.includes(item)} />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase style-body ">Min price</p>
          <div className="flex flex-row items-center justify-center gap-2">
            <TextInput type="text" placeholder="e.g. 1000" fieldName="min_price" onChange={onChangePrice} pattern="[0-9]" value={min.toString()} />
            <span>€ EUR </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase style-body ">Max price</p>
          <div className="flex flex-row items-center justify-center gap-2">
            <TextInput type="text" placeholder="e.g. 5000" fieldName="max_price" onChange={onChangePrice} pattern="[0-9]" value={max.toString()} />
            <span>€ EUR</span>
          </div>
        </div>
        {(filterCategory.length > 0 || min > 0 || max > 0) && (
          <button onClick={clearFilters} className="text-blue hover:text-white hover:bg-blue border-2 border-blue py-1 px-2 uppercase font-semibold style-body">
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}

export default FilterSettings;
