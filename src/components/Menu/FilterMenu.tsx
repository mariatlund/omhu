import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import FilterSettings from "./FilterSettings";

export interface FilterMenuProps {
  handlePriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterMenu({ handleFilter, handlePriceChange }: FilterMenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="relative">
      <Button intent={showMenu ? "primary" : "secondary"} kind="base" size="large" label="Filter" icon={showMenu ? "close" : "filter"} callback={() => setShowMenu(!showMenu)} />
      {showMenu && <FilterSettings onChangeCategory={handleFilter} onChangePrice={handlePriceChange} />}
    </div>
  );
}

export default FilterMenu;
