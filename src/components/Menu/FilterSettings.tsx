import React from "react";
import Checkbox from "../InputFields/Checkbox/Checkbox";
import TextInput from "../InputFields/TextInput/TextInput";

function FilterSettings() {
  return (
    <div className="flex flex-row gap-10  bg-white p-5 w-96 h-auto border-2 border-blue absolute top-[52.5px]">
      <div className="flex flex-col gap-5">
        <p className="font-semibold uppercase style-body">Category</p>
        <Checkbox label="Seating" value="Indeed" fieldName="checkbox" />
        <Checkbox label="Artwork" value="Indeed" fieldName="checkbox" />
        <Checkbox label="Accessories" value="Indeed" fieldName="checkbox" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase style-body ">Min price</p>
          <TextInput type="text" placeholder="e.g. 1000" fieldName="min_price" boxSize={20} />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold uppercase style-body ">Max price</p>
          <TextInput type="text" placeholder="e.g. 5000" fieldName="max_price" boxSize={20} />
        </div>
      </div>
    </div>
  );
}

export default FilterSettings;
