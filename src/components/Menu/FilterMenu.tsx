import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import FilterSettings from "./FilterSettings";

function FilterMenu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="relative">
      <Button intent="secondary" kind="base" size="large" label="Filter" icon="filter" callback={() => setShowMenu(!showMenu)} />
      {showMenu && <FilterSettings />}
    </div>
  );
}

export default FilterMenu;
