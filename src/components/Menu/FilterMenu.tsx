import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import FilterSettings from "./FilterSettings";

export interface FilterMenuProps {
  handleFilter: (value: string, isChecked: boolean) => void;
  handlePriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterMenu({ handleFilter, handlePriceChange }: FilterMenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="relative">
      <Button intent="secondary" kind="base" size="large" label="Filter" icon="filter" callback={() => setShowMenu(!showMenu)} />
      {showMenu && <FilterSettings onChangeCategory={handleFilter} onChangePrice={handlePriceChange} />}
    </div>
  );
}

export default FilterMenu;
