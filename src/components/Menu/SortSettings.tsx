import React from "react";
import Radio from "../InputFields/Radio/Radio";

interface SortSettingsProps {
  onChangeSort: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function SortSettings({ onChangeSort }: SortSettingsProps) {
  //   const sortingOptions = ["Most Popular", "Price low-high", "Price high-low"];
  return (
    <div className="flex flex-col gap-10 items-start justify-center bg-white p-5 w-[250px] h-auto border-2 border-blue absolute top-[52.5px] right-0 style-body">
      <Radio key={"Most Popular"} label={"Most Popular"} value={"Most Popular"} fieldName={"sort_option"} onChange={onChangeSort} defaultChecked />
      <Radio key={"Price low-high"} label={"Price low-high"} value={"Price low-high"} fieldName={"sort_option"} onChange={onChangeSort} />
      <Radio key={"Price high-low"} label={"Price high-low"} value={"Price high-low"} fieldName={"sort_option"} onChange={onChangeSort} />
    </div>
  );
}

export default SortSettings;
